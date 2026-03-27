# 部署指南 - 4399游戏世界

本指南将帮助您将游戏网站部署到GitHub Pages或自己的服务器上。

## 🚀 快速部署到GitHub Pages

### 步骤1: 配置GitHub Pages

1. 访问GitHub仓库：https://github.com/13888285815/games
2. 点击"Settings"（设置）
3. 在左侧菜单中找到"Pages"（页面）
4. 在"Source"部分，选择"Deploy from a branch"（从分支部署）
5. 在"Branch"部分，选择：
   - Branch: `main`
   - Folder: `/public`
6. 点击"Save"（保存）

### 步骤2: 等待部署完成

1. GitHub会自动开始部署
2. 等待几分钟，直到看到"Your site is live at..."（您的网站已上线...）
3. 访问您的网站：https://13888285815.github.io/games/

### 步骤3: 自定义域名（可选）

如果您有自己的域名：

1. 在GitHub Pages设置中添加自定义域名
2. 在您的域名注册商处配置DNS记录
3. 添加CNAME文件到`public/`目录

## 🖥️ 本地部署

### 方式1: 使用Python（最简单）

```bash
# 进入项目目录
cd game4399

# 启动Python HTTP服务器
python3 -m http.server 8000 --directory public

# 访问 http://localhost:8000
```

### 方式2: 使用Node.js

```bash
# 安装serve（如果还没有安装）
npm install -g serve

# 启动服务器
serve public

# 按照提示访问网址
```

### 方式3: 使用PHP

```bash
# 进入public目录
cd game4399/public

# 启动PHP内置服务器
php -S localhost:8000

# 访问 http://localhost:8000
```

## 🌐 部署到自己的服务器

### Nginx配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/game4399/public;
    
    location / {
        try_files $uri $uri/ /index.html;
        index index.html;
    }
    
    # 游戏文件缓存
    location ~* \.(html|css|js|png|jpg|jpeg|gif|ico)$ {
        expires 1d;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### Apache配置示例

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /path/to/game4399/public
    
    <Directory /path/to/game4399/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # 静态文件缓存
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType text/css "access plus 1 year"
        ExpiresByType application/javascript "access plus 1 year"
        ExpiresByType image/* "access plus 1 year"
    </IfModule>
</VirtualHost>
```

## 🔧 构建和优化

### 启用HTTPS

对于生产环境，强烈建议启用HTTPS：

```bash
# 使用Let's Encrypt获取免费SSL证书
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 性能优化

1. **启用压缩**：配置Gzip或Brotli压缩
2. **设置缓存头**：为静态文件设置合适的缓存策略
3. **CDN加速**：使用Cloudflare等CDN服务
4. **图片优化**：压缩游戏图片资源

### 安全配置

1. **内容安全策略（CSP）**：
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://kit.fontawesome.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' data: https:;">
```

2. **X-Frame-Options**：
```nginx
add_header X-Frame-Options "SAMEORIGIN";
```

3. **X-Content-Type-Options**：
```nginx
add_header X-Content-Type-Options "nosniff";
```

## 📱 PWA支持

游戏网站已经具备基本的PWA特性，可以添加到手机主屏幕：

### 创建manifest.json

在`public/`目录下创建`manifest.json`：

```json
{
  "name": "4399游戏世界",
  "short_name": "4399游戏",
  "description": "免费在线小游戏大全",
  "start_url": "/games/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ff6b6b",
  "icons": [
    {
      "src": "assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 添加Service Worker

创建`public/sw.js`：

```javascript
const CACHE_NAME = 'game4399-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/scripts/main.js',
  '/scripts/games.js',
  '/games/snake.html',
  '/games/tetris.html',
  '/games/memory-match.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## 📊 监控和分析

### 添加Google Analytics

在`public/index.html`的`<head>`中添加：

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 错误监控

使用Sentry或类似服务监控JavaScript错误：

```javascript
// 在main.js中添加
if (typeof Sentry !== 'undefined') {
  Sentry.init({
    dsn: 'YOUR_DSN_HERE',
    environment: 'production'
  });
}
```

## 🔄 持续集成/持续部署

### GitHub Actions配置

在`.github/workflows/deploy.yml`中创建：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## 🚨 故障排除

### 常见问题

1. **GitHub Pages不更新**
   - 检查GitHub Actions状态
   - 确保文件在`public/`目录下
   - 清除浏览器缓存

2. **游戏无法加载**
   - 检查控制台错误
   - 确保所有依赖文件存在
   - 检查跨域资源加载

3. **移动端显示问题**
   - 检查视口设置
   - 测试不同的屏幕尺寸
   - 确保触摸事件正常工作

### 日志和调试

在`main.js`中添加调试模式：

```javascript
// 开发模式启用详细日志
const DEBUG_MODE = window.location.hostname === 'localhost';

if (DEBUG_MODE) {
  console.log('游戏网站运行在调试模式');
  // 添加调试功能
}
```

## 📞 支持

如果您遇到问题：

1. 检查GitHub Issues：https://github.com/13888285815/games/issues
2. 查看README文档
3. 提交新的Issue描述您的问题

## 📄 许可证

本项目基于MIT许可证开源。详见[LICENSE](LICENSE)文件。

---

**祝您部署顺利！🎮**