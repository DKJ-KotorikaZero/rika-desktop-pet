(() => {
  'use strict';

  const el = id => document.getElementById(id);
  const sprite = el('sprite');
  const stage = el('stage');
  const selector = el('state');
  const badge = el('badge');
  const idleDelay = 30_000;
  const sources = {
    current: {url: stage.dataset.currentAtlas, height: 2288},
    original: {url: stage.dataset.originalAtlas, height: 2288},
    sweeping: {url: stage.dataset.sweepingAtlas, height: 208},
    bottle: {url: stage.dataset.bottleAtlas, height: 208},
  };
  const states = {
    idle: [0, [1680, 660, 660, 840, 840, 1920]],
    'idle-calm': [0, [1680, 660, 660, 840, 840, 1920], 'original'],
    'running-right': [1, [120, 120, 120, 120, 120, 120, 120, 220]],
    'running-left': [2, [120, 120, 120, 120, 120, 120, 120, 220]],
    waving: [3, [140, 140, 140, 280]],
    jumping: [4, [140, 140, 140, 140, 280]],
    'jumping-original': [4, [140, 140, 140, 140, 280], 'original'],
    failed: [5, [140, 140, 140, 140, 140, 140, 140, 240]],
    waiting: [6, [150, 150, 150, 150, 150, 260]],
    running: [7, [120, 120, 120, 120, 120, 220]],
    review: [8, [150, 150, 150, 150, 150, 280]],
  };
  const sweepFrames = [[0, 380], [1, 520]];
  for (let pass = 0; pass < 4; pass += 1) {
    sweepFrames.push([2, 240], [3, 160], [4, 160], [5, 240], [4, 160], [3, 160]);
  }
  sweepFrames.push([2, 220], [6, 500], [7, 600]);
  const eggs = {
    sweeping: {
      frames: sweepFrames,
      label: '小彩蛋 · 悄悄打扫一下～',
      ariaLabel: '梨花正在扫地，点击摸摸她的头',
    },
    bottle: {
      frames: [[0, 360], [1, 420], [2, 700], [3, 700], [4, 600], [5, 700],
        [4, 400], [2, 550], [6, 500], [7, 460]],
      label: '小彩蛋 · 抱着葡萄酒歇一会～',
      ariaLabel: '梨花正抱着葡萄酒瓶，点击摸摸她的头',
    },
  };

  let selectedState = 'idle';
  let frame = 0;
  let elapsed = 0;
  let idleElapsed = 0;
  let lastTick = null;
  let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let follow = false;
  let look = null;
  let interaction = null;
  let completedLoops = 0;
  let insideHead = false;
  let lastPat = -Infinity;
  let patCount = 0;
  let displayedSource = null;
  let lastEgg = null;
  const ready = new Set();
  const failures = new Set();
  const eggOptions = Object.fromEntries(Object.keys(eggs).map(key => [key, selector.querySelector(`[value="${key}"]`)]));
  Object.values(eggOptions).forEach(option => { option.disabled = true; });

  function activeEgg() {
    return interaction && eggs[interaction.type];
  }

  function markActivity() {
    idleElapsed = 0;
  }

  function draw(row, column, source = 'current') {
    if (displayedSource !== source) {
      sprite.style.backgroundImage = `url('${sources[source].url}')`;
      sprite.style.backgroundSize = `1536px ${sources[source].height}px`;
      displayedSource = source;
    }
    sprite.style.backgroundPosition = `${-192 * column}px ${-208 * row}px`;
    sprite.dataset.animation = interaction?.type || selectedState;
    sprite.dataset.frame = String(column);
  }

  function drawCurrent() {
    if (activeEgg()) {
      draw(0, activeEgg().frames[frame][0], interaction.type);
      return;
    }
    if (interaction?.type === 'headpat') {
      draw(4, frame);
      return;
    }
    if (follow && look !== null) {
      draw(9 + Math.floor(look / 8), look % 8);
      return;
    }
    const [row, , source] = states[selectedState];
    draw(row, frame, source);
  }

  function stateLabel() {
    badge.textContent = selector.selectedOptions[0].textContent;
    sprite.setAttribute('aria-label', '摸摸古手梨花的头');
  }

  function finishInteraction() {
    interaction = null;
    completedLoops = 0;
    frame = 0;
    elapsed = 0;
    idleElapsed = 0;
    look = null;
    selector.value = selectedState;
    stateLabel();
    drawCurrent();
  }

  function beginEgg(type, automatic) {
    if (!ready.has(type) || paused || document.hidden) return false;
    interaction = {type, automatic};
    lastEgg = type;
    frame = 0;
    elapsed = 0;
    idleElapsed = 0;
    look = null;
    badge.textContent = eggs[type].label;
    sprite.setAttribute('aria-label', eggs[type].ariaLabel);
    drawCurrent();
    return true;
  }

  function beginPat() {
    const now = performance.now();
    markActivity();
    const interruptingEgg = Boolean(activeEgg());
    if (!interruptingEgg && now - lastPat < 1200) return;
    if (interruptingEgg) finishInteraction();
    lastPat = now;
    patCount += 1;
    interaction = {type: 'headpat'};
    completedLoops = 0;
    frame = paused ? 2 : 0;
    elapsed = 0;
    look = null;
    badge.textContent = `摸摸头 · 咪啪～ ${patCount}`;
    sprite.setAttribute('aria-label', '摸摸古手梨花的头');
    drawCurrent();
  }

  function hitHead(event) {
    const bounds = sprite.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    return x > .2 && x < .8 && y > .02 && y < .45;
  }

  function pauseLabel() {
    el('pause').textContent = paused ? '播放动画' : '暂停动画';
    el('pause').setAttribute('aria-pressed', String(paused));
  }

  selector.addEventListener('change', () => {
    markActivity();
    if (eggs[selector.value]) {
      // Choosing the egg explicitly plays it once and returns to the prior action.
      paused = false;
      pauseLabel();
      if (!beginEgg(selector.value, false)) selector.value = selectedState;
      return;
    }
    selectedState = selector.value;
    finishInteraction();
  });
  el('pet').addEventListener('click', beginPat);
  sprite.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    event.preventDefault();
    sprite.focus({preventScroll: true});
    beginPat();
  });
  sprite.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      beginPat();
    }
  });
  el('pause').addEventListener('click', () => {
    markActivity();
    paused = !paused;
    lastTick = null;
    pauseLabel();
  });
  el('follow').addEventListener('click', () => {
    markActivity();
    follow = !follow;
    look = null;
    el('follow').setAttribute('aria-pressed', String(follow));
    el('follow').textContent = follow ? '已开启目光跟随' : '跟随鼠标';
    drawCurrent();
  });
  el('backdrop').addEventListener('click', () => {
    markActivity();
    const light = stage.classList.toggle('light');
    el('backdrop').textContent = light ? '切换深色背景' : '切换浅色背景';
  });
  stage.addEventListener('pointermove', event => {
    markActivity();
    const hit = hitHead(event);
    if (hit && !insideHead) beginPat();
    insideHead = hit;
    if (!follow) return;
    const bounds = sprite.getBoundingClientRect();
    const dx = event.clientX - (bounds.left + bounds.width / 2);
    const dy = event.clientY - (bounds.top + bounds.height * .3);
    look = Math.hypot(dx, dy) < 28 ? null :
      Math.round(((Math.atan2(dx, -dy) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI / 8)) % 16;
  });
  stage.addEventListener('pointerleave', () => {
    look = null;
    insideHead = false;
  });
  document.addEventListener('visibilitychange', () => {
    idleElapsed = 0;
    lastTick = null;
    insideHead = false;
    if (document.hidden && activeEgg()) finishInteraction();
  });

  function currentDurations() {
    if (activeEgg()) return activeEgg().frames.map(item => item[1]);
    return states[interaction?.type === 'headpat' ? 'jumping' : selectedState][1];
  }

  function advance(delta) {
    elapsed += delta;
    const durations = currentDurations();
    while (elapsed >= durations[frame]) {
      elapsed -= durations[frame];
      frame += 1;
      if (frame < durations.length) continue;
      frame = 0;
      if (activeEgg()) {
        finishInteraction();
        return;
      }
      if (interaction?.type === 'headpat' && ++completedLoops >= 2) {
        finishInteraction();
        return;
      }
    }
  }

  function tick(now) {
    const delta = lastTick === null ? 0 : Math.min(Math.max(now - lastTick, 0), 250);
    lastTick = now;
    if (!paused && !document.hidden) {
      const resting = selectedState === 'idle' || selectedState === 'idle-calm';
      if (!interaction && resting && Object.keys(eggs).some(key => ready.has(key))) {
        idleElapsed += delta;
        if (idleElapsed >= idleDelay) {
          let choices = Object.keys(eggs).filter(key => ready.has(key));
          if (choices.length > 1) choices = choices.filter(key => key !== lastEgg);
          beginEgg(choices[Math.floor(Math.random() * choices.length)], true);
        }
      }
      if (interaction || !follow || look === null) advance(delta);
    }
    drawCurrent();
    requestAnimationFrame(tick);
  }

  for (const [key, source] of Object.entries(sources)) {
    const asset = new Image();
    asset.onload = () => {
      ready.add(key);
      if (eggOptions[key]) eggOptions[key].disabled = false;
    };
    asset.onerror = () => {
      failures.add(key);
      el('error').textContent = failures.has('current') || failures.has('original') ?
        '部分动作素材没有载入，请刷新页面或检查上传文件是否完整。' :
        '彩蛋动画未能全部载入，请刷新页面或检查更新包是否完整。';
      el('error').classList.add('show');
    };
    asset.src = source.url;
  }
  pauseLabel();
  drawCurrent();
  requestAnimationFrame(tick);
})();
