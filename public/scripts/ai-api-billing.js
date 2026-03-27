/**
 * AI API Tokens计费系统
 * 集成AI功能和服务
 */

class AIAPIBillingSystem {
    constructor() {
        this.apiEndpoint = 'https://api.ideatech-games.com/ai'; // 模拟API端点
        this.apiVersion = 'v1';
        this.tokenCosts = this.getTokenCosts();
        this.cachedResponses = new Map();
        this.init();
    }
    
    init() {
        console.log('AI API计费系统初始化...');
        
        // 监听用户状态变化
        document.addEventListener('userLoggedIn', () => this.onUserLoggedIn());
        document.addEventListener('userLoggedOut', () => this.onUserLoggedOut());
        
        // 检查是否有订阅管理器
        if (window.SubscriptionManager) {
            this.subscriptionManager = window.SubscriptionManager;
        }
    }
    
    // Token消耗配置
    getTokenCosts() {
        return {
            // 基础AI功能
            text_completion: {
                tokensPerRequest: 10,
                description: '文本补全',
                features: ['游戏名称生成', '游戏描述生成', '提示语生成']
            },
            
            image_generation: {
                tokensPerRequest: 50,
                description: '图像生成',
                features: ['游戏角色设计', '游戏场景生成', '游戏图标生成']
            },
            
            game_analysis: {
                tokensPerRequest: 20,
                description: '游戏分析',
                features: ['游戏数据统计', '玩家行为分析', '推荐算法']
            },
            
            player_recommendation: {
                tokensPerRequest: 15,
                description: '玩家推荐',
                features: ['个性化游戏推荐', '相似玩家匹配', '好友推荐']
            },
            
            strategy_generation: {
                tokensPerRequest: 30,
                description: '策略生成',
                features: ['游戏攻略生成', '最佳玩法建议', '战术分析']
            },
            
            difficulty_adjustment: {
                tokensPerRequest: 25,
                description: '难度调整',
                features: ['动态难度平衡', '玩家技能评估', '个性化挑战']
            },
            
            // 高级AI功能
            ai_assistant: {
                tokensPerMinute: 5,
                description: 'AI助手',
                features: ['实时游戏指导', '问题解答', '技巧提示']
            },
            
            predictive_analytics: {
                tokensPerRequest: 40,
                description: '预测分析',
                features: ['游戏结果预测', '玩家流失预测', '收入预测']
            },
            
            content_moderation: {
                tokensPerRequest: 15,
                description: '内容审核',
                features: ['聊天内容审核', '不当行为检测', '社区管理']
            }
        };
    }
    
    // 用户状态变化处理
    onUserLoggedIn() {
        console.log('用户已登录，检查AI Tokens余额');
        this.updateTokenBalanceDisplay();
    }
    
    onUserLoggedOut() {
        console.log('用户已退出，清除AI相关数据');
        this.clearAIData();
    }
    
    // 检查用户是否有足够的Tokens
    hasEnoughTokens(featureType, quantity = 1) {
        if (!this.subscriptionManager) {
            console.warn('订阅管理器未找到');
            return false;
        }
        
        const featureConfig = this.tokenCosts[featureType];
        if (!featureConfig) {
            console.error('未知的AI功能类型:', featureType);
            return false;
        }
        
        let tokensNeeded;
        if (featureConfig.tokensPerRequest) {
            tokensNeeded = featureConfig.tokensPerRequest * quantity;
        } else if (featureConfig.tokensPerMinute) {
            tokensNeeded = featureConfig.tokensPerMinute * quantity;
        } else {
            console.error('无效的Token成本配置:', featureType);
            return false;
        }
        
        return this.subscriptionManager.aiTokens >= tokensNeeded;
    }
    
    // 使用Tokens
    useTokens(featureType, quantity = 1) {
        if (!this.hasEnoughTokens(featureType, quantity)) {
            throw new Error(`AI Tokens不足，无法使用${featureType}功能`);
        }
        
        const featureConfig = this.tokenCosts[featureType];
        let tokensToUse;
        
        if (featureConfig.tokensPerRequest) {
            tokensToUse = featureConfig.tokensPerRequest * quantity;
        } else if (featureConfig.tokensPerMinute) {
            tokensToUse = featureConfig.tokensPerMinute * quantity;
        }
        
        const success = this.subscriptionManager.useAITokens(tokensToUse);
        
        if (success) {
            this.logTokenUsage(featureType, tokensToUse, quantity);
            this.updateTokenBalanceDisplay();
            return tokensToUse;
        }
        
        return 0;
    }
    
