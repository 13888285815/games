/**
 * 意念科技游戏世界 - 欢迎界面和用户引导系统
 * 为互联网访客提供友好的首次访问体验
 */

class WelcomeGuide {
    constructor() {
        this.isFirstVisit = this.checkFirstVisit();
        this.hasCompletedGuide = this.checkGuideCompletion();
        this.currentStep = 0;
        this.totalSteps = 5;
        
        // 引导步骤配置
        this.steps = [
            {
                title: '🎉 欢迎来到意念科技游戏世界！',
                content: '这是一个集成了7k7k、2144、3366等平台热门游戏的现代化在线游戏平台。',
                position: 'center',
                highlight: '.logo'
            },
            {
                title: '🎮 发现精彩游戏',
                content: '浏览我们的游戏库，包含经典游戏和新上线的热门游戏。',
                position: 'bottom',
                highlight: '#hotGames'
            },
            {
                title: '💰 订阅解锁更多功能',
                content: '升级到高级订阅计划，解锁AI功能、无限制游戏和更多特权。',
                position: 'right',
                highlight: '.nav-menu li:nth-child(2)'
            },
            {
                title: '🤖 体验AI智能功能',
                content: '使用AI Tokens体验智能游戏推荐、策略分析和内容生成。',
                position: 'left',
                highlight: '.nav-menu li:nth-child(3)'
            },
            {
                title: '🌐 多语言和跨平台',
                content: '支持6种语言，完美适配所有设备。点击语言选择器切换语言。',
                position: 'top',
                highlight: '.language-selector'
            }
        ];
        
        // 初始化
        if (this.isFirstVisit && !this.hasCompletedGuide) {
            setTimeout(() => this.init(), 1000);
        }
    }
    
    checkFirstVisit() {
        return !localStorage.getItem('welcome_visited');
    }
    
    checkGuideCompletion() {
        return localStorage.getItem('guide_completed') === 'true';
    }
    
    init() {
        // 创建引导容器
        this.createGuideContainer();
        
        // 显示欢迎模态框
        this.showWelcomeModal();
        
        // 标记已访问
        localStorage.setItem('welcome_visited', 'true');
    }
    
    createGuideContainer() {
        const container = document.createElement('div');
        container.id = 'welcome-guide-container';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            font-family: 'Microsoft YaHei', Arial, sans-serif;
        `;
        
        document.body.appendChild(container);
        this.container = container;
    }
    
    showWelcomeModal() {
        this.container.innerHTML = '';
        this.container.style.display = 'flex';
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
            color: white;
            padding: 40px;
            border-radius: 20px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: slideIn 0.5s ease-out;
        `;
        
        modal.innerHTML = `
            <style>
                @keyframes slideIn {
                    from { transform: translateY(-50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            </style>
            
            <div style="margin-bottom: 30px;">
                <h1 style="font-size: 36px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 15px;">
                    <span>🎮</span> 意念科技游戏世界
                </h1>
                <p style="font-size: 18px; opacity: 0.9;">新一代在线游戏平台</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); border-radius: 15px; padding: 25px; margin-bottom: 30px;">
                <h2 style="font-size: 24px; margin-bottom: 15px;">✨ 平台特色功能</h2>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; text-align: left;">
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 20px; margin-bottom: 5px;">🎯</div>
                        <div style="font-weight: bold;">多平台游戏</div>
                        <div style="font-size: 14px; opacity: 0.9;">整合7k7k/2144/3366热门游戏</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 20px; margin-bottom: 5px;">🤖</div>
                        <div style="font-weight: bold;">AI智能功能</div>
                        <div style="font-size: 14px; opacity: 0.9;">游戏推荐、策略分析</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 20px; margin-bottom: 5px;">💰</div>
                        <div style="font-weight: bold;">订阅系统</div>
                        <div style="font-size: 14px; opacity: 0.9;">类似Crunchbase的验证机制</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 20px; margin-bottom: 5px;">🌐</div>
                        <div style="font-weight: bold;">多语言支持</div>
                        <div style="font-size: 14px; opacity: 0.9;">6种语言，全球访问</div>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                    欢迎体验我们的全新游戏平台！我们为您提供最优质的游戏体验和最先进的AI功能。
                </p>
                
                <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px;">
                    <button id="skipGuideBtn" style="
                        padding: 12px 30px;
                        background: rgba(255,255,255,0.2);
                        color: white;
                        border: 2px solid white;
                        border-radius: 25px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">跳过引导</button>
                    
                    <button id="startGuideBtn" style="
                        padding: 12px 30px;
                        background: white;
                        color: #FF6B6B;
                        border: 2px solid white;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                        animation: pulse 2s infinite;
                        transition: all 0.3s;
                    ">开始快速导览 (推荐)</button>
                </div>
                
                <div style="font-size: 14px; opacity: 0.8; margin-top: 20px;">
                    <label style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <input type="checkbox" id="dontShowAgain">
                        不再显示此欢迎界面
                    </label>
                </div>
            </div>
            
            <div style="border-top: 1px solid rgba(255,255,255,0.3); padding-top: 20px;">
                <p style="font-size: 14px; opacity: 0.8;">
                    技术支持: zzx@yndxw.com | 电话: 13888285815<br>
                    © 2026 意念科技游戏世界
                </p>
            </div>
        `;
        
        this.container.appendChild(modal);
        
        // 事件监听
        document.getElementById('skipGuideBtn').addEventListener('click', () => {
            this.skipGuide();
        });
        
        document.getElementById('startGuideBtn').addEventListener('click', () => {
            this.startGuide();
        });
        
        document.getElementById('dontShowAgain').addEventListener('change', (e) => {
            if (e.target.checked) {
                localStorage.setItem('dont_show_welcome', 'true');
            } else {
                localStorage.removeItem('dont_show_welcome');
            }
        });
    }
    
