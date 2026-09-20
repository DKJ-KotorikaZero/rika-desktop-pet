# 古手梨花：图像与动作提示词

使用内置 image_gen 生成主图、Q 版基准和各动作组，再使用桌面宠物工具完成分帧、拼合与检查。


## main-art

Create a polished Japanese anime key visual of Rika Furude (古手梨花) from Higurashi When They Cry. Instantly recognizable long straight deep indigo-blue hair, blunt bangs and side locks, soft violet eyes, youthful wholesome face and gentle knowing nipaa smile. Her classic shrine maiden outfit: fully covering white kosode with wide sleeves, scarlet pleated hakama, white tabi socks and simple brown zori sandals. No weapons or handheld objects. Whole body from hair to sandals visible, elegant centered three-quarter standing pose, both hands gently together in front. Landscape 3:2 composition with generous silhouette breathing room. Atmospheric Hinamizawa shrine courtyard on a summer evening, red torii, distant green forest and hydrangeas softly out of focus, a few warm lantern lights against cool indigo twilight. Restrained mysterious and tender mood, refined clean anime linework and cel shading with soft painterly environmental light, rich yet balanced colors, polished character illustration. Her figure remains crisp and dominant, not lost in the background. One character only. No text, logo, watermark, chibi, erotic elements, gore, horror monsters, lens blur on the character or cropped hair/feet.


## base-pet

Create one clean full-body reference sprite for Codex pet 古手梨花.

Pet identity: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections..
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..


Place a single centered pose on a perfectly flat pure user-selected #00FF00 chroma-key background. Keep the full pet visible, compact, readable at 192x208, and easy to animate. Preserve approved reference identity cues. No scenery, text, borders, checkerboard transparency, shadows, glows, detached effects, or extra props. Keep #00FF00 and close colors out of the pet, props, highlights, and effects.


## failed

Create one horizontal animation strip for Codex pet `rika-furude`, state `failed`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Blocked/failed loop: slumped or deflated reaction with sad or closed eyes.

State requirements:
- Show failure through slumped pose, drooping ears/limbs, closed or sad eyes, and lower body position.
- Tears, small smoke puffs, or tiny stars are allowed only if attached to or overlapping the pet silhouette and kept inside the same frame slot.
- Do not draw red X marks, floating symbols, detached stars, separated smoke clouds, falling tear drops, dust, or other loose effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## idle

Create one horizontal animation strip for Codex pet `rika-furude`, state `idle`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Calm low-distraction resting loop: subtle breathing, tiny blink, slight head/body bob, and only quiet persona-preserving motion.

State requirements:
- CRITICAL: idle is the low-distraction baseline state and the first frame is also used as the reduced-motion static pet.
- Use only subtle idle motion: gentle breathing, a tiny blink, a slight head or body bob, a very small material sway, or another quiet motion that fits the pet persona.
- Keep the pet essentially in the same pose, facing direction, silhouette, markings, palette, and prop state across all 6 frames.
- Idle variation must stay calm but still read as animation; do not repeat effectively identical copies across the loop.
- Do not show waving, walking, running, jumping, talking, working, reviewing, emotional reactions, large gestures, item interactions, or new props.
- Feet, base, body, or object anchor should remain planted or nearly planted.
- The first and last frames should be very close visually so the loop feels calm and does not pop.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## jumping

Create one horizontal animation strip for Codex pet `rika-furude`, state `jumping`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 5 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 5 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Hover jump loop: anticipation, lift, airborne peak, descent, and settle through body height.

State requirements:
- Show the jump through pose and vertical body position only: anticipation, lift, airborne peak, descent, settle.
- Do not draw ground shadows, contact shadows, drop shadows, oval shadows, landing marks, dust, smears, bounce pads, or motion marks under the pet.
- Keep the background outside the pet perfectly flat chroma key with no darker key-colored patches.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## look-row-10

Create one horizontal look-direction strip for Codex pet `rika-furude`, atlas row 10.