    // 记录Token使用
    logTokenUsage(featureType, tokensUsed, quantity = 1) {
        const usageLog = {
            timestamp: new Date().toISOString(),
            featureType: featureType,
            tokensUsed: tokensUsed,
            quantity: quantity,
            user: this.subscriptionManager?.currentUser?.email || 'anonymous',
            remainingTokens: this.subscriptionManager?.aiTokens || 0
        };
        
        // 保存到本地存储
        this.saveUsageLog(usageLog);
        
        // 发送到服务器（模拟）
        this.sendUsageToServer(usageLog);
        
        console.log(`AI Tokens使用记录:`, usageLog);
    }
    
    saveUsageLog(usageLog) {
        const logs = JSON.parse(localStorage.getItem('ai_token_usage_logs') || '[]');
        logs.push(usageLog);
        
        // 只保留最近100条记录
        if (logs.length > 100) {
            logs.shift();
        }
        
        localStorage.setItem('ai_token_usage_logs', JSON.stringify(logs));
    }
    
    sendUsageToServer(usageLog) {
        // 模拟发送到服务器
        setTimeout(() => {
            console.log('Token使用记录已发送到服务器:', usageLog);
        }, 100);
    }
    
    // AI功能API调用
    async callAIFeature(featureType, parameters = {}, options = {}) {
        const defaultOptions = {
            useCache: true,
            maxRetries: 3,
            timeout: 30000
        };
        
        const mergedOptions = { ...defaultOptions, ...options };
        
        // 检查是否有足够的Tokens
        if (!this.hasEnoughTokens(featureType)) {
            const error = new Error('AI Tokens不足，请购买更多Tokens或升级订阅计划');
            error.code = 'INSUFFICIENT_TOKENS';
            throw error;
        }
        
        // 检查缓存
        const cacheKey = this.generateCacheKey(featureType, parameters);
        if (mergedOptions.useCache && this.cachedResponses.has(cacheKey)) {
            console.log('使用缓存结果:', featureType);
            return this.cachedResponses.get(cacheKey);
        }
        
        // 开始计费
        const tokensUsed = this.useTokens(featureType);
        
        try {
            // 模拟API调用
            const response = await this.simulateAICall(featureType, parameters, mergedOptions);
            
            // 缓存结果（如果有设置缓存）
            if (mergedOptions.useCache) {
                this.cachedResponses.set(cacheKey, response);
                // 设置缓存过期时间（1小时）
                setTimeout(() => {
                    this.cachedResponses.delete(cacheKey);
                }, 3600000);
            }
            
            return {
                success: true,
                data: response,
                tokensUsed: tokensUsed,
                remainingTokens: this.subscriptionManager.aiTokens,
                timestamp: new Date().toISOString()
            };
            
        } catch (error) {
            // 如果失败，返还Tokens（模拟）
            console.warn('AI调用失败，已返还Tokens:', tokensUsed);
            
            // 在实际系统中，这里可能需要调用服务器的退款API
            
            throw {
                success: false,
                error: error.message,
                tokensUsed: 0,
                remainingTokens: this.subscriptionManager.aiTokens,
                timestamp: new Date().toISOString()
            };
        }
    }
    
    // 生成缓存键
    generateCacheKey(featureType, parameters) {
        return `${featureType}_${JSON.stringify(parameters)}`;
    }
    
    // 模拟AI调用
    async simulateAICall(featureType, parameters, options) {
        console.log(`调用AI功能: ${featureType}`, parameters);
        
        // 模拟API延迟
        await this.delay(Math.random() * 1000 + 500);
        
        // 根据功能类型返回模拟数据
        switch (featureType) {
            case 'text_completion':
                return this.simulateTextCompletion(parameters);
                
            case 'image_generation':
                return this.simulateImageGeneration(parameters);
                
            case 'game_analysis':
                return this.simulateGameAnalysis(parameters);
                
            case 'player_recommendation':
                return this.simulatePlayerRecommendation(parameters);
                
            case 'strategy_generation':
                return this.simulateStrategyGeneration(parameters);
                
            case 'difficulty_adjustment':
                return this.simulateDifficultyAdjustment(parameters);
                
            case 'ai_assistant':
                return this.simulateAIAssistant(parameters);
                
            case 'predictive_analytics':
                return this.simulatePredictiveAnalytics(parameters);
                
            case 'content_moderation':
                return this.simulateContentModeration(parameters);
                
            default:
                throw new Error(`未知的AI功能类型: ${featureType}`);
        }
    }
    