    skipGuide() {
        this.container.style.display = 'none';
        localStorage.setItem('guide_completed', 'true');
        
        // 显示跳过提示
        this.showNotification('您可以随时点击右上角的"帮助"按钮查看功能导览。');
    }
    
    startGuide() {
        this.container.style.display = 'none';
        this.currentStep = 0;
        this.showStep();
    }
    
    showStep() {
        if (this.currentStep >= this.totalSteps) {
            this.completeGuide();
            return;
        }
        
        const step = this.steps[this.currentStep];
        
        // 创建步骤引导
        this.createStepGuide(step);
    }
    
    createStepGuide(step) {
        // 移除之前的引导
        const existingGuide = document.querySelector('.step-guide');
        if (existingGuide) existingGuide.remove();
        
        const existingOverlay = document.querySelector('.guide-overlay');
        if (existingOverlay) existingOverlay.remove();
        
        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.className = 'guide-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9998;
        `;
        
        // 高亮目标元素
        const target = document.querySelector(step.highlight);
        if (target) {
            const rect = target.getBoundingClientRect();
            
            // 创建高亮点
            const highlight = document.createElement('div');
            highlight.style.cssText = `
                position: fixed;
                top: ${rect.top}px;
                left: ${rect.left}px;
                width: ${rect.width}px;
                height: ${rect.height}px;
                border: 3px solid #4ECDC4;
                border-radius: 10px;
                box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7);
                z-index: 9997;
                pointer-events: none;
                animation: pulseBorder 2s infinite;
            `;
            
            document.body.appendChild(highlight);
            
            // 添加脉冲动画
            const style = document.createElement('style');
            style.textContent = `
                @keyframes pulseBorder {
                    0%, 100% { border-color: #4ECDC4; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7), 0 0 20px #4ECDC4; }
                    50% { border-color: #FF6B6B; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7), 0 0 40px #FF6B6B; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // 创建引导卡片
        const guide = document.createElement('div');
        guide.className = 'step-guide';
        
        let positionStyle = '';
        switch (step.position) {
            case 'top':
                positionStyle = 'bottom: 20px; left: 50%; transform: translateX(-50%);';
                break;
            case 'bottom':
                positionStyle = 'top: 20px; left: 50%; transform: translateX(-50%);';
                break;
            case 'left':
                positionStyle = 'right: 20px; top: 50%; transform: translateY(-50%);';
                break;
            case 'right':
                positionStyle = 'left: 20px; top: 50%; transform: translateY(-50%);';
                break;
            default:
                positionStyle = 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
        }
        
        guide.style.cssText = `
            position: fixed;
            ${positionStyle}
            background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
            color: white;
            padding: 25px;
            border-radius: 15px;
            max-width: 400px;
            width: 90%;
            z-index: 10000;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            animation: fadeIn 0.3s ease-out;
        `;
        
        guide.innerHTML = `
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
            </style>
            
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 20px; margin-bottom: 10px; display: flex; align-items: center; gap: 10px;">
                    <span>${this.currentStep + 1}.</span> ${step.title}
                </h3>
                <p style="font-size: 16px; line-height: 1.5;">${step.content}</p>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 14px; opacity: 0.9;">
                    步骤 ${this.currentStep + 1} / ${this.totalSteps}
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <button class="guide-btn prev-btn" style="
                        padding: 8px 20px;
                        background: rgba(255,255,255,0.2);
                        color: white;
                        border: 2px solid white;
                        border-radius: 20px;
                        cursor: pointer;
                        ${this.currentStep === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}
                    " ${this.currentStep === 0 ? 'disabled' : ''}>上一步</button>
                    
                    <button class="guide-btn next-btn" style="
                        padding: 8px 20px;
                        background: white;
                        color: #FF6B6B;
                        border: 2px solid white;
                        border-radius: 20px;
                        font-weight: bold;
                        cursor: pointer;
                    ">${this.currentStep === this.totalSteps - 1 ? '完成' : '下一步'}</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        document.body.appendChild(guide);
        
        // 事件监听
        guide.querySelector('.prev-btn').addEventListener('click', () => {
            this.currentStep--;
            this.showStep();
        });
        
        guide.querySelector('.next-btn').addEventListener('click', () => {
            this.currentStep++;
            this.showStep();
        });
        
        // 点击遮罩层跳过
        overlay.addEventListener('click', () => {
            this.skipGuide();
        });
    }
    
    completeGuide() {
        // 清理引导元素
        const elements = [
            '.step-guide',
            '.guide-overlay',
            '[style*="border: 3px solid"]'
        ];
        
        elements.forEach(selector => {
            const el = document.querySelector(selector);
            if (el) el.remove();
        });
        
        // 标记完成
        localStorage.setItem('guide_completed', 'true');
        
        // 显示完成提示
        this.showNotification('🎉 导览完成！现在开始探索意念科技游戏世界吧！');
        
        // 记录分析事件
        if (window.VisitorAnalytics) {
            window.VisitorAnalytics.trackEvent('guide_completed', {
                steps_completed: this.totalSteps,
                duration: Date.now() - this.startTime
            });
        }
    }
    
    showNotification(message, duration = 5000) {
        // 移除现有的通知
        const existing = document.querySelector('.guide-notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = 'guide-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10001;
            animation: slideInRight 0.3s ease-out;
            max-width: 400px;
        `;
        
        notification.innerHTML = `
            <style>
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            </style>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 20px;">💡</span>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // 自动隐藏
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);
    }
    
    // 公开方法
    showHelp() {
        this.showWelcomeModal();
    }
    
    resetGuide() {
        localStorage.removeItem('guide_completed');
        localStorage.removeItem('welcome_visited');
        this.showWelcomeModal();
    }
}

// 创建全局实例
window.WelcomeGuide = new WelcomeGuide();

// 工具函数
function showWelcomeGuide() {
    if (window.WelcomeGuide) {
        window.WelcomeGuide.showWelcomeModal();
    }
}

function resetWelcomeGuide() {
    if (window.WelcomeGuide) {
        window.WelcomeGuide.resetGuide();
    }
}

// 导出
export {
    WelcomeGuide,
    showWelcomeGuide,
    resetWelcomeGuide
};