Use the attached canonical base, completed standard contact sheet, layout guide, and approved four-cardinal strip for identity, scale, registration, spacing, direction semantics, and cross-row continuity. Read `qa/look-mechanics.md` and follow its pet-specific movement and eye/prop mechanics. The approved cardinal strip and completed coherent row 9 are authoritative. Use the cardinals for direction meaning and row 9 for cross-row identity, scale, registration, and continuity.

COHERENT SYNTHESIS LOCK: produce one unified eight-pose row. Do not paste, tile, or independently restyle individual cells. Every final cell must be drawn together with the same face construction, body proportions, line/render quality, lighting, materials, scale, baseline, and registration.

Output exactly 8 complete full-body frames in this exact left-to-right order: 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5. Degrees are clockwise: 000 is up, 090 right, 180 down, and 270 left. Neutral/front is not part of this row.

DIRECTION TARGETS — use these to shape the coherent row, not as pixel-level landmark gates:

1. `180`: vertical DOWN; no horizontal requirement.
2. `202.5`: horizontal SCREEN-LEFT and vertical DOWN.
3. `225`: horizontal SCREEN-LEFT and vertical DOWN.
4. `247.5`: horizontal SCREEN-LEFT and vertical DOWN.
5. `270`: horizontal SCREEN-LEFT; no vertical requirement.
6. `292.5`: horizontal SCREEN-LEFT and vertical UP.
7. `315`: horizontal SCREEN-LEFT and vertical UP.
8. `337.5`: horizontal SCREEN-LEFT and vertical UP.

Cardinals must be unmistakable. Intermediate poses should broadly occupy the intended quadrant and advance naturally through the ordered loop. Minor pupil, nose, eyelid, or aiming-feature deviations are acceptable when the overall direction, continuity, identity, and motion remain coherent. Do not deform the character merely to make every intermediate axis independently obvious.

SCREEN-COORDINATE LOCK: screen-left means the viewer's left image edge, never the character's own left. The row should travel naturally through the left half of the loop. Near-vertical 202.5 and 337.5 may have subtle horizontal cues; prioritize a coherent arc over exact pupil or nose placement.

HARD LAYOUT AND CONTINUITY CONTRACT — DETERMINISTIC REGISTRATION: draw exactly eight separated pose groups in left-to-right direction order. Keep enough chroma-only space between neighboring poses that each complete pose can be detected without cutting through foreground. Approximate the guide's equal spacing, but do not distort a pose merely to hit an exact source-canvas coordinate; deterministic assembly will crop the eight ordered groups, then apply one shared scale and baseline.

Use the same body height, head size, baseline, and planted-body position across the generated family. Never overlap neighboring poses, merge two poses into one connected group, crop foreground at the outer canvas edge, or resize one pose independently.

Keep the feet, base, or lower torso planted at the same coordinates across all eight frames. Express direction through the eyes, face, head, upper body, and physically appropriate prop movement, not by moving, rotating, or rescaling the entire sprite.

Place one centered pose in each invisible equal-width slot on flat pure user-selected #00FF00. Change only the natural parts needed to express gaze: eyes, eyelids, head, face, neck, upper body, appendages, and constrained prop follow-through. Keep identity, silhouette, materials, palette, markings, and props consistent.

ROW-BOUNDARY LOCK: 180 must continue directly from row 9's 157.5, matching its body size, baseline, planted anchor, expression, and construction. 337.5 must be one even 22.5-degree step before 000: nearly up-facing while remaining on the overall left-hand arc. Do not distort pupils, nose, or body geometry merely to exaggerate the subtle horizontal component.

PRE-RETURN CHECK: reject this result if it does not contain eight separated pose groups in the required order; neighboring poses overlap; foreground is cropped at the outer canvas edge; any frame changes sprite scale, body or head size, baseline, or planted-body position; the row visibly reverses into the wrong half of the loop; or 180 does not continue from 157.5 or 337.5 does not flow evenly into 000. Minor intermediate pupil or nose deviations are not rejection reasons. Exact cell cropping, resizing, and recentering happen deterministically after generation.

