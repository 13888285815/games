/**
 * 订阅和验证系统
 * 类似Crunchbase的订阅机制
 */

// 订阅计划配置
const SubscriptionPlans = {
    FREE: {
        id: 'free',
        name: '免费计划',
        price: 0,
        currency: '¥',
        period: 'monthly',
        features: [
            '基础游戏访问',
            '每日3次游戏机会',
            '基础游戏功能',
            '社区排行榜查看',
            '邮件支持'
        ],
        limits: {
            maxGamesPerDay: 3,
            maxStorage: 10,
            apiCalls: 10,
            aiTokens: 100,
            prioritySupport: false
        }
    },
    
    BASIC: {
        id: 'basic',
        name: '基础计划',
        price: 29,
        currency: '¥',
        period: 'monthly',
        features: [
            '无限制游戏访问',
            '高级游戏功能',
            '无广告体验',
            '每日游戏统计',
            '优先客服支持',
            '1000 AI Tokens/月'
        ],
        limits: {
            maxGamesPerDay: 'unlimited',
            maxStorage: 100,
            apiCalls: 100,
            aiTokens: 1000,
            prioritySupport: true
        }
    },
    
    PRO: {
        id: 'pro',
        name: '专业计划',
        price: 99,
        currency: '¥',
        period: 'monthly',
        features: [
            '所有高级游戏',
            '专属游戏内道具',
            '高级数据分析',
            '自定义游戏体验',
            '24/7专属支持',
            '5000 AI Tokens/月',
            'API访问权限'
        ],
        limits: {
            maxGamesPerDay: 'unlimited',
            maxStorage: 500,
            apiCalls: 500,
            aiTokens: 5000,
            prioritySupport: true,
            apiAccess: true
        }
    },
    
    ENTERPRISE: {
        id: 'enterprise',
        name: '企业计划',
        price: 299,
        currency: '¥',
        period: 'monthly',
        features: [
            '所有Pro计划功能',
            '无限制AI Tokens',
            '定制游戏开发',
            '数据分析API',
            '团队管理工具',
            '专属客户经理',
            'SLA服务协议'
        ],
        limits: {
            maxGamesPerDay: 'unlimited',
            maxStorage: 'unlimited',
            apiCalls: 'unlimited',
            aiTokens: 'unlimited',
            prioritySupport: true,
            apiAccess: true,
            customFeatures: true
        }
    }
};

// 验证级别
const VerificationLevels = {
    UNVERIFIED: {
        level: 0,
        name: '未验证',
        description: '基础访问权限',
        benefits: ['基础游戏功能']
    },
    
    EMAIL_VERIFIED: {
        level: 1,
        name: '邮箱验证',
        description: '已验证邮箱用户',
        benefits: ['游戏进度保存', '基础社区功能']
    },
    
    PHONE_VERIFIED: {
        level: 2,
        name: '手机验证',
        description: '已验证手机用户',
        benefits: ['账户安全增强', '找回密码功能', '短信通知']
    },
    
    ID_VERIFIED: {
        level: 3,
        name: '身份验证',
        description: '身份验证用户',
        benefits: ['高级功能访问', '支付验证', '企业功能']
    },
    
    PREMIUM_VERIFIED: {
        level: 4,
        name: '高级验证',
        description: '高级验证用户',
        benefits: ['所有高级功能', '优先服务', '专属支持']
    }
};

// AI API Tokens计费配置
const AITokenPricing = {
    standard: {
        name: '标准包',
        tokens: 1000,
        price: 10,
        currency: '¥',
        unitPrice: 0.01 // 每个token价格
    },
    
    business: {
        name: '商务包',
        tokens: 5000,
        price: 45,
        currency: '¥',
        unitPrice: 0.009,
        discount: '10%'
    },
    
    professional: {
        name: '专业包',
        tokens: 10000,
        price: 80,
        currency: '¥',
        unitPrice: 0.008,
        discount: '20%'
    },
    
    enterprise: {
        name: '企业包',
        tokens: 50000,
        price: 350,
        currency: '¥',
        unitPrice: 0.007,
        discount: '30%'
    }
};

