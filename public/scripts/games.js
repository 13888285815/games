// 游戏数据和实用函数

// 扩展游戏数据
const extendedGameData = {
    // 更多游戏数据
    games: [
        ...gameData.games, // 原有的游戏
        
        // 新增游戏
        {
            id: 'pacman',
            title: '吃豆人',
            category: 'action',
            description: '经典街机游戏！控制吃豆人吃掉迷宫中的所有豆子，同时避开鬼魂的追击。',
            players: '876,543',
            rating: '4.7',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/pacman.html'
        },
        {
            id: 'mario',
            title: '超级马里奥',
            category: 'action',
            description: '经典平台跳跃游戏！控制马里奥穿过各种关卡，收集金币，打败敌人，拯救公主。',
            players: '654,321',
            rating: '4.9',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/mario.html'
        },
        {
            id: 'snake',
            title: '贪吃蛇',
            category: 'casual',
            description: '经典手机游戏！控制蛇吃掉食物变得越来越长，小心不要撞到墙壁或自己的身体。',
            players: '543,210',
            rating: '4.5',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/snake.html'
        },
        {
            id: 'solitaire',
            title: '蜘蛛纸牌',
            category: 'board',
            description: '经典纸牌游戏！按照顺序排列纸牌，清理所有的牌堆，完成游戏。',
            players: '432,109',
            rating: '4.4',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/solitaire.html'
        },
        {
            id: 'mahjong',
            title: '麻将连连看',
            category: 'board',
            description: '麻将配对游戏！找到相同的麻将牌并消除，清理所有的牌，在规定时间内完成。',
            players: '321,098',
            rating: '4.3',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/mahjong.html'
        },
        {
            id: 'bubble-shooter',
            title: '泡泡射手',
            category: 'puzzle',
            description: '射击消除游戏！发射彩色泡泡，匹配三个或更多相同颜色的泡泡即可消除。',
            players: '210,987',
            rating: '4.2',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/bubble-shooter.html'
        },
        {
            id: 'fruit-ninja',
            title: '水果忍者',
            category: 'casual',
            description: '触屏切割游戏！用手指划过屏幕切割水果，避开炸弹，获得高分。',
            players: '109,876',
            rating: '4.6',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/fruit-ninja.html'
        },
        {
            id: 'word-search',
            title: '单词搜索',
            category: 'puzzle',
            description: '文字游戏！在字母网格中找到隐藏的单词，提高你的词汇量和观察力。',
            players: '98,765',
            rating: '4.1',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/word-search.html'
        }
    ],
    
    // 游戏类型详细信息
    categoryDetails: {
        action: {
            description: '动作游戏通常需要快速反应和精确控制，包括格斗、跑酷、平台跳跃等类型。',
            popularGames: ['森林冰火人', '黄金矿工', '超级马里奥', '吃豆人']
        },
        puzzle: {
            description: '益智游戏考验玩家的逻辑思维和问题解决能力，包括解谜、拼图、策略等类型。',
            popularGames: ['俄罗斯方块', '泡泡射手', '单词搜索', '数独']
        },
        shooting: {
            description: '射击游戏包括第一人称射击、第三人称射击、弹幕射击等，考验瞄准和反应能力。',
            popularGames: ['僵尸射击', '坦克大战', '飞机大战', '太空侵略者']
        },
        racing: {
            description: '赛车游戏让玩家体验极速驾驶的快感，包括街头赛车、越野赛车、模拟驾驶等。',
            popularGames: ['极品飞车', '跑跑卡丁车', '暴力摩托', 'GT赛车']
        },
        casual: {
            description: '休闲游戏简单易上手，适合放松心情，包括消除、经营、养成、放置等类型。',
            popularGames: ['愤怒的小鸟', '贪吃蛇', '水果忍者', '开心消消乐']
        },
        sports: {
            description: '体育游戏模拟真实体育运动，包括足球、篮球、网球、高尔夫等各种运动项目。',
            popularGames: ['街头篮球', '实况足球', '网球大师', '高尔夫模拟']
        },
        board: {
            description: '棋牌游戏包括国际象棋、中国象棋、围棋、扑克、麻将等传统棋牌类游戏。',
            popularGames: ['国际象棋', '中国象棋', '蜘蛛纸牌', '麻将连连看']
        },
        strategy: {
            description: '策略游戏需要玩家制定计划和战略，包括塔防、即时战略、回合制策略等类型。',
            popularGames: ['植物大战僵尸', '部落冲突', '文明帝国', '红警']
        }
    },
    
    // 每日推荐游戏
    dailyRecommendations: [
        {
            date: '2024-01-01',
            games: ['gold-miner', 'tetris', 'angry-birds']
        },
        {
            date: '2024-01-02',
            games: ['fireboy-watergirl', 'pacman', 'fruit-ninja']
        },
        {
            date: '2024-01-03',
            games: ['zombie-shooter', 'car-racing', 'bubble-shooter']
        }
    ]
};