Do not rotate, skew, or tilt the whole sprite to fake gaze. Do not add replacement/googly eyes, labels, degree text, arrows, clocks, grids, shadows, glows, scenery, detached effects, or chroma-key colors inside the pet.


## look-row-9

Create one horizontal look-direction strip for Codex pet `rika-furude`, atlas row 9.

Use the attached canonical base, completed standard contact sheet, layout guide, and approved four-cardinal strip for identity, scale, registration, spacing, direction semantics, and cross-row continuity. Read `qa/look-mechanics.md` and follow its pet-specific movement and eye/prop mechanics. The approved cardinal strip is authoritative for the up, screen-right, down, and screen-left pose families. Interpolate the intermediate directions as even 22.5-degree steps between those anchors.

COHERENT SYNTHESIS LOCK: produce one unified eight-pose row. Do not paste, tile, or independently restyle individual cells. Every final cell must be drawn together with the same face construction, body proportions, line/render quality, lighting, materials, scale, baseline, and registration.

Output exactly 8 complete full-body frames in this exact left-to-right order: 000, 022.5, 045, 067.5, 090, 112.5, 135, 157.5. Degrees are clockwise: 000 is up, 090 right, 180 down, and 270 left. Neutral/front is not part of this row.

DIRECTION TARGETS — use these to shape the coherent row, not as pixel-level landmark gates:

1. `000`: vertical UP; no horizontal requirement.
2. `022.5`: horizontal SCREEN-RIGHT and vertical UP.
3. `045`: horizontal SCREEN-RIGHT and vertical UP.
4. `067.5`: horizontal SCREEN-RIGHT and vertical UP.
5. `090`: horizontal SCREEN-RIGHT; no vertical requirement.
6. `112.5`: horizontal SCREEN-RIGHT and vertical DOWN.
7. `135`: horizontal SCREEN-RIGHT and vertical DOWN.
8. `157.5`: horizontal SCREEN-RIGHT and vertical DOWN.

Cardinals must be unmistakable. Intermediate poses should broadly occupy the intended quadrant and advance naturally through the ordered loop. Minor pupil, nose, eyelid, or aiming-feature deviations are acceptable when the overall direction, continuity, identity, and motion remain coherent. Do not deform the character merely to make every intermediate axis independently obvious.

SCREEN-COORDINATE LOCK: screen-right means the viewer's right image edge, never the character's own right. The row should travel naturally through the right half of the loop. Near-vertical 022.5 and 157.5 may have subtle horizontal cues; prioritize a coherent arc over exact pupil or nose placement.

HARD LAYOUT AND CONTINUITY CONTRACT — DETERMINISTIC REGISTRATION: draw exactly eight separated pose groups in left-to-right direction order. Keep enough chroma-only space between neighboring poses that each complete pose can be detected without cutting through foreground. Approximate the guide's equal spacing, but do not distort a pose merely to hit an exact source-canvas coordinate; deterministic assembly will crop the eight ordered groups, then apply one shared scale and baseline.

Use the same body height, head size, baseline, and planted-body position across the generated family. Never overlap neighboring poses, merge two poses into one connected group, crop foreground at the outer canvas edge, or resize one pose independently.

Keep the feet, base, or lower torso planted at the same coordinates across all eight frames. Express direction through the eyes, face, head, upper body, and physically appropriate prop movement, not by moving, rotating, or rescaling the entire sprite.

Place one centered pose in each invisible equal-width slot on flat pure user-selected #00FF00. Change only the natural parts needed to express gaze: eyes, eyelids, head, face, neck, upper body, appendages, and constrained prop follow-through. Keep identity, silhouette, materials, palette, markings, and props consistent.

ROW-BOUNDARY LOCK: 157.5 must be one even 22.5-degree step before 180. Match the approved 180 pose's body size, baseline, planted anchor, expression, and construction. Preserve the overall right-hand arc, but do not distort pupils, nose, or body geometry merely to exaggerate the subtle horizontal component.