// 订阅管理器
class SubscriptionManager {
    constructor() {
        this.currentUser = null;
        this.subscription = null;
        this.verificationLevel = VerificationLevels.UNVERIFIED;
        this.aiTokens = 0;
        this.usageStats = {};
        this.init();
    }
    
    init() {
        // 从本地存储加载用户数据
        this.loadUserData();
        
        // 检查订阅状态
        this.checkSubscriptionStatus();
        
        // 更新显示
        this.updateUI();
    }
    
    loadUserData() {
        const userData = localStorage.getItem('subscription_user_data');
        if (userData) {
            const data = JSON.parse(userData);
            this.currentUser = data.user || null;
            this.subscription = data.subscription || null;
            this.verificationLevel = data.verificationLevel || VerificationLevels.UNVERIFIED;
            this.aiTokens = data.aiTokens || 0;
            this.usageStats = data.usageStats || {
                gamesPlayedToday: 0,
                apiCallsToday: 0,
                aiTokensUsedToday: 0,
                lastResetDate: new Date().toDateString()
            };
            
            // 检查是否需要重置每日使用量
            this.resetDailyUsageIfNeeded();
        }
    }
    
    saveUserData() {
        const data = {
            user: this.currentUser,
            subscription: this.subscription,
            verificationLevel: this.verificationLevel,
            aiTokens: this.aiTokens,
            usageStats: this.usageStats,
            lastUpdated: new Date().toISOString()
        };
        
        localStorage.setItem('subscription_user_data', JSON.stringify(data));
    }
    
    resetDailyUsageIfNeeded() {
        const today = new Date().toDateString();
        if (this.usageStats.lastResetDate !== today) {
            this.usageStats = {
                gamesPlayedToday: 0,
                apiCallsToday: 0,
                aiTokensUsedToday: 0,
                lastResetDate: today
            };
            this.saveUserData();
        }
    }
    
    // 用户注册和登录
    registerUser(email, password) {
        // 简化的注册逻辑
        this.currentUser = {
            email: email,
            userId: this.generateUserId(),
            registeredAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };
        
        // 默认订阅免费计划
        this.subscription = {
            plan: SubscriptionPlans.FREE,
            subscribedAt: new Date().toISOString(),
            expiresAt: this.calculateExpiryDate(30), // 30天免费试用
            status: 'active',
            paymentMethod: null
        };
        
        this.saveUserData();
        return true;
    }
    
    loginUser(email, password) {
        // 简化的登录逻辑
        if (this.currentUser && this.currentUser.email === email) {
            this.currentUser.lastLogin = new Date().toISOString();
            this.saveUserData();
            return true;
        }
        return false;
    }
    
    logoutUser() {
        this.currentUser = null;
        this.saveUserData();
    }
    
    // 订阅管理
    subscribeToPlan(planId, paymentMethod = null) {
        const plan = SubscriptionPlans[planId.toUpperCase()];
        if (!plan) {
            console.error('无效的订阅计划:', planId);
            return false;
        }
        
        this.subscription = {
            plan: plan,
            subscribedAt: new Date().toISOString(),
            expiresAt: this.calculateExpiryDate(30), // 默认30天
            status: 'active',
            paymentMethod: paymentMethod,
            renewalEnabled: true
        };
        
        // 根据计划赠送AI Tokens
        if (plan.limits.aiTokens > 0) {
            this.aiTokens += plan.limits.aiTokens;
        }
        
        this.saveUserData();
        this.dispatchEvent('subscriptionChanged', { plan: plan });
        
        return true;
    }
    
    cancelSubscription() {
        if (this.subscription) {
            this.subscription.status = 'cancelled';
            this.subscription.cancelledAt = new Date().toISOString();
            this.saveUserData();
            this.dispatchEvent('subscriptionCancelled');
            return true;
        }
        return false;
    }
    
    upgradePlan(newPlanId) {
        const currentPlan = this.subscription?.plan;
        const newPlan = SubscriptionPlans[newPlanId.toUpperCase()];
        
        if (!newPlan) {
            console.error('无效的新计划:', newPlanId);
            return false;
        }
        
        // 计算升级费用
        const upgradeFee = this.calculateUpgradeFee(currentPlan, newPlan);
        
        this.subscription.plan = newPlan;
        this.subscription.upgradedAt = new Date().toISOString();
        
        // 增加AI Tokens
        if (newPlan.limits.aiTokens > 0) {
            this.aiTokens += newPlan.limits.aiTokens;
        }
        
        this.saveUserData();
        this.dispatchEvent('subscriptionUpgraded', { 
            oldPlan: currentPlan, 
            newPlan: newPlan,
            fee: upgradeFee
        });
        
        return true;
    }
    