// 实用函数
const GameUtils = {
    // 根据游戏ID获取游戏
    getGameById(gameId) {
        return extendedGameData.games.find(game => game.id === gameId);
    },
    
    // 根据分类获取游戏
    getGamesByCategory(category) {
        return extendedGameData.games.filter(game => game.category === category);
    },
    
    // 搜索游戏
    searchGames(query) {
        const lowerQuery = query.toLowerCase();
        return extendedGameData.games.filter(game => 
            game.title.toLowerCase().includes(lowerQuery) ||
            game.description.toLowerCase().includes(lowerQuery) ||
            gameData.categories[game.category].name.toLowerCase().includes(lowerQuery)
        );
    },
    
    // 获取热门游戏（按游玩人数排序）
    getHotGames(limit = 10) {
        return [...extendedGameData.games]
            .sort((a, b) => {
                const aPlayers = parseInt(a.players.replace(/,/g, ''));
                const bPlayers = parseInt(b.players.replace(/,/g, ''));
                return bPlayers - aPlayers;
            })
            .slice(0, limit);
    },
    
    // 获取最新游戏（按添加顺序）
    getNewGames(limit = 10) {
        return [...extendedGameData.games]
            .reverse()
            .slice(0, limit);
    },
    
    // 获取游戏评分分布
    getRatingDistribution() {
        const distribution = {
            '5.0': 0,
            '4.5-4.9': 0,
            '4.0-4.4': 0,
            '3.5-3.9': 0,
            '3.0-3.4': 0,
            '2.9以下': 0
        };
        
        extendedGameData.games.forEach(game => {
            const rating = parseFloat(game.rating);
            if (rating >= 5.0) {
                distribution['5.0']++;
            } else if (rating >= 4.5) {
                distribution['4.5-4.9']++;
            } else if (rating >= 4.0) {
                distribution['4.0-4.4']++;
            } else if (rating >= 3.5) {
                distribution['3.5-3.9']++;
            } else if (rating >= 3.0) {
                distribution['3.0-3.4']++;
            } else {
                distribution['2.9以下']++;
            }
        });
        
        return distribution;
    },
    
    // 获取分类统计
    getCategoryStats() {
        const stats = {};
        
        Object.keys(gameData.categories).forEach(category => {
            const gamesInCategory = this.getGamesByCategory(category);
            stats[category] = {
                count: gamesInCategory.length,
                totalPlayers: gamesInCategory.reduce((sum, game) => 
                    sum + parseInt(game.players.replace(/,/g, '')), 0
                ),
                avgRating: gamesInCategory.reduce((sum, game) => 
                    sum + parseFloat(game.rating), 0
                ) / gamesInCategory.length || 0
            };
        });
        
        return stats;
    },
    
    // 获取今日推荐游戏
    getTodayRecommendations() {
        const today = new Date().toISOString().split('T')[0];
        const daily = extendedGameData.dailyRecommendations.find(d => d.date === today);
        
        if (daily) {
            return daily.games.map(gameId => this.getGameById(gameId)).filter(Boolean);
        }
        
        // 如果没有今日推荐，返回随机推荐
        return this.getRandomGames(3);
    },
    
    // 获取随机游戏
    getRandomGames(count = 3) {
        const shuffled = [...extendedGameData.games].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },
    
    // 获取相似游戏
    getSimilarGames(gameId, count = 3) {
        const currentGame = this.getGameById(gameId);
        if (!currentGame) return [];
        
        return extendedGameData.games
            .filter(game => 
                game.id !== gameId && 
                game.category === currentGame.category
            )
            .slice(0, count);
    },
    
    // 格式化游玩人数
    formatPlayerCount(players) {
        const num = parseInt(players.replace(/,/g, ''));
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M`;
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K`;
        }
        return players;
    },
    
    // 计算游戏时长
    calculateGameDuration(minutes) {
        if (minutes < 60) {
            return `${minutes}分钟`;
        } else if (minutes < 1440) {
            return `${Math.floor(minutes / 60)}小时${minutes % 60}分钟`;
        } else {
            return `${Math.floor(minutes / 1440)}天${Math.floor((minutes % 1440) / 60)}小时`;
        }
    },
    
    // 验证游戏数据
    validateGame(game) {
        const errors = [];
        
        if (!game.title || game.title.trim().length < 2) {
            errors.push('游戏名称至少需要2个字符');
        }
        
        if (!game.category || !gameData.categories[game.category]) {
            errors.push('无效的游戏分类');
        }
        
        if (!game.description || game.description.trim().length < 10) {
            errors.push('游戏描述至少需要10个字符');
        }
        
        const rating = parseFloat(game.rating);
        if (isNaN(rating) || rating < 0 || rating > 5) {
            errors.push('评分必须在0-5之间');
        }
        
        return errors;
    },
    
    // 生成游戏统计报告
    generateStatsReport() {
        const stats = this.getCategoryStats();
        const ratingDist = this.getRatingDistribution();
        
        let report = `游戏平台统计报告\n`;
        report += `生成时间：${new Date().toLocaleString('zh-CN')}\n\n`;
        
        report += `📊 总体统计\n`;
        report += `总游戏数量：${extendedGameData.games.length}\n`;
        
        const totalPlayers = extendedGameData.games.reduce((sum, game) => 
            sum + parseInt(game.players.replace(/,/g, '')), 0
        );
        report += `总游玩人数：${totalPlayers.toLocaleString('zh-CN')}\n\n`;
        
        report += `🏷️ 分类统计\n`;
        Object.entries(stats).forEach(([category, data]) => {
            const catName = gameData.categories[category].name;
            report += `${catName}：${data.count}款游戏，${data.formatPlayerCount || data.totalPlayers.toLocaleString('zh-CN')}游玩，平均评分${data.avgRating.toFixed(1)}\n`;
        });
        
        report += `\n⭐ 评分分布\n`;
        Object.entries(ratingDist).forEach(([range, count]) => {
            const percentage = ((count / extendedGameData.games.length) * 100).toFixed(1);
            report += `${range}星：${count}款游戏 (${percentage}%)\n`;
        });
        
        report += `\n🔥 热门游戏排行榜\n`;
        const hotGames = this.getHotGames(5);
        hotGames.forEach((game, index) => {
            report += `${index + 1}. ${game.title} - ${game.players}游玩 - ${game.rating}星\n`;
        });
        
        return report;
    }
};