PRE-RETURN CHECK: reject this result if it does not contain eight separated pose groups in the required order; neighboring poses overlap; foreground is cropped at the outer canvas edge; any frame changes sprite scale, body or head size, baseline, or planted-body position; the row visibly reverses into the wrong half of the loop; or 157.5 does not flow evenly into 180. Minor intermediate pupil or nose deviations are not rejection reasons. Exact cell cropping, resizing, and recentering happen deterministically after generation.

Do not rotate, skew, or tilt the whole sprite to fake gaze. Do not add replacement/googly eyes, labels, degree text, arrows, clocks, grids, shadows, glows, scenery, detached effects, or chroma-key colors inside the pet.


## review

Create one horizontal animation strip for Codex pet `rika-furude`, state `review`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Ready-review loop: focused inspection of completed output with lean, blink, narrowed eyes, head tilt, or paw pose.

State requirements:
- Show review through lean, blink, narrowed eyes, head tilt, or paw/hand position.
- Do not add magnifying glasses, papers, code, UI, punctuation, symbols, or other new props unless they already exist in the base pet identity.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## running-left

Create one horizontal animation strip for Codex pet `rika-furude`, state `running-left`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Dragging-left loop: show directional movement to the left through body and limb poses only.

State requirements:
- Show directional drag movement to the left through body, limb, and prop movement only.
- The row must unmistakably face and travel left.
- The movement cadence must alternate visibly across the 8 frames instead of repeating one nearly static stride.
- Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## running-right

Create one horizontal animation strip for Codex pet `rika-furude`, state `running-right`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Dragging-right loop: show directional movement to the right through body and limb poses only.

State requirements:
- Show directional drag movement to the right through body, limb, and prop movement only.
- The row must unmistakably face and travel right.
- The movement cadence must alternate visibly across the 8 frames instead of repeating one nearly static stride.
- Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## running

Create one horizontal animation strip for Codex pet `rika-furude`, state `running`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Working loop: focused active-task processing, thinking, typing, scanning, or effortful concentration; not literal foot-running, jogging, sprinting, treadmill motion, raised knees, long steps, pumping arms, or directional travel.

State requirements:
- Show the pet actively working or processing, as if running a task: focused posture, busy hands or paws, purposeful bobbing, thinking motion, tool or prop motion only if already part of the pet identity, or other non-locomotion activity.
- Do not show literal foot-running, jogging, sprinting, treadmill motion, raised knees, long steps, pumping arms, directional travel, speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## waiting

Create one horizontal animation strip for Codex pet `rika-furude`, state `waiting`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Needs-input loop: expectant asking pose for approval, help, or user input.

State requirements:
- Show that Codex needs approval, help, or user input through an expectant asking pose.
- Keep the motion patient and readable, without turning it into ordinary idle or review.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## waving

Create one horizontal animation strip for Codex pet `rika-furude`, state `waving`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 4 full-body frames in one left-to-right row on flat pure user-selected #00FF00. Treat the row as 4 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Rika Furude (古手梨花) from Higurashi, faithfully adapted from the main illustration into a cute compact chibi. Long straight deep indigo-blue hair reaching the lower calves, blunt bangs, side locks and violet eyes; a gentle knowing nipaa smile. Traditional shrine maiden white kosode with wide sleeves, scarlet red pleated hakama, white tabi socks and simple brown zori sandals. Compact continuous hair shape behind shoulders and body, no detached wisps. Front hands gently together, clear small feet. Symmetric silhouette and unadorned hair, no hair ornament, no weapon, no handheld prop, no text or emblem. Wholesome fully covered outfit. No green anywhere in the character, highlights or reflections.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `sticker`: Polished sticker mascot with bold clean shapes, crisp outline, flat colors, and minimal highlight detail. User style notes: Polished anime chibi, about 2.5 heads tall, clear fine dark indigo outlines and simple elegant cel shading. Big readable violet eyes and soft facial expression. Preserve character identity while simplifying the main illustration into one complete sprite. No white sticker border, glow or ground shadow..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Greeting loop: paw or limb down, raised, tilted, and returning in a friendly attention gesture.