    // 验证管理
    verifyEmail(email) {
        // 简化的邮箱验证
        if (this.currentUser && this.currentUser.email === email) {
            this.verificationLevel = VerificationLevels.EMAIL_VERIFIED;
            this.saveUserData();
            this.dispatchEvent('emailVerified');
            return true;
        }
        return false;
    }
    
    verifyPhone(phoneNumber) {
        // 简化的手机验证
        if (this.currentUser) {
            this.currentUser.phone = phoneNumber;
            this.verificationLevel = VerificationLevels.PHONE_VERIFIED;
            this.saveUserData();
            this.dispatchEvent('phoneVerified');
            return true;
        }
        return false;
    }
    
    // AI Tokens管理
    purchaseAITokens(packageType) {
        const tokenPackage = AITokenPricing[packageType];
        if (!tokenPackage) {
            console.error('无效的AI Tokens包:', packageType);
            return false;
        }
        
        // 这里应该调用支付系统
        const purchaseSuccessful = this.processPayment(tokenPackage.price);
        
        if (purchaseSuccessful) {
            this.aiTokens += tokenPackage.tokens;
            this.saveUserData();
            
            this.dispatchEvent('tokensPurchased', {
                package: tokenPackage,
                newBalance: this.aiTokens
            });
            
            return true;
        }
        
        return false;
    }
    
    useAITokens(count) {
        if (this.aiTokens >= count) {
            this.aiTokens -= count;
            this.usageStats.aiTokensUsedToday += count;
            this.saveUserData();
            
            this.dispatchEvent('tokensUsed', {
                count: count,
                remaining: this.aiTokens
            });
            
            return true;
        }
        
        return false;
    }
    
    // 使用检查
    canPlayGame() {
        if (!this.subscription) return false;
        
        const plan = this.subscription.plan;
        
        // 检查每日游戏限制
        if (plan.limits.maxGamesPerDay !== 'unlimited') {
            if (this.usageStats.gamesPlayedToday >= plan.limits.maxGamesPerDay) {
                return false;
            }
        }
        
        // 检查订阅状态
        if (this.subscription.status !== 'active') {
            return false;
        }
        
        // 检查验证级别要求
        if (plan.id !== 'free' && this.verificationLevel.level < 1) {
            return false;
        }
        
        return true;
    }
    
    recordGamePlay() {
        this.usageStats.gamesPlayedToday++;
        this.saveUserData();
    }
    
    // 权限检查
    hasFeature(feature) {
        if (!this.subscription) return false;
        
        const plan = this.subscription.plan;
        
        switch(feature) {
            case 'unlimited_games':
                return plan.limits.maxGamesPerDay === 'unlimited';
                
            case 'ai_access':
                return this.aiTokens > 0;
                
            case 'api_access':
                return plan.limits.apiAccess === true;
                
            case 'priority_support':
                return plan.limits.prioritySupport === true;
                
            case 'custom_features':
                return plan.limits.customFeatures === true;
                
            default:
                return false;
        }
    }
    
    // 使用统计
    getUsageStats() {
        const plan = this.subscription?.plan || SubscriptionPlans.FREE;
        
        return {
            plan: plan.name,
            verificationLevel: this.verificationLevel.name,
            aiTokens: this.aiTokens,
            dailyUsage: {
                gamesPlayed: this.usageStats.gamesPlayedToday,
                maxGamesPerDay: plan.limits.maxGamesPerDay,
                apiCalls: this.usageStats.apiCallsToday,
                maxApiCalls: plan.limits.apiCalls,
                aiTokensUsed: this.usageStats.aiTokensUsedToday
            },
            subscriptionStatus: this.subscription?.status || 'none',
            expiresAt: this.subscription?.expiresAt || null
        };
    }
    
