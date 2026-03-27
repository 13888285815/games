/**
 * 增强版游戏数据系统
 * 整合所有平台的游戏数据
 */

// 基础游戏数据
const baseGameData = {
    // 基础游戏数据保持不变...
};

// 新增游戏数据
const newPlatformGames = {
    // 来自7k7k的热门游戏
    gamesFrom7k7k: [
        {
            id: 'fireboy-watergirl',
            title: '森林冰火人',
            category: 'action',
            description: '经典双人合作游戏！控制冰火人兄弟穿越森林，解开关卡谜题，收集宝石。需要默契配合才能通关！',
            players: '987,654',
            rating: '4.8',
            image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/fireboy-watergirl.html',
            tags: ['双人', '合作', '冒险', '解谜']
        },
        {
            id: 'gold-miner',
            title: '黄金矿工',
            category: 'casual',
            description: '经典挖矿游戏！控制矿工抓住黄金和宝石，在规定时间内获得足够金钱购买道具，挑战更高关卡！',
            players: '876,543',
            rating: '4.7',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/gold-miner.html',
            tags: ['挖矿', '休闲', '策略', '经典']
        },
        {
            id: 'angry-birds',
            title: '愤怒的小鸟',
            category: 'puzzle',
            description: '全球热门物理游戏！发射小鸟摧毁绿色猪的建筑，计算角度和力度，获得三星评分！',
            players: '765,432',
            rating: '4.9',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/angry-birds.html',
            tags: ['物理', '休闲', '益智', '全球热门']
        },
        {
            id: 'zombie-shooter',
            title: '僵尸射击',
            category: 'shooting',
            description: '第一人称射击游戏！在僵尸末日中生存，收集武器弹药，消灭僵尸浪潮，守护基地安全！',
            players: '654,321',
            rating: '4.6',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/zombie-shooter.html',
            tags: ['僵尸', '射击', '生存', '恐怖']
        },
        {
            id: 'car-racing',
            title: '极品飞车',
            category: 'racing',
            description: '极速赛车游戏！选择豪华跑车，在城市街道上竞速，躲避警察追捕，完成漂移挑战！',
            players: '543,210',
            rating: '4.8',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/car-racing.html',
            tags: ['赛车', '竞速', '漂移', '跑车']
        }
    ],
    
    // 来自2144的热门游戏
    gamesFrom2144: [
        {
            id: 'super-mario',
            title: '超级马里奥',
            category: 'action',
            description: '经典平台跳跃游戏！控制马里奥跳跃、奔跑、收集金币，打败敌人，拯救公主！',
            players: '432,109',
            rating: '4.9',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/super-mario.html',
            tags: ['平台', '跳跃', '经典', '冒险']
        },
        {
            id: 'pacman',
            title: '吃豆人',
            category: 'action',
            description: '街机经典游戏！控制吃豆人吃掉迷宫中的所有豆子，躲避鬼魂追击，吃到能量豆可以反击！',
            players: '321,098',
            rating: '4.7',
            image: 'https://images.unsplash.com/photo-1543423034-f7a69764108a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/pacman.html',
            tags: ['街机', '经典', '迷宫', '怀旧']
        },
        {
            id: 'tetris',
            title: '俄罗斯方块',
            category: 'puzzle',
            description: '全球经典益智游戏！旋转、移动方块，填满整行消除，随着等级提高速度加快，挑战高分！',
            players: '210,987',
            rating: '4.8',
            image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/tetris.html',
            tags: ['益智', '消除', '经典', '全球']
        },
        {
            id: 'street-fighter',
            title: '街头霸王',
            category: 'action',
            description: '格斗游戏经典！选择角色，使用必杀技和连招打败对手，争夺街机格斗冠军！',
            players: '109,876',
            rating: '4.6',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/street-fighter.html',
            tags: ['格斗', '对战', '街机', '必杀技']
        },
        {
            id: 'space-invaders',
            title: '太空侵略者',
            category: 'shooting',
            description: '经典射击游戏！控制激光炮消灭不断下落的太空侵略者，保护地球免受外星入侵！',
            players: '98,765',
            rating: '4.5',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/space-invaders.html',
            tags: ['射击', '经典', '太空', '外星']
        }
    ],
    
    // 来自3366的热门游戏
    gamesFrom3366: [
        {
            id: 'puzzle-bobble',
            title: '泡泡龙',
            category: 'puzzle',
            description: '经典泡泡消除游戏！发射彩色泡泡匹配相同颜色，三个以上消除，清除所有泡泡获胜！',
            players: '87,654',
            rating: '4.7',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/puzzle-bobble.html',
            tags: ['泡泡', '消除', '益智', '经典']
        },
        {
            id: 'super-bomberman',
            title: '超级炸弹人',
            category: 'action',
            description: '迷宫对战游戏！放置炸弹炸开障碍物，收集道具增强能力，在迷宫中打败对手！',
            players: '76,543',
            rating: '4.6',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/super-bomberman.html',
            tags: ['炸弹', '对战', '迷宫', '多人']
        },
        {
            id: 'double-dragon',
            title: '双截龙',
            category: 'action',
            description: '经典横版过关游戏！控制双截龙兄弟，使用拳脚功夫打败敌人，拯救被绑架的女友！',
            players: '65,432',
            rating: '4.5',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/double-dragon.html',
            tags: ['横版', '过关', '格斗', '经典']
        },
        {
            id: 'minesweeper',
            title: '扫雷',
            category: 'puzzle',
            description: '经典逻辑游戏！点击方块避开地雷，数字表示周围地雷数量，推理找出所有安全方块！',
            players: '54,321',
            rating: '4.4',
            image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/minesweeper.html',
            tags: ['扫雷', '逻辑', '益智', '经典']
        },
        {
            id: 'sudoku',
            title: '数独',
            category: 'puzzle',
            description: '数字逻辑游戏！在9x9格子中填入1-9数字，每行每列每个3x3区域不能重复，挑战不同难度！',
            players: '43,210',
            rating: '4.7',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            gameUrl: 'games/sudoku.html',
            tags: ['数独', '数字', '逻辑', '益智']
        }
    ]
};

