/**
 * 游戏网站Service Worker
 * 支持离线访问和资源缓存
 */

const CACHE_NAME = 'game4399-v1.0.0';
const OFFLINE_URL = '/offline.html';

// 需要缓存的核心资源
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/scripts/main.js',
  '/scripts/games.js',
  '/scripts/languages.js',
  '/scripts/device.js',
  '/manifest.json',
  '/assets/favicon.ico'
];

// 需要缓存的游戏资源
const GAME_ASSETS = [
  '/games/snake.html',
  '/games/tetris.html',
  '/games/memory-match.html'
];

// 第三方资源
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+Arabic:wght@400;500;700&display=swap'
];

// 安装阶段 - 缓存核心资源
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching core assets');
        return cache.addAll([...CORE_ASSETS, ...GAME_ASSETS]);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Installation failed:', error);
      })
  );
});

// 激活阶段 - 清理旧缓存
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activation complete');
      return self.clients.claim();
    })
  );
});

// 请求拦截 - 网络优先，缓存后备
self.addEventListener('fetch', event => {
  // 跳过非GET请求和扩展请求
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension://') ||
      event.request.url.includes('browser-sync')) {
    return;
  }
  
  const requestUrl = new URL(event.request.url);
  
  // 处理API请求（网络优先）
  if (requestUrl.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => response)
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // 处理游戏页面（缓存优先）
  if (requestUrl.pathname.startsWith('/games/')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // 更新缓存（后台）
            fetch(event.request)
              .then(response => {
                if (response.ok) {
                  caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, response));
                }
              })
              .catch(() => {}); // 忽略错误
            return cachedResponse;
          }
          
          // 缓存中没有，从网络获取
          return fetch(event.request)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              
              // 缓存响应
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
              
              return response;
            })
            .catch(() => {
              // 网络失败，返回离线页面
              return caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }
  
  // 处理HTML页面（网络优先）
  if (requestUrl.pathname.endsWith('.html') || 
      requestUrl.pathname === '/') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // 缓存响应
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
          
          return response;
        })
        .catch(() => {
          // 网络失败，从缓存获取
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              
              // 缓存中没有，返回离线页面
              return caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }
  
  // 处理静态资源（缓存优先）
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // 更新缓存（后台）
          fetch(event.request)
            .then(response => {
              if (response.ok) {
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(event.request, response));
              }
            })
            .catch(() => {}); // 忽略错误
          return cachedResponse;
        }
        
        // 缓存中没有，从网络获取
        return fetch(event.request)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            // 缓存响应
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));
            
            return response;
          })
          .catch(error => {
            console.error('[Service Worker] Fetch failed:', error);
            // 对于图片等资源，可以返回默认图片
            if (event.request.destination === 'image') {
              return caches.match('/assets/default-image.png');
            }
            
            // 其他资源返回404
            return new Response('Resource not found', {
              status: 404,
              statusText: 'Not Found'
            });
          });
      })
  );
});

// 后台同步
self.addEventListener('sync', event => {
  if (event.tag === 'sync-game-data') {
    console.log('[Service Worker] Background sync started');
    event.waitUntil(syncGameData());
  }
});

// 推送通知
self.addEventListener('push', event => {
  console.log('[Service Worker] Push notification received');
  
  const data = event.data ? event.data.json() : {};
  const title = data.title || '4399游戏世界';
  const options = {
    body: data.body || '新的游戏和更新等你来体验！',
    icon: '/assets/icon-192x192.png',
    badge: '/assets/badge-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'game-notification',
    renotify: true,
    actions: [
      {
        action: 'open-game',
        title: '开始游戏'
      },
      {
        action: 'view-rankings',
        title: '查看排行'
      }
    ],
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// 通知点击处理
self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification clicked');
  
  event.notification.close();
  
  const urlToOpen = event.notification.data.url || '/';
  
  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(windowClients => {
      // 检查是否已经有打开的窗口
      for (let client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      
      // 没有打开的窗口，打开新的窗口
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

// 工具函数
async function syncGameData() {
  try {
    // 在这里执行后台同步逻辑
    console.log('[Service Worker] Syncing game data...');
    
    // 示例：获取最新的游戏数据
    const response = await fetch('/api/games/latest');
    if (response.ok) {
      const data = await response.json();
      console.log('[Service Worker] Game data synced:', data);
      return true;
    }
  } catch (error) {
    console.error('[Service Worker] Sync failed:', error);
    return false;
  }
}

// 错误处理
self.addEventListener('error', event => {
  console.error('[Service Worker] Error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('[Service Worker] Unhandled rejection:', event.reason);
});