State requirements:
- Show the greeting through paw, hand, wing, or limb pose only.
- Do not draw wave marks, motion arcs, lines, sparkles, symbols, or floating effects around the gesture.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## headpat

Create one coherent horizontal five-frame head-pat reaction animation for Rika Furude, a compact chibi desktop pet. Match the canonical base and current neutral sprite exactly for identity/proportions, long indigo hair, violet eyes, white kosode, red hakama, tabi and sandals. The main illustration supplies identity only. The five-slot guide supplies invisible spacing.
The user strokes her hair with their pointer (DO NOT draw an external hand/cursor). Show the character reacting sweetly: 0 eyes glance slightly up in anticipation; 1 she closes her eyes into a delighted nipaa smile and gently inclines her head toward the touch; 2 a tiny happy lift on her toes with head leaning softly the other way and long hair following; 3 she settles with a soft head nuzzle and small cheek blush; 4 opens eyes and returns toward neutral. This also occupies the desktop hover/jump reaction slot, so include a readable very small body lift-and-settle while keeping the reaction affectionate and not energetic. Her own hands remain clasped low in front; do not make her pet her own head. Wholesome, same face and costume, no new props or external human hand. Keep head/body size constant and anatomy intact, head turns natural not warped.
Exactly5 separated complete fullbody sprites in one row, each <=65%invisible slotwidth, broadgaps, feet/hair complete and safe margins. Actual transparent background preferred or pure #00FF00. No scene, floor/shadow, hearts/stars, text, marks, blur, motionlines, halos or green on character.


## idle-enriched

Create one coherent horizontal six-frame richer idle animation for Rika Furude, a compact chibi desktop pet. The canonical base and current neutral cell define exact identity, head/body proportions, indigo hair and white/red shrine maiden clothing. The main illustration defines character identity only; the six-slot guide defines invisible spacing.
Exactly six separated complete full-body sprites. Gentle restful loop: 0 relaxed neutral open eyes and clasped hands; 1 soft inhale with tiny shoulder rise and slight head inclination; 2 gentle closed-eye nipaa smile while exhaling, lower hair sways a little; 3 eyes half-open and head eases back; 4 slight opposite head inclination with open violet eyes and small hair follow-through; 5 returns toward frame0 neutral. Keep motion noticeably readable at192x208 but calm and low-distraction, feet planted, head/body apparent size unchanged. No big gestures, walking, waving, talking, jumping or props. Preserve face, hair volume, outfit, lighting and silhouette; no stretched skull or extra limbs.
One pose in each of six invisible equalwidth slots, each sprite <=65%slotwidth, broad empty gaps, complete hair/feet and safe top/bottom margins. Transparent background preferred; otherwise pure #00FF00. No green on character, floor, shadow, glow, detached effects, symbols, text, visible guides or borders.


## look-cardinals

Create one horizontal four-cardinal anchor strip for Codex pet `rika-furude`.

Use the attached canonical base, completed standard contact sheet, and layout guide for exact identity, style, scale, baseline, face construction, materials, palette, markings, props, and spacing. Read `qa/look-mechanics.md` and use the pet's natural gaze mechanism.

Output exactly four centered complete full-body poses in this exact left-to-right order: `000 up`, `090 screen-right`, `180 down`, `270 screen-left`. Screen-left and screen-right always mean the viewer's image edges, never the character's own left or right.

For `000`, keep the face broadly frontal and point the eyes and natural head mechanism toward the TOP edge. For `090`, put the nose tip, pupils, face surface, or natural aiming feature on the screen-right side of the head center. For `180`, keep the face broadly frontal and point toward the BOTTOM edge. For `270`, apply the inverse screen-left landmark rule. Every cardinal must be unmistakable without labels.

Place one pose in each invisible equal-width slot on a flat pure user-selected #00FF00 background with generous padding. Keep scale, feet/base, lower body, and registration consistent across all four slots.

