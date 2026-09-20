# 古手梨花 · Codex 桌面宠物

《寒蝉鸣泣之时》古手梨花的同人桌面宠物皮肤。深蓝长发、紫色眼睛、白衣绯袴，配有摸头回应、丰富待机和目光跟随。

**[在线预览 · 摸摸梨花的头](https://dkj-kotorikazero.github.io/rika-desktop-pet/preview.html)** ·[下载宠物皮肤](rika-pet.zip) · [查看角色主图](rika-main.png)

## 动作展示

| 悠闲待机 | 摸摸头 | 挥手打招呼 |
| :---: | :---: | :---: |
| ![呼吸、眨眼与轻轻歪头](idle.gif) | ![闭眼微笑的摸头回应](headpat.gif) | ![挥手打招呼](waving.gif) |

桌面皮肤包含 9 组动作：待机、向左移动、向右移动、挥手、摸头回应、沮丧、等待回应、思考和查看，以及 16 个目光方向。

鼠标移到宠物身上时，会播放摸头回应：闭眼微笑、轻轻歪头、蹭一下，再恢复站姿。待机包含呼吸起伏、眨眼、轻微歪头和发梢摆动。

## 安装到 Codex

需要支持自定义桌面宠物的 Codex 桌面应用。

1. 下载并解压 [rika-pet.zip](rika-pet.zip)。
2. 将解压得到的 `rika-furude` 文件夹放入 `~/.codex/pets/`。
3. 在 Codex 的「设置 → 宠物」中刷新，选择「古手梨花」。

安装后的文件结构：

```text
~/.codex/pets/
└── rika-furude/
    ├── pet.json
    └── spritesheet.webp
```

可使用 `/pet` 显示或隐藏宠物。更多操作见 [桌面宠物使用说明](https://learn.chatgpt.com/docs/pets)。

## 浏览器预览

[打开在线预览](https://dkj-kotorikazero.github.io/rika-desktop-pet/preview.html)，在浏览器中体验全部动作与摸头互动。

下载并解压整个仓库，双击 `index.html` 或 `preview.html` 即可预览。请保持页面与 `spritesheet.webp`、`original-actions.webp` 等素材文件位于同一目录。

- 把鼠标移到梨花头上，或点击「摸摸头」体验互动。
- 打开「跟随鼠标」查看不同方向的目光。
- 切换动作、暂停动画，或切换深浅背景。
- 用键盘聚焦梨花后，按回车或空格也可摸头。

预览额外保留原来的安静眨眼与跳跃，共可切换 13 组动画变化。Codex 的动作类别由应用固定；皮肤更新了其中的待机与悬停动作，额外两组动画在网页预览中使用。

预览为静态网页，无需安装依赖或填写 API 密钥。

## 闲置小彩蛋（网页）

在「悠闲待机」或「安静待机」时，约 **30 秒没有互动**，梨花会随机开始一个小彩蛋；两种动作会交替出现。

| 悄悄扫地 | 抱葡萄酒瓶 |
| :---: | :---: |
| ![梨花拿出扫把打扫地面](sweeping.gif) | ![梨花抱起葡萄酒瓶](wine-bottle.gif) |

- **悄悄扫地**：拿出扫把，左右清扫几下，再把扫把收好。
- **抱葡萄酒瓶**：抱起瓶子看一看、歪头笑一下，再放回去。

彩蛋结束后会恢复原来的待机。点击梨花、点击「摸摸头」，或聚焦梨花后按回车／空格，都会立即打断彩蛋并回应摸头。动作菜单也可直接试看两种彩蛋。

暂停动画或把网页切到后台时不会自动触发；回到网页后会重新等待。正在手动查看其他动作时，彩蛋也不会打断。

这些闲置计时与额外动作由网页预览提供。Codex 桌面皮肤仍使用应用固定的 9 组动作，安装包不包含自动触发这两个彩蛋的逻辑。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `rika-main.png` | 神社夏夜主题角色主图 |
| `rika-pet.zip` | 可直接下载的安装包 |
| `pet.json`、`spritesheet.webp` | 宠物配置与透明精灵图 |
| `index.html`、`preview.html`、`pet-preview.js` | 交互预览页面与动画逻辑 |
| `sweeping.webp`、`wine-bottle.webp` | 扫地与抱瓶彩蛋动作 |
| `sweeping.gif`、`wine-bottle.gif` | 彩蛋动图展示 |
| `idle.gif`、`headpat.gif`、`waving.gif` | README 动画展示 |
| `original-actions.webp`、`idle-calm.gif`、`jumping-original.gif` | 原版眨眼与跳跃素材 |
| `prompts.md` | 主图与动作素材的生成提示词 |

## 创作说明

主图与动画素材使用 AI 生成。本项目为同人创作，与《寒蝉鸣泣之时》原作官方及 OpenAI 无隶属关系。
