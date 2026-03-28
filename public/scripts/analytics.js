/**
 * 意念科技游戏世界 - 访客分析系统
 * 为互联网访客提供完整的访问统计和监控功能
 */

class VisitorAnalytics {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.visitorId = this.getOrCreateVisitorId();
        this.startTime = Date.now();
        this.pageViews = 0;
        this.gamePlays = 0;
        this.events = [];
        
        // 初始化
        this.init();
    }
    
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    getOrCreateVisitorId() {
        let visitorId = localStorage.getItem('visitor_id');
        if (!visitorId) {
            visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('visitor_id', visitorId);
            localStorage.setItem('first_visit', new Date().toISOString());
        }
        return visitorId;
    }
    
    init() {
        // 记录页面访问
        this.trackPageView();
        
        // 记录会话开始
        this.trackEvent('session_start', {
            session_id: this.sessionId,
            visitor_id: this.visitorId,
            referrer: document.referrer,
            user_agent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            viewport_size: `${window.innerWidth}x${window.innerHeight}`
        });
        
        // 设置页面卸载跟踪
        window.addEventListener('beforeunload', () => {
            this.trackSessionEnd();
        });
        
        // 监听游戏开始事件
        document.addEventListener('game_start', (e) => {
            this.trackGamePlay(e.detail);
        });
        
        // 监听订阅事件
        document.addEventListener('subscription_start', (e) => {
            this.trackSubscription(e.detail);
        });
        
        // 监听AI功能使用
        document.addEventListener('ai_function_used', (e) => {
            this.trackAIFunction(e.detail);
        });
    }
    
    trackPageView() {
        this.pageViews++;
        
        const pageData = {
            url: window.location.href,
            path: window.location.pathname,
            title: document.title,
            timestamp: new Date().toISOString(),
            session_id: this.sessionId,
            visitor_id: this.visitorId
        };
        
        this.trackEvent('page_view', pageData);
        
        // 更新访客统计
        this.updateVisitorStats();
    }
    
    trackEvent(eventName, data = {}) {
        const event = {
            name: eventName,
            data: data,
            timestamp: new Date().toISOString(),
            session_id: this.sessionId,
            visitor_id: this.visitorId
        };
        
        this.events.push(event);
        
        // 发送到分析服务（示例）
        this.sendToAnalytics(event);
        
        // 本地存储（限制大小）
        this.storeLocally(event);
    }
    
    trackGamePlay(gameData) {
        this.gamePlays++;
        
        this.trackEvent('game_play', {
            game_id: gameData.id,
            game_name: gameData.title,
            category: gameData.category,
            duration: gameData.duration || 0,
            score: gameData.score || 0,
            platform: this.getDevicePlatform()
        });
        
        // 更新游戏排行榜统计
        this.updateGameStats(gameData.id);
    }
    
    trackSubscription(subscriptionData) {
        this.trackEvent('subscription_start', {
            plan: subscriptionData.plan,
            amount: subscriptionData.amount,
            currency: subscriptionData.currency || 'CNY',
            validation_level: subscriptionData.validationLevel,
            payment_method: subscriptionData.paymentMethod
        });
    }
    
    trackAIFunction(aiData) {
        this.trackEvent('ai_function_used', {
            function_name: aiData.function,
            tokens_used: aiData.tokens,
            cost: aiData.cost,
            duration: aiData.duration,
            success: aiData.success
        });
    }
    
    trackSessionEnd() {
        const sessionDuration = Date.now() - this.startTime;
        
        this.trackEvent('session_end', {
            session_duration: sessionDuration,
            page_views: this.pageViews,
            game_plays: this.gamePlays,
            events_count: this.events.length,
            exit_url: window.location.href
        });
        
        // 保存会话摘要
        this.saveSessionSummary(sessionDuration);
    }
    
    sendToAnalytics(event) {
        // 实际应用中，这里会发送到分析服务器
        // 示例：fetch('/api/analytics', { method: 'POST', body: JSON.stringify(event) })
        
        // 开发模式下打印到控制台
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('[Analytics]', event.name, event.data);
        }
    }
    
    storeLocally(event) {
        try {
            let storedEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
            storedEvents.push(event);
            
            // 限制存储数量（保留最近1000个事件）
            if (storedEvents.length > 1000) {
                storedEvents = storedEvents.slice(-1000);
            }
            
            localStorage.setItem('analytics_events', JSON.stringify(storedEvents));
        } catch (e) {
            console.warn('Failed to store analytics event:', e);
        }
    }
    
    updateVisitorStats() {
        try {
            let stats = JSON.parse(localStorage.getItem('visitor_stats') || '{}');
            
            // 更新总访问次数
            stats.total_visits = (stats.total_visits || 0) + 1;
            
            // 更新每日访问
            const today = new Date().toDateString();
            stats.daily_visits = stats.daily_visits || {};
            stats.daily_visits[today] = (stats.daily_visits[today] || 0) + 1;
            
            // 更新最后访问时间
            stats.last_visit = new Date().toISOString();
            
            localStorage.setItem('visitor_stats', JSON.stringify(stats));
        } catch (e) {
            console.warn('Failed to update visitor stats:', e);
        }
    }
    
    updateGameStats(gameId) {
        try {
            let gameStats = JSON.parse(localStorage.getItem('game_stats') || '{}');
            
            gameStats[gameId] = gameStats[gameId] || {
                plays: 0,
                total_duration: 0,
                total_score: 0,
                last_played: null
            };
            
            gameStats[gameId].plays++;
            gameStats[gameId].last_played = new Date().toISOString();
            
            localStorage.setItem('game_stats', JSON.stringify(gameStats));
        } catch (e) {
            console.warn('Failed to update game stats:', e);
        }
    }
    
    saveSessionSummary(duration) {
        try {
            let sessions = JSON.parse(localStorage.getItem('session_history') || '[]');
            
            sessions.push({
                id: this.sessionId,
                start_time: new Date(this.startTime).toISOString(),
                duration: duration,
                page_views: this.pageViews,
                game_plays: this.gamePlays,
                events_count: this.events.length
            });
            
            // 限制会话历史数量（保留最近50个会话）
            if (sessions.length > 50) {
                sessions = sessions.slice(-50);
            }
            
            localStorage.setItem('session_history', JSON.stringify(sessions));
        } catch (e) {
            console.warn('Failed to save session summary:', e);
        }
    }
    
    getDevicePlatform() {
        const ua = navigator.userAgent;
        
        if (/Android/.test(ua)) return 'android';
        if (/iPhone|iPad|iPod/.test(ua)) return 'ios';
        if (/Windows/.test(ua)) return 'windows';
        if (/Mac OS/.test(ua)) return 'macos';
        if (/Linux/.test(ua)) return 'linux';
        
        return 'unknown';
    }
    
    // 公开的统计方法
    getVisitorInfo() {
        return {
            visitor_id: this.visitorId,
            session_id: this.sessionId,
            first_visit: localStorage.getItem('first_visit'),
            total_visits: JSON.parse(localStorage.getItem('visitor_stats') || '{}').total_visits || 0,
            current_session: {
                duration: Date.now() - this.startTime,
                page_views: this.pageViews,
                game_plays: this.gamePlays
            }
        };
    }
    
    getPopularGames(limit = 5) {
        try {
            const gameStats = JSON.parse(localStorage.getItem('game_stats') || '{}');
            
            return Object.entries(gameStats)
                .map(([gameId, stats]) => ({
                    game_id: gameId,
                    plays: stats.plays,
                    last_played: stats.last_played
                }))
                .sort((a, b) => b.plays - a.plays)
                .slice(0, limit);
        } catch (e) {
            return [];
        }
    }
    
    getSessionHistory(limit = 10) {
        try {
            const sessions = JSON.parse(localStorage.getItem('session_history') || '[]');
            return sessions.slice(-limit).reverse();
        } catch (e) {
            return [];
        }
    }
    
    // GDPR合规方法
    clearVisitorData() {
        localStorage.removeItem('visitor_id');
        localStorage.removeItem('first_visit');
        localStorage.removeItem('visitor_stats');
        localStorage.removeItem('game_stats');
        localStorage.removeItem('session_history');
        localStorage.removeItem('analytics_events');
        
        // 重置当前会话
        this.visitorId = this.getOrCreateVisitorId();
        
        return true;
    }
    
    exportVisitorData() {
        return {
            visitor_info: this.getVisitorInfo(),
            game_stats: JSON.parse(localStorage.getItem('game_stats') || '{}'),
            session_history: JSON.parse(localStorage.getItem('session_history') || '[]'),
            recent_events: JSON.parse(localStorage.getItem('analytics_events') || '[]').slice(-100)
        };
    }
}

// 创建全局分析实例
window.VisitorAnalytics = new VisitorAnalytics();

// 工具函数
function trackCustomEvent(eventName, data = {}) {
    if (window.VisitorAnalytics) {
        window.VisitorAnalytics.trackEvent(eventName, data);
    }
}

function trackGameStart(gameData) {
    const event = new CustomEvent('game_start', { detail: gameData });
    document.dispatchEvent(event);
}

function trackSubscriptionStart(subscriptionData) {
    const event = new CustomEvent('subscription_start', { detail: subscriptionData });
    document.dispatchEvent(event);
}

function trackAIFunctionUsed(aiData) {
    const event = new CustomEvent('ai_function_used', { detail: aiData });
    document.dispatchEvent(event);
}

// 导出
export {
    VisitorAnalytics,
    trackCustomEvent,
    trackGameStart,
    trackSubscriptionStart,
    trackAIFunctionUsed
};