    // 模拟延迟
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // 模拟文本补全
    simulateTextCompletion(params) {
        const prompts = {
            game_name: '生成5个有趣的游戏名称：',
            game_description: '生成游戏描述：',
            tip: '生成游戏技巧提示：',
            story: '生成游戏剧情：'
        };
        
        const promptType = params.promptType || 'game_name';
        const basePrompt = prompts[promptType] || '生成内容：';
        
        const examples = {
            game_name: [
                '星际探险家',
                '魔法学院大冒险',
                '赛车极速挑战',
                '僵尸末日生存',
                '宝石消除大师'
            ],
            game_description: [
                '这是一款充满挑战的冒险游戏，玩家需要在神秘的世界中探索未知领域，解开关卡谜题，最终找到传说中的宝藏。',
                '在这款游戏中，你可以体验极速驾驶的快感，选择不同的豪华跑车，在城市的街道上进行激烈的竞速比赛。',
                '考验你的反应速度和策略思维，在僵尸末日中生存下来，收集资源，建立基地，保护人类最后的希望。'
            ],
            tip: [
                '多利用地图上的隐藏道具，它们能帮助你更快通关。',
                '注意敌人的攻击模式，找到规律后就能轻松躲避。',
                '合理分配资源，不要一次性用完所有道具。',
                '与其他玩家合作可以获得更好的游戏体验。'
            ]
        };
        
        const response = examples[promptType] || ['AI生成的内容示例'];
        
        return {
            type: 'text_completion',
            prompt: basePrompt + (params.text || ''),
            completions: response,
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟图像生成
    simulateImageGeneration(params) {
        const styles = {
            cartoon: '卡通风格',
            realistic: '写实风格',
            pixel: '像素风格',
            anime: '动漫风格'
        };
        
        return {
            type: 'image_generation',
            prompt: params.prompt || '生成游戏图像',
            style: styles[params.style] || '卡通风格',
            images: [
                {
                    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    size: '500x500',
                    format: 'jpg'
                },
                {
                    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    size: '500x500',
                    format: 'jpg'
                }
            ],
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟游戏分析
    simulateGameAnalysis(params) {
        const gameId = params.gameId || 'default_game';
        
        return {
            type: 'game_analysis',
            gameId: gameId,
            stats: {
                totalPlayers: Math.floor(Math.random() * 10000) + 1000,
                averagePlayTime: Math.floor(Math.random() * 30) + 10,
                completionRate: (Math.random() * 30 + 60).toFixed(1) + '%',
                difficultyRating: (Math.random() * 2 + 3).toFixed(1),
                playerRetention: (Math.random() * 20 + 70).toFixed(1) + '%'
            },
            recommendations: [
                '建议增加更多关卡难度选择',
                '可以考虑添加多人合作模式',
                '游戏音效和音乐需要优化',
                'UI界面可以更加简洁直观'
            ],
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟玩家推荐
    simulatePlayerRecommendation(params) {
        const userId = params.userId || 'anonymous';
        
        return {
            type: 'player_recommendation',
            userId: userId,
            recommendations: [
                {
                    gameId: 'fireboy-watergirl',
                    title: '森林冰火人',
                    matchScore: 95,
                    reason: '基于您喜欢的合作解谜游戏'
                },
                {
                    gameId: 'gold-miner',
                    title: '黄金矿工',
                    matchScore: 88,
                    reason: '您可能喜欢的休闲策略游戏'
                },
                {
                    gameId: 'car-racing',
                    title: '极品飞车',
                    matchScore: 82,
                    reason: '与您游玩记录中赛车类游戏匹配'
                }
            ],
            similarPlayers: [
                { id: 'player_001', similarity: 92 },
                { id: 'player_002', similarity: 87 },
                { id: 'player_003', similarity: 79 }
            ],
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟策略生成
    simulateStrategyGeneration(params) {
        const gameId = params.gameId || 'default_game';
        
        return {
            type: 'strategy_generation',
            gameId: gameId,
            strategies: [
                {
                    title: '快速通关策略',
                    steps: [
                        '优先收集资源道具',
                        '掌握敌人移动规律',
                        '合理使用特殊技能',
                        '注意关卡时间限制'
                    ],
                    difficulty: '中等',
                    estimatedTime: '15-20分钟'
                },
                {
                    title: '高分获取技巧',
                    steps: [
                        '连击可以获得额外分数',
                        '完成隐藏任务有奖励',
                        '节省道具使用时机',
                        '多尝试不同路线'
                    ],
                    difficulty: '困难',
                    estimatedTime: '25-30分钟'
                }
            ],
            tips: [
                '注意观察游戏中的提示信息',
                '多练习可以提高操作熟练度',
                '与其他玩家交流经验',
                '观看高手游戏录像学习技巧'
            ],
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟难度调整
    simulateDifficultyAdjustment(params) {
        const playerId = params.playerId || 'anonymous';
        
        return {
            type: 'difficulty_adjustment',
            playerId: playerId,
            currentSkillLevel: Math.floor(Math.random() * 100),
            recommendedDifficulty: Math.floor(Math.random() * 10) + 1,
            adjustmentFactors: {
                winRate: (Math.random() * 30 + 50).toFixed(1) + '%',
                playTime: Math.floor(Math.random() * 30) + 10,
                retryCount: Math.floor(Math.random() * 5),
                completionTime: Math.floor(Math.random() * 20) + 5
            },
            suggestedChanges: [
                '降低敌人移动速度',
                '增加玩家生命值',
                '提供更多提示信息',
                '延长关卡时间限制'
            ],
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟AI助手
    simulateAIAssistant(params) {
        const query = params.query || '你好';
        
        const responses = {
            '你好': '你好！我是游戏AI助手，有什么可以帮助您的吗？',
            '怎么玩游戏': '您可以选择游戏并点击"立即游玩"按钮开始游戏。游戏中有详细的操作说明和教程。',
            '如何获得高分': '要获得高分，可以多练习游戏技巧，观看游戏攻略，合理使用道具和技能。',
            '怎么升级订阅': '您可以访问订阅管理页面选择适合您的订阅计划进行升级。',
            'AI Tokens是什么': 'AI Tokens是用于调用AI功能的代币，可以通过购买或订阅获得。'
        };
        
        return {
            type: 'ai_assistant',
            query: query,
            response: responses[query] || '我暂时无法回答这个问题，您可以联系客服获取帮助。',
            suggestions: [
                '游戏技巧',
                '订阅管理',
                'AI Tokens购买',
                '客服联系'
            ],
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟预测分析
    simulatePredictiveAnalytics(params) {
        return {
            type: 'predictive_analytics',
            predictions: {
                playerChurnRisk: (Math.random() * 20).toFixed(1) + '%',
                nextMonthRevenue: Math.floor(Math.random() * 10000) + 5000,
                popularGameNextWeek: ['森林冰火人', '黄金矿工', '极品飞车'],
                peakPlayTime: '晚上 20:00-22:00'
            },
            insights: [
                '周末的游戏活跃度比工作日高30%',
                '新玩家主要集中在下午和晚上时间段',
                '休闲类游戏在移动设备上更受欢迎',
                '多人游戏模式的玩家留存率更高'
            ],
            recommendations: [
                '建议在周末推出特别活动',
                '优化移动端游戏体验',
                '增加多人游戏功能',
                '加强新玩家引导'
            ],
            timestamp: new Date().toISOString()
        };
    }
    
    // 模拟内容审核
    simulateContentModeration(params) {
        const content = params.content || '';
        
        const risks = {
            high: ['暴力', '仇恨言论', '成人内容'],
            medium: ['垃圾信息', '广告', '重复内容'],
            low: ['轻微违规', '不当用语']
        };
        
        return {
            type: 'content_moderation',
            content: content,
            analysis: {
                isSafe: Math.random() > 0.3,
                riskLevel: Math.random() > 0.7 ? 'high' : (Math.random() > 0.5 ? 'medium' : 'low'),
                flaggedCategories: Math.random() > 0.5 ? [risks.low[0]] : [],
                confidence: (Math.random() * 20 + 80).toFixed(1) + '%'
            },
            actions: Math.random() > 0.7 ? ['需要人工审核'] : ['通过审核'],
            timestamp: new Date().toISOString()
        };
    }
    
    // 获取使用历史
    getUsageHistory(limit = 10) {
        const logs = JSON.parse(localStorage.getItem('ai_token_usage_logs') || '[]');
        return logs.slice(-limit).reverse();
    }
    
    // 获取Token余额显示
    updateTokenBalanceDisplay() {
        if (!this.subscriptionManager) return;
        
        const elements = document.querySelectorAll('.ai-token-balance-display');
        elements.forEach(element => {
            element.textContent = this.subscriptionManager.aiTokens.toLocaleString();
        });
        
        // 更新进度条（如果有）
        const progressBars = document.querySelectorAll('.ai-token-progress');
        progressBars.forEach(bar => {
            const maxTokens = 1000; // 默认最大值
            const percent = (this.subscriptionManager.aiTokens / maxTokens) * 100;
            bar.style.width = Math.min(percent, 100) + '%';
        });
    }
    
    // 清除AI数据
    clearAIData() {
        this.cachedResponses.clear();
        
        // 可以清除本地存储中的某些AI相关数据
        // localStorage.removeItem('ai_token_usage_logs');
    }
    
    // 获取Token使用统计
    getTokenUsageStats() {
        const logs = JSON.parse(localStorage.getItem('ai_token_usage_logs') || '[]');
        
        const stats = {
            totalUsed: 0,
            byFeature: {},
            byDate: {},
            recentUsage: []
        };
        
        logs.forEach(log => {
            stats.totalUsed += log.tokensUsed;
            
            // 按功能统计
            if (!stats.byFeature[log.featureType]) {
                stats.byFeature[log.featureType] = 0;
            }
            stats.byFeature[log.featureType] += log.tokensUsed;
            
            // 按日期统计
            const date = new Date(log.timestamp).toDateString();
            if (!stats.byDate[date]) {
                stats.byDate[date] = 0;
            }
            stats.byDate[date] += log.tokensUsed;
            
            // 最近使用记录
            stats.recentUsage.push({
                feature: log.featureType,
                tokens: log.tokensUsed,
                time: new Date(log.timestamp).toLocaleTimeString('zh-CN'),
                date: date
            });
        });
        
        // 只保留最近10条记录
        stats.recentUsage = stats.recentUsage.slice(-10).reverse();
        
        return stats;
    }
    
    // 生成Token使用报告
    generateTokenUsageReport() {
        const stats = this.getTokenUsageStats();
        const currentBalance = this.subscriptionManager?.aiTokens || 0;
        
        let report = `📊 AI Tokens使用报告\n`;
        report += `生成时间：${new Date().toLocaleString('zh-CN')}\n\n`;
        
        report += `💰 Token余额\n`;
        report += `当前余额：${currentBalance.toLocaleString('zh-CN')} Tokens\n\n`;
        
        report += `📈 使用统计\n`;
        report += `总使用量：${stats.totalUsed.toLocaleString('zh-CN')} Tokens\n\n`;
        
        report += `🏷️ 按功能分类\n`;
        Object.entries(stats.byFeature).forEach(([feature, tokens]) => {
            const featureConfig = this.tokenCosts[feature];
            const featureName = featureConfig?.description || feature;
            report += `${featureName}: ${tokens.toLocaleString('zh-CN')} Tokens\n`;
        });
        
        report += `\n📅 最近使用记录\n`;
        stats.recentUsage.forEach(usage => {
            report += `${usage.date} ${usage.time} - ${usage.feature}: ${usage.tokens} Tokens\n`;
        });
        
        return report;
    }
}

// 创建全局AI API计费系统实例
window.AIAPIBilling = new AIAPIBillingSystem();

// 导出常用函数
window.AIAPI = {
    // 检查是否有足够Tokens
    hasTokens: (feature, quantity) => window.AIAPIBilling.hasEnoughTokens(feature, quantity),
    
    // 调用AI功能
    call: (feature, params, options) => window.AIAPIBilling.callAIFeature(feature, params, options),
    
    // 获取使用历史
    getHistory: (limit) => window.AIAPIBilling.getUsageHistory(limit),
    
    // 获取使用统计
    getStats: () => window.AIAPIBilling.getTokenUsageStats(),
    
    // 生成报告
    getReport: () => window.AIAPIBilling.generateTokenUsageReport(),
    
    // 更新显示
    updateDisplay: () => window.AIAPIBilling.updateTokenBalanceDisplay()
};

console.log('AI API Tokens计费系统已加载');

// 自动更新Token余额显示
document.addEventListener('DOMContentLoaded', () => {
    window.AIAPIBilling.updateTokenBalanceDisplay();
});