// 合并所有游戏数据
const getAllGames = () => {
    const allGames = [
        // ...baseGameData.games, // 原有的游戏
        ...newPlatformGames.gamesFrom7k7k,
        ...newPlatformGames.gamesFrom2144,
        ...newPlatformGames.gamesFrom3366
    ];
    
    // 确保ID唯一性
    const uniqueGames = [];
    const seenIds = new Set();
    
    allGames.forEach(game => {
        if (!seenIds.has(game.id)) {
            seenIds.add(game.id);
            uniqueGames.push(game);
        }
    });
    
    return uniqueGames;
};

// 增强的GameUtils
const EnhancedGameUtils = {
    // 获取所有游戏
    getAllGames: getAllGames,
    
    // 根据平台获取游戏
    getGamesByPlatform(platform) {
        switch(platform.toLowerCase()) {
            case '7k7k':
                return newPlatformGames.gamesFrom7k7k;
            case '2144':
                return newPlatformGames.gamesFrom2144;
            case '3366':
                return newPlatformGames.gamesFrom3366;
            default:
                return getAllGames();
        }
    },
    
    // 获取热门游戏
    getHotGames(limit = 12) {
        return [...getAllGames()]
            .sort((a, b) => {
                const aPlayers = parseInt(a.players.replace(/,/g, ''));
                const bPlayers = parseInt(b.players.replace(/,/g, ''));
                return bPlayers - aPlayers;
            })
            .slice(0, limit);
    },
    
    // 获取推荐游戏
    getRecommendedGames(count = 6) {
        const allGames = getAllGames();
        const shuffled = [...allGames].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },
    
    // 获取最新游戏
    getNewGames(limit = 8) {
        return getAllGames().slice(-limit);
    },
    
    // 搜索游戏
    searchGames(query) {
        const lowerQuery = query.toLowerCase();
        return getAllGames().filter(game => 
            game.title.toLowerCase().includes(lowerQuery) ||
            game.description.toLowerCase().includes(lowerQuery) ||
            (game.tags && game.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
        );
    },
    
    // 获取游戏统计
    getGameStats() {
        const allGames = getAllGames();
        const stats = {
            totalGames: allGames.length,
            gamesByCategory: {},
            gamesByPlatform: {
                '7k7k': newPlatformGames.gamesFrom7k7k.length,
                '2144': newPlatformGames.gamesFrom2144.length,
                '3366': newPlatformGames.gamesFrom3366.length
            },
            totalPlayers: 0,
            averageRating: 0,
            topRatedGame: null
        };
        
        // 初始化分类统计
        const categories = ['action', 'puzzle', 'shooting', 'racing', 'casual', 'sports', 'board', 'strategy'];
        categories.forEach(category => {
            stats.gamesByCategory[category] = 0;
        });
        
        // 统计数据
        let maxRating = 0;
        allGames.forEach(game => {
            // 分类统计
            if (stats.gamesByCategory[game.category] !== undefined) {
                stats.gamesByCategory[game.category]++;
            }
            
            // 总玩家数
            stats.totalPlayers += parseInt(game.players.replace(/,/g, ''));
            
            // 平均评分
            const rating = parseFloat(game.rating);
            stats.averageRating += rating;
            
            // 最高评分游戏
            if (rating > maxRating) {
                maxRating = rating;
                stats.topRatedGame = game;
            }
        });
        
        stats.averageRating = (stats.averageRating / allGames.length).toFixed(1);
        
        return stats;
    },
    
    // 生成游戏报告
    generateGameReport() {
        const stats = this.getGameStats();
        let report = `📊 意念科技游戏世界 - 游戏统计报告\n`;
        report += `生成时间：${new Date().toLocaleString('zh-CN')}\n\n`;
        
        report += `🎮 总体统计\n`;
        report += `总游戏数量：${stats.totalGames} 款\n`;
        report += `总游玩人数：${stats.totalPlayers.toLocaleString('zh-CN')} 人\n`;
        report += `平均评分：${stats.averageRating} ⭐\n\n`;
        
        report += `🏷️ 分类统计\n`;
        Object.entries(stats.gamesByCategory).forEach(([category, count]) => {
            if (count > 0) {
                const categoryMap = {
                    'action': '动作游戏',
                    'puzzle': '益智游戏',
                    'shooting': '射击游戏',
                    'racing': '赛车游戏',
                    'casual': '休闲游戏',
                    'sports': '体育游戏',
                    'board': '棋牌游戏',
                    'strategy': '策略游戏'
                };
                report += `${categoryMap[category] || category}: ${count} 款\n`;
            }
        });
        
        report += `\n🖥️ 平台来源\n`;
        Object.entries(stats.gamesByPlatform).forEach(([platform, count]) => {
            report += `${platform.toUpperCase()}: ${count} 款游戏\n`;
        });
        
        report += `\n🏆 顶级游戏\n`;
        if (stats.topRatedGame) {
            report += `最高评分：${stats.topRatedGame.title} - ${stats.topRatedGame.rating} ⭐\n`;
        }
        
        const hotGames = this.getHotGames(3);
        if (hotGames.length > 0) {
            report += `热门游戏：\n`;
            hotGames.forEach((game, index) => {
                report += `  ${index + 1}. ${game.title} (${game.players} 玩家)\n`;
            });
        }
        
        return report;
    }
};

// 初始化游戏数据
const GameManager = {
    initialized: false,
    
    init() {
        if (this.initialized) return;
        
        console.log('游戏管理器初始化...');
        console.log('已加载游戏数量：', getAllGames().length);
        console.log('游戏统计：', EnhancedGameUtils.getGameStats());
        
        this.initialized = true;
        
        // 触发游戏加载完成事件
        document.dispatchEvent(new CustomEvent('gamesLoaded', {
            detail: { gameCount: getAllGames().length }
        }));
    },
    
    // 获取游戏显示模板
    createGameCard(game) {
        return `
            <div class="game-card" data-game-id="${game.id}" data-category="${game.category}">
                <div class="game-image">
                    <img src="${game.image}" alt="${game.title}" loading="lazy">
                    <div class="game-overlay">
                        <button class="btn-quick-play" data-game-id="${game.id}">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <div class="game-meta">
                        <span class="game-rating">
                            <i class="fas fa-star"></i> ${game.rating}
                        </span>
                        <span class="game-players">
                            <i class="fas fa-users"></i> ${game.players}
                        </span>
                        <span class="game-category">${game.category}</span>
                    </div>
                    <p class="game-description">${game.description}</p>
                    <div class="game-actions">
                        <button class="btn-play" data-game-id="${game.id}">
                            <i class="fas fa-play-circle"></i> 立即游玩
                        </button>
                        <button class="btn-favorite" data-game-id="${game.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },
    
    // 批量显示游戏
    displayGames(containerId, games) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        games.forEach(game => {
            const gameCard = this.createGameCard(game);
            container.insertAdjacentHTML('beforeend', gameCard);
        });
        
        // 绑定事件
        this.bindGameEvents();
    },
    
    // 绑定游戏事件
    bindGameEvents() {
        document.querySelectorAll('.btn-play').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const gameId = e.currentTarget.dataset.gameId;
                this.openGame(gameId);
            });
        });
    },
    
    // 打开游戏
    openGame(gameId) {
        const game = getAllGames().find(g => g.id === gameId);
        if (!game) {
            console.error('游戏不存在：', gameId);
            return;
        }
        
        // 这里可以打开游戏模态框或直接跳转到游戏页面
        console.log('打开游戏：', game.title);
        alert(`即将打开游戏：${game.title}\n游戏URL：${game.gameUrl}`);
        
        // 实际开发中可以：
        // window.location.href = game.gameUrl;
        // 或打开游戏模态框
    },
    
    // 搜索游戏
    searchAndDisplay(query) {
        const results = EnhancedGameUtils.searchGames(query);
        this.displayGames('searchResults', results);
    }
};

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    GameManager.init();
});

// 导出
window.GameManager = GameManager;
window.EnhancedGameUtils = EnhancedGameUtils;
window.getAllGames = getAllGames;

console.log('增强版游戏数据系统已加载');