// 游戏推荐算法
const GameRecommendation = {
    // 基于用户历史推荐
    recommendBasedOnHistory(userHistory) {
        const recommendations = new Set();
        
        // 基于最近游玩的游戏类别推荐
        const recentCategories = userHistory
            .slice(-5)
            .map(entry => entry.gameId)
            .map(gameId => {
                const game = GameUtils.getGameById(gameId);
                return game ? game.category : null;
            })
            .filter(Boolean);
        
        // 统计类别频率
        const categoryFrequency = {};
        recentCategories.forEach(category => {
            categoryFrequency[category] = (categoryFrequency[category] || 0) + 1;
        });
        
        // 为每个高频率类别推荐游戏
        Object.entries(categoryFrequency)
            .sort(([, a], [, b]) => b - a)
            .forEach(([category]) => {
                const gamesInCategory = GameUtils.getGamesByCategory(category);
                gamesInCategory.forEach(game => {
                    if (!userHistory.some(entry => entry.gameId === game.id)) {
                        recommendations.add(game);
                    }
                });
            });
        
        return Array.from(recommendations);
    },
    
    // 基于相似用户推荐
    recommendBasedOnSimilarUsers(currentUserId, allUsers) {
        // 这里应该实现协同过滤算法
        // 简化为随机推荐
        return GameUtils.getRandomGames(5);
    },
    
    // 基于时间推荐
    recommendBasedOnTime() {
        const hour = new Date().getHours();
        let recommendedType;
        
        if (hour >= 8 && hour <= 12) {
            recommendedType = ['casual', 'puzzle']; // 上午适合休闲益智
        } else if (hour >= 13 && hour <= 17) {
            recommendedType = ['action', 'shooting']; // 下午适合动作射击
        } else if (hour >= 18 && hour <= 22) {
            recommendedType = ['racing', 'sports']; // 晚上适合竞速体育
        } else {
            recommendedType = ['board', 'strategy']; // 深夜适合棋牌策略
        }
        
        return GameUtils.getRandomGames(3).filter(game => 
            recommendedType.includes(game.category)
        );
    }
};

// 游戏进度保存
const GameProgress = {
    saveProgress(gameId, progressData) {
        const key = `game_progress_${gameId}`;
        localStorage.setItem(key, JSON.stringify({
            ...progressData,
            lastSaved: new Date().toISOString()
        }));
    },
    
    loadProgress(gameId) {
        const key = `game_progress_${gameId}`;
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    
    clearProgress(gameId) {
        const key = `game_progress_${gameId}`;
        localStorage.removeItem(key);
    },
    
    getAllProgress() {
        const progress = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('game_progress_')) {
                const gameId = key.replace('game_progress_', '');
                progress[gameId] = JSON.parse(localStorage.getItem(key));
            }
        }
        return progress;
    }
};

// 用户偏好设置
const UserPreferences = {
    settings: {
        soundEnabled: true,
        musicEnabled: true,
        graphicsQuality: 'medium',
        language: 'zh-CN',
        fontSize: 'normal',
        theme: 'light'
    },
    
    loadPreferences() {
        const saved = localStorage.getItem('user_preferences');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
        return this.settings;
    },
    
    savePreferences() {
        localStorage.setItem('user_preferences', JSON.stringify(this.settings));
    },
    
    updateSetting(key, value) {
        if (key in this.settings) {
            this.settings[key] = value;
            this.savePreferences();
        }
    },
    
    resetToDefaults() {
        this.settings = {
            soundEnabled: true,
            musicEnabled: true,
            graphicsQuality: 'medium',
            language: 'zh-CN',
            fontSize: 'normal',
            theme: 'light'
        };
        this.savePreferences();
    }
};

// 初始化用户偏好
UserPreferences.loadPreferences();

// 导出功能
window.GameData = extendedGameData;
window.GameUtils = GameUtils;
window.GameRecommendation = GameRecommendation;
window.GameProgress = GameProgress;
window.UserPreferences = UserPreferences;

console.log('游戏数据模块已加载，包含', extendedGameData.games.length, '款游戏');