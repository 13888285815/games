/**
 * 设备检测和优化模块
 * 支持Windows、iOS、Android、HarmonyOS和各种设备类型
 */

class DeviceManager {
    constructor() {
        this.userAgent = navigator.userAgent;
        this.platform = navigator.platform;
        this.language = navigator.language;
        this.init();
    }
    
    init() {
        this.detectOS();
        this.detectBrowser();
        this.detectDeviceType();
        this.setupOptimizations();
    }
    
    detectOS() {
        this.os = {
            isWindows: /Win/.test(this.platform),
            isMac: /Mac/.test(this.platform),
            isLinux: /Linux/.test(this.platform),
            isAndroid: /Android/.test(this.userAgent),
            isIOS: /iPhone|iPad|iPod/.test(this.userAgent),
            isHarmonyOS: /HarmonyOS/.test(this.userAgent)
        };
        
        // 识别具体的操作系统版本
        if (this.os.isAndroid) {
            this.os.version = this.getAndroidVersion();
        } else if (this.os.isIOS) {
            this.os.version = this.getIOSVersion();
        } else if (this.os.isWindows) {
            this.os.version = this.getWindowsVersion();
        }
    }
    
    detectBrowser() {
        this.browser = {
            isChrome: /Chrome/.test(this.userAgent) && !/Edge/.test(this.userAgent),
            isFirefox: /Firefox/.test(this.userAgent),
            isSafari: /Safari/.test(this.userAgent) && !/Chrome/.test(this.userAgent),
            isEdge: /Edg/.test(this.userAgent),
            isOpera: /Opera|OPR/.test(this.userAgent),
            isIE: /MSIE|Trident/.test(this.userAgent)
        };
        
        // 识别浏览器版本
        if (this.browser.isChrome) {
            this.browser.version = this.getChromeVersion();
        } else if (this.browser.isFirefox) {
            this.browser.version = this.getFirefoxVersion();
        } else if (this.browser.isSafari) {
            this.browser.version = this.getSafariVersion();
        }
    }
    
    detectDeviceType() {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        
        this.device = {
            isMobile: /Mobi|Android|iPhone|iPad|iPod/.test(this.userAgent),
            isTablet: /Tablet|iPad/.test(this.userAgent) || 
                     (screenWidth >= 768 && screenHeight >= 1024 && this.os.isIOS),
            isDesktop: !(/Mobi|Android|iPhone|iPad|iPod/.test(this.userAgent)),
            isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            screenSize: {
                width: screenWidth,
                height: screenHeight,
                ratio: window.devicePixelRatio || 1
            }
        };
        
        // 检测是否支持特定功能
        this.capabilities = {
            supportsLocalStorage: this.checkLocalStorage(),
            supportsSessionStorage: this.checkSessionStorage(),
            supportsCookies: this.checkCookies(),
            supportsWebGL: this.checkWebGL(),
            supportsCanvas: this.checkCanvas(),
            supportsTouch: this.device.isTouchDevice,
            supportsVibration: 'vibrate' in navigator,
            supportsGeolocation: 'geolocation' in navigator,
            supportsNotifications: 'Notification' in window,
            supportsServiceWorker: 'serviceWorker' in navigator,
            supportsPWA: this.checkPWASupport()
        };
    }
    
    setupOptimizations() {
        // 根据设备类型设置优化
        this.applyDeviceOptimizations();
        
        // 设置视口缩放限制
        this.setupViewportScaling();
        
        // 检测并应用性能优化
        this.applyPerformanceOptimizations();
        
        // 设置跨平台兼容性
        this.setupCrossPlatformCompatibility();
    }
    
    applyDeviceOptimizations() {
        // 移动设备优化
        if (this.device.isMobile) {
            this.optimizeForMobile();
        }
        
        // 平板设备优化
        if (this.device.isTablet) {
            this.optimizeForTablet();
        }
        
        // 触摸设备优化
        if (this.device.isTouchDevice) {
            this.optimizeForTouch();
        }
        
        // iOS设备特定优化
        if (this.os.isIOS) {
            this.optimizeForIOS();
        }
        
        // Android设备特定优化
        if (this.os.isAndroid) {
            this.optimizeForAndroid();
        }
        
        // HarmonyOS设备优化
        if (this.os.isHarmonyOS) {
            this.optimizeForHarmonyOS();
        }
    }
    
    optimizeForMobile() {
        // 禁用双击缩放
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
        
        // 优化滚动性能
        document.documentElement.style.webkitOverflowScrolling = 'touch';
        
        // 防止触摸时高亮显示
        document.documentElement.style.webkitTapHighlightColor = 'transparent';
    }
    
    optimizeForIOS() {
        // iOS Safari特定优化
        document.documentElement.style.webkitUserSelect = 'none';
        document.documentElement.style.webkitTouchCallout = 'none';
        
        // 防止iOS橡皮筋效果
        document.body.style.overscrollBehavior = 'contain';
        
        // 修复iOS输入框缩放问题
        document.querySelectorAll('input, textarea, select').forEach(el => {
            el.style.fontSize = '16px'; // 防止iOS自动缩放
        });
    }
    
    optimizeForAndroid() {
        // Android Chrome特定优化
        document.documentElement.style.touchAction = 'manipulation';
        
        // 防止Android长按菜单
        document.addEventListener('contextmenu', e => e.preventDefault());
    }
    
    optimizeForHarmonyOS() {
        // HarmonyOS特定优化
        document.documentElement.style.webkitOverflowScrolling = 'touch';
        
        // 优化性能
        document.body.style.willChange = 'transform';
    }
    