Do not rotate, skew, or tilt the whole sprite to fake gaze. Do not add replacement eyes, labels, degree text, arrows, boxes, guide marks, shadows, scenery, detached effects, or chroma-key colors inside the pet.


## look-mechanics

# Rika Furude: natural look mechanics

Keep the canonical compact chibi proportions, gentle personality, long deep-indigo hair, violet anime eyes and white kosode/red hakama. The canonical sprite and approved standard contact sheet override the main illustration's realistic body proportions. No props or hair ornaments.

Her feet, lower legs, hakama, clasped hands and lower torso remain planted at one shared baseline and anchor. Gaze leads through coordinated eyeball, eyelid and eyebrow changes inside the original anime eye shapes. Her separate head and neck then turn and pitch naturally; the nearby cheek locks follow slightly while the long lower hair stays near the torso. Preserve skull size and facial spacing. Do not slide pupils outside their sockets, add replacement eyes, turn the body into a different silhouette or rotate/skew the entire sprite.

Cardinal pose families, in viewer/screen coordinates:

- 000 up: face broadly front, chin visibly lifted, gaze aimed toward the TOP edge, irises high within reshaped eyelids, more lower-face/neck visible. This must read as looking up, never neutral.
- 090 right: head yaw toward SCREEN RIGHT with a readable three-quarter face; nose tip and the violet gaze lie right of the head center, the far eye narrows/partly occludes, and the near cheek becomes clearer. Body and feet still face mainly front.
- 180 down: chin tucked, head pitched down, gaze visibly lowered beneath the brows, upper lids lowered without closing both eyes completely, more crown/bangs visible. Preserve visible eye direction and gentle expression.
- 270 left: the opposing natural head yaw toward SCREEN LEFT; nose tip and violet gaze lie left of head center, far eye narrows/partly occludes, near cheek clearer. Do not leave this pose front-facing or right-facing.

Motion budget: small but readable head yaw up to roughly 30 degrees and pitch up/down around 15–20 degrees, restrained shoulder follow-through. Maintain roughly even motion per 22.5-degree step. Diagonals combine their named horizontal yaw and vertical pitch, with both axes visible. The nose, eyes, chin and cheek locks progress continuously; hair and sleeves never flip or detach. No full-body lean, changing outfit, scale pop or baseline jump.

Generate each final eight-pose half as one coherent family with broad empty gutters. Row 9 follows 000,022.5,045,067.5,090,112.5,135,157.5. Row 10 continues 180,202.5,225,247.5,270,292.5,315,337.5, using approved row 9 for head size, registration and the boundary steps. The 157.5→180 and 337.5→000 transitions must be the same small step as neighboring pairs. Each sprite should occupy at most about 65–70% of its invisible slot width, with complete long hair and feet, and no overlap.

Flat #00FF00 background or actual alpha; no key-colored character details, scene, floor, shadow, glow, labels, guide marks or detached effects.


## 补充约束与修正

每组都以 Q 版基准锁定比例，主图只提供人物与服装参考。对修正后的沮丧动作，要求每帧角色占槽位宽度不超过 65%，留出宽间隔，避免长发相接。目光方向使用检查通过的四个主要方向作为基准，两组连续生成。生成的真实透明通道予以保留。

用户随后要求增加摸头与待机变化。新增 idle-enriched 替换桌面皮肤待机，新增 headpat 替换桌面端由悬停触发的 jumping 槽位。原来的两组动画保留在 extras 中供预览页使用。16 个目光方向与默认中性姿态保持像素一致，复用已通过的方向检查。


## sweeping — 网页闲置彩蛋

Create one coherent 8-frame animation strip for the existing Rika Furude chibi pet. Match the attached canonical character and current idle cell exactly: long straight indigo hair with blunt bangs, violet eyes, white shrine-maiden kosode with wide sleeves, red hakama and front waist bow, white tabi and brown/red zori. Same face, head-to-body ratio, clean anime cel shading and full-body camera across all frames.

Action: after being left alone she takes out a small traditional straw broom, quietly sweeps the floor, then puts it away. A warm, peaceful little shrine-maiden moment.

