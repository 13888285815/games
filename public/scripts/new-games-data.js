/**
 * 7k7k、2144、3366小游戏数据
 * 新增来自其他平台的经典游戏
 */

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
    ],
    
    // 新增分类推荐
    categoryRecommendations: {
        action: {
            topGames: ['fireboy-watergirl', 'super-mario', 'double-dragon'],
            description: '动作游戏推荐：合作冒险、平台跳跃、格斗对战'
        },
        puzzle: {
            topGames: ['angry-birds', 'tetris', 'puzzle-bobble'],
            description: '益智游戏推荐：物理解谜、方块消除、泡泡消除'
        },
        shooting: {
            topGames: ['zombie-shooter', 'space-invaders'],
            description: '射击游戏推荐：僵尸生存、太空防御'
        },
        racing: {
            topGames: ['car-racing'],
            description: '赛车游戏推荐：极速漂移、警匪追逐'
        },
        casual: {
            topGames: ['gold-miner'],
            description: '休闲游戏推荐：挖矿经营、轻松解压'
        }
    },
    
    // 平台特色分类
    platformCategories: {
        '7k7k': ['fireboy-watergirl', 'gold-miner', 'angry-birds'],
        '2144': ['super-mario', 'pacman', 'tetris'],
        '3366': ['puzzle-bobble', 'super-bomberman', 'minesweeper']
    }
};

// 合并所有游戏数据
const getAllNewGames = () => {
    const allGames = [
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

// 获取平台特定游戏
const getGamesByPlatform = (platform) => {
    switch(platform.toLowerCase()) {
        case '7k7k':
            return newPlatformGames.gamesFrom7k7k;
        case '2144':
            return newPlatformGames.gamesFrom2144;
        case '3366':
            return newPlatformGames.gamesFrom3366;
        default:
            return [];
    }
};

// 获取推荐游戏
const getRecommendedGames = (count = 5) => {
    const allGames = getAllNewGames();
    const shuffled = [...allGames].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// 获取热门游戏（按评分和玩家数）
const getHotNewGames = (limit = 10) => {
    const allGames = getAllNewGames();
    return [...allGames]
        .sort((a, b) => {
            // 按评分和玩家数的综合排序
            const aScore = parseFloat(a.rating) * 0.7 + 
                         (parseInt(a.players.replace(/,/g, '')) / 1000000) * 0.3;
            const bScore = parseFloat(b.rating) * 0.7 + 
                         (parseInt(b.players.replace(/,/g, '')) / 1000000) * 0.3;
            return bScore - aScore;
        })
        .slice(0, limit);
};

// 游戏统计
const getNewGamesStats = () => {
    const allGames = getAllNewGames();
    const stats = {
        totalGames: allGames.length,
        gamesByPlatform: {
            '7k7k': newPlatformGames.gamesFrom7k7k.length,
            '2144': newPlatformGames.gamesFrom2144.length,
            '3366': newPlatformGames.gamesFrom3366.length
        },
        gamesByCategory: {},
        totalPlayers: 0,
        averageRating: 0
    };
    
    // 按分类统计
    allGames.forEach(game => {
        if (!stats.gamesByCategory[game.category]) {
            stats.gamesByCategory[game.category] = 0;
        }
        stats.gamesByCategory[game.category]++;
        
        stats.totalPlayers += parseInt(game.players.replace(/,/g, ''));
        stats.averageRating += parseFloat(game.rating);
    });
    
    stats.averageRating = stats.averageRating / stats.totalGames;
    
    return stats;
};

// 导出功能
window.NewPlatformGames = newPlatformGames;
window.getAllNewGames = getAllNewGames;
window.getGamesByPlatform = getGamesByPlatform;
window.getRecommendedGames = getRecommendedGames;
window.getHotNewGames = getHotNewGames;
window.getNewGamesStats = getNewGamesStats;

console.log('新平台游戏数据已加载，包含', getAllNewGames().length, '款新游戏');