    optimizeForTablet() {
        // 平板设备优化
        document.documentElement.style.touchAction = 'pan-y pinch-zoom';
    }
    
    optimizeForTouch() {
        // 触摸设备通用优化
        document.documentElement.style.cursor = 'pointer';
        
        // 增加触摸目标尺寸
        document.querySelectorAll('button, a, input[type="button"], input[type="submit"]').forEach(el => {
            el.style.minHeight = '44px';
            el.style.minWidth = '44px';
        });
    }
    
    setupViewportScaling() {
        // 动态调整视口缩放
        const metaViewport = document.querySelector('meta[name="viewport"]');
        if (metaViewport) {
            let content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
            
            // 针对不同设备调整
            if (this.device.isMobile) {
                content = 'width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes';
            } else if (this.device.isTablet) {
                content = 'width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes';
            }
            
            metaViewport.setAttribute('content', content);
        }
    }
    
    applyPerformanceOptimizations() {
        // 根据设备性能调整
        const memory = performance.memory;
        const isLowEndDevice = memory && memory.jsHeapSizeLimit < 268435456; // 256MB
        
        if (isLowEndDevice || this.device.isMobile) {
            // 低端设备优化
            document.documentElement.classList.add('low-end-device');
            
            // 减少动画
            document.body.style.animation = 'none';
            
            // 延迟加载非关键资源
            this.lazyLoadResources();
        }
    }
    
    setupCrossPlatformCompatibility() {
        // 浏览器前缀兼容性
        this.applyVendorPrefixes();
        
        // 功能检测和降级处理
        this.applyFeatureFallbacks();
    }
    
    applyVendorPrefixes() {
        // 自动添加CSS前缀
        const style = document.createElement('style');
        style.textContent = `
            .game-card {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
            }
            .btn-play {
                -webkit-tap-highlight-color: transparent;
                tap-highlight-color: transparent;
            }
        `;
        document.head.appendChild(style);
    }
    
    applyFeatureFallbacks() {
        // WebGL降级到Canvas
        if (!this.capabilities.supportsWebGL) {
            console.log('WebGL not supported, falling back to Canvas 2D');
        }
        
        // LocalStorage降级到Cookie
        if (!this.capabilities.supportsLocalStorage) {
            console.log('LocalStorage not supported, using cookies');
        }
    }
    
    lazyLoadResources() {
        // 延迟加载图片
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // 工具方法
    getAndroidVersion() {
        const match = this.userAgent.match(/Android (\d+(?:\.\d+)*)/);
        return match ? match[1] : null;
    }
    
    getIOSVersion() {
        const match = this.userAgent.match(/OS (\d+_?\d+_?\d*)/);
        return match ? match[1].replace(/_/g, '.') : null;
    }
    
    getWindowsVersion() {
        const match = this.userAgent.match(/Windows NT (\d+\.\d+)/);
        return match ? match[1] : null;
    }
    
    getChromeVersion() {
        const match = this.userAgent.match(/Chrome\/(\d+(?:\.\d+)*)/);
        return match ? match[1] : null;
    }
    
    getFirefoxVersion() {
        const match = this.userAgent.match(/Firefox\/(\d+(?:\.\d+)*)/);
        return match ? match[1] : null;
    }
    
    getSafariVersion() {
        const match = this.userAgent.match(/Version\/(\d+(?:\.\d+)*) Safari/);
        return match ? match[1] : null;
    }
    
    checkLocalStorage() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (e) {
            return false;
        }
    }
    
    checkSessionStorage() {
        try {
            sessionStorage.setItem('test', 'test');
            sessionStorage.removeItem('test');
            return true;
        } catch (e) {
            return false;
        }
    }
    
    checkCookies() {
        return navigator.cookieEnabled;
    }
    
    checkWebGL() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && 
                     (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }
    
    checkCanvas() {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext && canvas.getContext('2d'));
    }
    
    checkPWASupport() {
        return ('serviceWorker' in navigator && 'PushManager' in window);
    }
    
    getDeviceInfo() {
        return {
            os: this.os,
            browser: this.browser,
            device: this.device,
            capabilities: this.capabilities,
            language: this.language,
            userAgent: this.userAgent
        };
    }
    
    logDeviceInfo() {
        console.log('Device Information:', this.getDeviceInfo());
    }
    
    isSupported() {
        // 检查最低要求
        const minRequirements = {
            screenWidth: 320,
            screenHeight: 480,
            browserVersion: {
                chrome: 50,
                firefox: 45,
                safari: 10,
                edge: 15
            }
        };
        
        // 检查屏幕尺寸
        if (this.device.screenSize.width < minRequirements.screenWidth || 
            this.device.screenSize.height < minRequirements.screenHeight) {
            return false;
        }
        
        // 检查浏览器版本
        if (this.browser.isChrome && parseInt(this.browser.version) < minRequirements.browserVersion.chrome) {
            return false;
        }
        
        if (this.browser.isFirefox && parseInt(this.browser.version) < minRequirements.browserVersion.firefox) {
            return false;
        }
        
        if (this.browser.isSafari && parseInt(this.browser.version) < minRequirements.browserVersion.safari) {
            return false;
        }
        
        if (this.browser.isEdge && parseInt(this.browser.version) < minRequirements.browserVersion.edge) {
            return false;
        }
        
        return true;
    }
}

// 创建全局设备管理器实例
window.DeviceManager = new DeviceManager();