Exactly EIGHT complete separated frames in ONE horizontal left-to-right row. Use the layout guide only for spacing; do not reproduce its lines, numbers or text. Keep all heads at the same height and all feet on one baseline; preserve character scale, facing and body placement. Leave generous space between poses. The broom handle must stay BELOW the top of her head and the straw must remain inside its own slot. Both hands grasp the handle naturally while sweeping; no detached broom pieces or extra limbs.

Frame 1: still no broom; slight glance to the side and one hand reaching behind her hip.
Frame 2: draws out the broom and holds it upright next to her, bristles at ground level, gentle attentive face.
Frame 3: leans forward only a little, holding broom with BOTH hands, straw tip far toward screen-left at floor height, looks down at her work.
Frame 4: same stance, broom tip moving across the ground to middle-left; coordinated elbows, sleeves and tiny hair sway.
Frame 5: same stance, broom tip continuing to middle-right, calm concentrated face.
Frame 6: same stance, broom tip far screen-right; these four sweep frames must form a smooth reversible left-right motion with an anatomically consistent two-handed grip.
Frame 7: lifts the broom upright again, relaxes and gives a small closed-eye satisfied smile.
Frame 8: broom completely put away behind her, hands together in the original resting pose, smile and body position ready to return to the idle reference.

Output a wide sprite strip on perfectly uniform pure GREEN #00FF00 chroma background for deterministic removal. No green in the character or broom. Fully opaque character interiors. No scenery, ground plane, shadows, detached dust, sparkle particles, captions, guide marks, borders or additional people. Hair, sleeves, feet, broom handle and bristles must all be completely visible. Never crop a pose or let adjacent poses overlap. This is an animation family, not eight independent character redesigns.

## wine-bottle — 网页闲置彩蛋

Create one coherent EIGHT-frame animation strip for the existing Rika Furude chibi pet, preserving the attached canonical character and current idle cell: long straight indigo hair, blunt bangs, violet eyes, white shrine-maiden kosode with wide sleeves, red hakama and front waist bow, white tabi and brown/red zori. Identical face, proportions and anime cel-shaded rendering in every frame.

The extra idle easter egg is: she picks up a sealed bottle of red grape wine, hugs it with both hands, looks at it, tilts her head with a small satisfied smile, then puts it back. The wine bottle has dark forest-green glass, a small plain burgundy label with a simple grape motif but NO letters, and a closed cork. It is a single consistent bottle no larger than her torso; always below her face. She only holds it; the cork stays closed, no drinking or intoxication.

Exactly eight complete separate full-body poses in ONE horizontal row, left-to-right, on perfectly uniform pure GREEN #00FF00 background for deterministic removal. Layout guide is for spacing only, no guide pixels in output. Same body scale, head height, facing, ground baseline and compact centered placement across all frames. Include wide outer margins so the first and last poses are never cropped. The bottle is deep forest green, distinct from the pure green background; no fluorescent green on character or bottle.

Frame 1: no bottle yet, glances down and reaches one hand just behind her hip.
Frame 2: lifts the sealed wine bottle into view, both hands around its body, close to her waist.
Frame 3: hugs the bottle against her chest below her chin, looking down at it with a soft smile.
Frame 4: continues hugging it with both hands, head tilts a little toward screen-left and hair gently follows.
Frame 5: head returns near center, eyes close for a pleased little smile, bottle stays upright and securely held.
Frame 6: opens eyes and tilts head slightly toward screen-right while hugging the same bottle.
Frame 7: lowers the bottle to her side to put it away, relaxed pose.
Frame 8: bottle fully gone; both hands together in the original resting pose, looking forward and smiling, ready to rejoin the idle reference.

Keep complete hair, sleeves, fingers, bottle, legs and feet inside each frame with generous empty spacing. No repeated unchanged middle poses, no extra limbs or floating props, no scenery, ground plane, shadows, detached hearts, sparkles, captions, labels, frames, text or blur. A coherent cute sprite animation family, not eight redesigns.
