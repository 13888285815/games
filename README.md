# 意念科技游戏世界 - 新一代在线游戏平台

这是一个集成了7k7k、2144、3366等平台热门游戏的现代化在线游戏平台，提供丰富的AI功能和订阅服务。

## 🎮 功能特性

### 1. 核心游戏功能
- **多平台游戏整合**：整合7k7k、2144、3366等平台热门游戏
- **增强游戏分类**：动作、益智、射击、赛车、休闲、体育、棋牌、策略等8个分类
- **智能游戏推荐**：基于AI算法的个性化游戏推荐
- **高级搜索系统**：支持游戏名称、描述、标签和平台的多维度搜索
- **智能排行榜**：基于玩家行为和评分的动态排行榜
- **轮播图展示**：智能展示热门、新上线和个性化推荐游戏
- **全平台响应式设计**：完美适配Windows、iOS、Android、HarmonyOS等所有设备

### 2. 新增游戏功能
- **黄金矿工**：经典挖矿游戏，支持道具购买和关卡挑战
- **森林冰火人**：双人合作解谜游戏，支持单人/双人模式
- **愤怒的小鸟**：物理益智游戏，包含多种关卡和挑战
- **超级马里奥**：经典平台跳跃游戏，支持多种角色和关卡
- **泡泡龙**：经典泡泡消除游戏，支持多种游戏模式
- **AI增强游戏体验**：基于AI的游戏难度调整和策略建议
- **跨平台游戏进度同步**：支持多设备游戏进度同步
- **高级用户偏好设置**：音效、图形、语言、主题等全方位个性化设置

### 4. AI功能系统
- **AI API Tokens计费系统**：完整的AI功能计费和权限管理系统
- **9种AI核心功能**：文本补全、图像生成、游戏分析、玩家推荐、策略生成等
- **智能游戏助手**：实时游戏指导、问题解答、技巧提示
- **预测分析系统**：游戏趋势预测、玩家行为分析、收入预测
- **内容审核系统**：AI自动审核聊天内容和用户行为

### 5. 订阅和验证系统
- **4种订阅计划**：免费、基础、专业、企业计划
- **5级验证机制**：邮箱、手机、身份、高级验证
- **AI Tokens购买**：多种套餐选择，批量购买优惠
- **权限管理系统**：基于订阅和验证级别的功能访问控制
- **使用统计报告**：详细的Token使用和功能调用统计

### 6. 部署和扩展
- **双平台部署**：GitHub Pages + Vercel双线部署
- **CI/CD自动化**：GitHub Actions自动化测试和部署
- **性能监控**：Lighthouse性能审计和优化
- **安全防护**：HTTPS强制、CSP、CORS等安全措施
- **扩展API**：支持第三方集成和API访问

## 📁 项目结构

```
game4399/
├── public/                          # 网站根目录
│   ├── index.html                   # 主页面
│   ├── subscription.html            # 订阅管理页面
│   ├── ai-demo.html                 # AI功能演示页面
│   ├── styles/
│   │   └── style.css               # 主样式文件
│   ├── scripts/
│   │   ├── main.js                 # 主JavaScript文件
│   │   ├── games.js                # 游戏数据和管理功能
│   │   ├── games-enhanced.js       # 增强版游戏数据系统
│   │   ├── new-games-data.js       # 新平台游戏数据
│   │   ├── subscription-system.js  # 订阅和验证系统
│   │   ├── ai-api-billing.js       # AI API Tokens计费系统
│   │   ├── languages.js            # 多语言支持系统
│   │   ├── device.js               # 设备检测系统
│   │   └── social.js               # 社交分享系统
│   ├── games/                      # 游戏目录
│   │   ├── snake.html              # 贪吃蛇游戏
│   │   ├── tetris.html             # 俄罗斯方块游戏
│   │   ├── gold-miner.html         # 黄金矿工游戏
│   │   ├── fireboy-watergirl.html  # 森林冰火人游戏
│   │   └── ...更多游戏文件
│   ├── service-worker.js           # Service Worker文件
│   ├── manifest.json               # PWA清单文件
│   ├── offline.html                # 离线页面
│   └── .gitignore                  # Git忽略文件
├── .github/workflows/              # GitHub Actions工作流
│   └── deploy.yml                  # 自动部署配置
├── vercel.json                     # Vercel部署配置
├── README.md                       # 项目说明文档
└── package.json                    # 项目配置文件
```

## 🎯 游戏列表（已实现）

### 核心游戏
1. **贪吃蛇 (Snake)**
   - 类型：休闲游戏
   - 描述：经典贪吃蛇游戏，控制蛇吃掉食物变得越来越长
   - 功能：键盘控制、触摸控制、分数系统、最高分记录

2. **俄罗斯方块 (Tetris)**
   - 类型：益智游戏
   - 描述：经典俄罗斯方块游戏，旋转移动方块填满整行消除
   - 功能：7种方块、等级系统、分数计算、下一个方块预览

3. **记忆匹配游戏 (Memory Match)**
   - 类型：益智游戏
   - 描述：翻开卡片找到相同的图案，测试记忆力和观察力
   - 功能：多种难度、计时系统、尝试次数统计