    // 生成报告
    generateSubscriptionReport() {
        const stats = this.getUsageStats();
        
        let report = `📊 用户订阅报告\n`;
        report += `生成时间：${new Date().toLocaleString('zh-CN')}\n\n`;
        
        report += `👤 用户信息\n`;
        report += `邮箱：${this.currentUser?.email || '未登录'}\n`;
        report += `注册时间：${this.currentUser?.registeredAt ? new Date(this.currentUser.registeredAt).toLocaleDateString('zh-CN') : 'N/A'}\n\n`;
        
        report += `💰 订阅信息\n`;
        report += `当前计划：${stats.plan}\n`;
        report += `订阅状态：${stats.subscriptionStatus}\n`;
        report += `到期时间：${stats.expiresAt ? new Date(stats.expiresAt).toLocaleDateString('zh-CN') : 'N/A'}\n\n`;
        
        report += `🔐 验证信息\n`;
        report += `验证级别：${stats.verificationLevel}\n\n`;
        
        report += `🎮 使用统计\n`;
        report += `今日游戏次数：${stats.dailyUsage.gamesPlayed}/${stats.dailyUsage.maxGamesPerDay}\n`;
        report += `AI Tokens余额：${stats.aiTokens}\n`;
        report += `今日AI Tokens使用：${stats.dailyUsage.aiTokensUsed}\n`;
        
        if (stats.dailyUsage.maxApiCalls !== 'unlimited') {
            report += `API调用：${stats.dailyUsage.apiCalls}/${stats.dailyUsage.maxApiCalls}\n`;
        }
        
        report += `\n⚡ 可用功能\n`;
        const features = [
            { name: '无限制游戏', key: 'unlimited_games' },
            { name: 'AI功能访问', key: 'ai_access' },
            { name: 'API访问', key: 'api_access' },
            { name: '优先支持', key: 'priority_support' }
        ];
        
        features.forEach(feature => {
            report += `${feature.name}: ${this.hasFeature(feature.key) ? '✅' : '❌'}\n`;
        });
        
        return report;
    }
    
    // 实用方法
    generateUserId() {
        return 'user_' + Math.random().toString(36).substr(2, 9);
    }
    
    calculateExpiryDate(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toISOString();
    }
    
    calculateUpgradeFee(oldPlan, newPlan) {
        // 简化的升级费用计算
        const daysRemaining = this.getDaysRemaining();
        const dailyRateOld = oldPlan.price / 30;
        const dailyRateNew = newPlan.price / 30;
        const refund = dailyRateOld * daysRemaining;
        const newCost = dailyRateNew * daysRemaining;
        return Math.max(0, newCost - refund);
    }
    
    getDaysRemaining() {
        if (!this.subscription?.expiresAt) return 0;
        const expiryDate = new Date(this.subscription.expiresAt);
        const now = new Date();
        const diffTime = expiryDate - now;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    
    processPayment(amount) {
        // 简化的支付处理
        console.log(`处理支付：¥${amount}`);
        return true; // 总是成功
    }
    
    // 事件系统
    dispatchEvent(eventName, detail = {}) {
        const event = new CustomEvent(eventName, {
            detail: {
                ...detail,
                timestamp: new Date().toISOString(),
                user: this.currentUser
            }
        });
        document.dispatchEvent(event);
    }
    
    // UI更新
    updateUI() {
        // 更新页面上的订阅状态显示
        const subscriptionElements = document.querySelectorAll('.subscription-status');
        subscriptionElements.forEach(element => {
            element.textContent = this.subscription?.plan.name || '未订阅';
        });
        
        const tokenElements = document.querySelectorAll('.ai-tokens-balance');
        tokenElements.forEach(element => {
            element.textContent = this.aiTokens;
        });
    }
}

// 创建全局订阅管理器实例
window.SubscriptionManager = new SubscriptionManager();

console.log('订阅和验证系统已加载');

// 初始化事件监听
document.addEventListener('DOMContentLoaded', () => {
    // 检查用户是否已登录
    if (window.SubscriptionManager.currentUser) {
        console.log('用户已登录:', window.SubscriptionManager.currentUser.email);
    } else {
        console.log('用户未登录，显示登录/注册界面');
    }
});