### 7k7k平台游戏（已实现）
4. **黄金矿工 (Gold Miner)**
   - 类型：休闲策略
   - 描述：控制矿工抓住黄金和宝石，在规定时间内赚取足够金钱
   - 功能：关卡系统、道具商店、时间挑战、高分记录

5. **森林冰火人 (Fireboy & Watergirl)**
   - 类型：合作解谜
   - 描述：控制冰火人兄弟穿越森林迷宫，合作解开关卡谜题
   - 功能：双人模式、元素互动、合作解谜、关卡挑战

### 更多游戏（数据已准备）
6. **愤怒的小鸟 (Angry Birds)** - 物理益智
7. **超级马里奥 (Super Mario)** - 平台动作
8. **吃豆人 (Pacman)** - 街机经典
9. **泡泡龙 (Puzzle Bobble)** - 益智消除
10. **超级炸弹人 (Super Bomberman)** - 迷宫对战
11. **扫雷 (Minesweeper)** - 逻辑推理
12. **数独 (Sudoku)** - 数字逻辑
13. **街头霸王 (Street Fighter)** - 格斗对战
14. **太空侵略者 (Space Invaders)** - 射击经典
15. **双截龙 (Double Dragon)** - 横版过关

## 🚀 快速开始

### 方式一：直接打开（推荐）
1. 克隆或下载项目到本地
2. 使用浏览器直接打开 `public/index.html` 文件
3. 开始游玩游戏！

### 方式二：本地服务器
1. 安装Python 3
2. 在项目根目录运行：
   ```bash
   python -m http.server 8000
   ```
3. 访问 http://localhost:8000/public/

### 方式三：Node.js服务器
1. 安装Node.js
2. 运行：
   ```bash
   npx serve public
   ```
3. 按照提示访问网址

## 🎨 设计特点

### UI设计
- 现代简约的设计风格
- 渐变色彩和圆角设计
- 友好的图标和动画效果
- 清晰的视觉层次结构

### 响应式布局
- 桌面端：完整功能界面
- 平板端：优化的游戏体验
- 手机端：触摸友好的控制界面

### 游戏体验
- 流畅的动画效果
- 直观的游戏控制
- 即时反馈的游戏状态
- 保存和加载游戏进度

## 🔧 技术细节

### 核心技术
- **HTML5**: 语义化标签，Canvas游戏
- **CSS3**: Flexbox, Grid, 动画, 渐变
- **JavaScript**: ES6+, 模块化, 游戏逻辑

### 游戏引擎
- 纯Canvas渲染
- 游戏循环和状态管理
- 碰撞检测算法
- 分数计算系统

### 数据管理
- 游戏数据对象化存储
- 本地存储API
- 用户偏好设置
- 游戏进度保存

## 📱 移动端支持

### 触摸控制
- 贪吃蛇：滑动控制方向
- 俄罗斯方块：按钮控制移动和旋转
- 双击快速操作

### 界面适配
- 移动端优化的按钮大小
- 触摸友好的界面元素
- 横屏和竖屏适配

## 🔄 开发和扩展

### 添加新游戏
1. 在 `games/` 目录创建HTML游戏文件
2. 在 `public/scripts/games.js` 中添加游戏数据
3. 在主页面的游戏网格中显示新游戏

### 自定义样式
1. 修改 `public/styles/style.css` 文件
2. 调整配色方案和布局
3. 添加自定义动画效果

### 扩展功能
1. 添加用户登录系统
2. 实现游戏评论和评分
3. 添加多人游戏功能
4. 集成更多HTML5游戏引擎

## 🤝 贡献指南

欢迎贡献代码和游戏！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingGame`)
3. 提交更改 (`git commit -m 'Add some AmazingGame'`)
4. 推送分支 (`git push origin feature/AmazingGame`)
5. 开启 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源。详见 [LICENSE](LICENSE) 文件。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 品牌名称：意念科技游戏世界
- 技术支持邮箱：zzx@yndxw.com
- 联系电话：13888285815
- GitHub仓库：https://github.com/13888285815/games
- 在线演示：
  - GitHub Pages: https://13888285815.github.io/games/
  - Vercel部署: https://ideatech-game-world.vercel.app/
  - AI演示页面: https://13888285815.github.io/games/ai-demo.html
  - 订阅管理: https://13888285815.github.io/games/subscription.html

## 🙏 致谢

感谢所有贡献者和测试者！

- 游戏灵感来自4399.com、7k7k、2144、3366等平台
- AI功能系统参考了现代SaaS平台的订阅计费模式
- 游戏图标使用FontAwesome
- 颜色方案来自ColorHunt
- 感谢用户zzx提供的需求和建议

---

**🚀 开始体验吧！**

### 立即访问：
- 🌐 主网站：https://13888285815.github.io/games/
- 🤖 AI演示：https://13888285815.github.io/games/ai-demo.html
- 💰 订阅管理：https://13888285815.github.io/games/subscription.html
- ⚡ Vercel部署：https://ideatech-game-world.vercel.app/

### 本地运行：
直接打开 `public/index.html` 开始游戏！

### 探索新功能：
1. 体验AI驱动的游戏推荐和分析
2. 试用订阅系统和AI Tokens计费
3. 探索跨平台游戏体验
4. 测试多语言和跨设备支持