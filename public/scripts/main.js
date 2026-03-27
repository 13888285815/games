// 主JavaScript文件 - 处理页面交互和游戏数据

// 游戏数据
const gameData = {
    categories: {
        action: { name: '动作游戏', icon: 'fa-running', color: '#FF6B6B' },
        puzzle: { name: '益智游戏', icon: 'fa-puzzle-piece', color: '#4ECDC4' },
        shooting: { name: '射击游戏', icon: 'fa-crosshairs', color: '#45B7D1' },
        racing: { name: '赛车游戏', icon: 'fa-car', color: '#96CEB4' },
        casual: { name: '休闲游戏', icon: 'fa-magic', color: '#FFEAA7' },
        sports: { name: '体育游戏', icon: 'fa-futbol', color: '#DDA0DD' },
        board: { name: '棋牌游戏', icon: 'fa-chess', color: '#98D8C8' },
        strategy: { name: '策略游戏', icon: 'fa-chess-board', color: '#F7DC6F' }
    },
    
    games: [
        {
            id: 'gold-miner',
            title: '黄金矿工',
            category: 'action',
            description: '经典挖矿游戏，在有限时间内挖到足够的金子！控制钩子抓取金子、钻石和各种宝物，避开石头等障碍物。',
            players: '1,234,567',
            rating: '4.8',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/gold-miner.html'
        },
        {
            id: 'fireboy-watergirl',
            title: '森林冰火人',
            category: 'action',
            description: '双人合作闯关游戏！控制火男孩和冰女孩穿越森林神殿，利用各自的元素能力解决谜题。',
            players: '987,654',
            rating: '4.9',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/fireboy-watergirl.html'
        },
        {
            id: 'angry-birds',
            title: '愤怒的小鸟',
            category: 'casual',
            description: '经典弹弓射击游戏！用弹弓发射小鸟，摧毁猪猪的堡垒，夺回被偷走的鸟蛋。',
            players: '2,345,678',
            rating: '4.7',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/angry-birds.html'
        },
        {
            id: 'tetris',
            title: '俄罗斯方块',
            category: 'puzzle',
            description: '经典益智游戏！移动、旋转和落下各种方块，填满整行消除得分，挑战你的反应速度。',
            players: '1,876,543',
            rating: '4.6',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/tetris.html'
        },
        {
            id: 'car-racing',
            title: '极品飞车',
            category: 'racing',
            description: '刺激的赛车游戏！选择你的爱车，在不同赛道上漂移、加速，成为最快的赛车手。',
            players: '765,432',
            rating: '4.5',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/car-racing.html'
        },
        {
            id: 'zombie-shooter',
            title: '僵尸射击',
            category: 'shooting',
            description: '末日生存射击游戏！面对不断涌来的僵尸，升级武器，建立防御，生存到最后。',
            players: '543,210',
            rating: '4.4',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/zombie-shooter.html'
        },
        {
            id: 'basketball',
            title: '街头篮球',
            category: 'sports',
            description: '街头篮球比赛！投篮、扣篮、过人，在街头球场展现你的篮球技巧。',
            players: '432,109',
            rating: '4.3',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/basketball.html'
        },
        {
            id: 'chess',
            title: '国际象棋',
            category: 'board',
            description: '经典国际象棋游戏！与AI对战，提高你的象棋技巧，挑战更高难度。',
            players: '321,098',
            rating: '4.2',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
            gameUrl: 'games/chess.html'
        }
    ]
};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化游戏数据
    loadGames();
    loadRanking();
    
    // 轮播图控制
    initCarousel();
    
    // 事件监听
    setupEventListeners();
    
    // 搜索功能
    setupSearch();
    
    // 分类点击事件
    setupCategoryClick();
});

// 加载游戏到页面
function loadGames() {
    const hotGamesContainer = document.getElementById('hotGames');
    const newGamesContainer = document.getElementById('newGames');
    
    // 清空容器
    hotGamesContainer.innerHTML = '';
    newGamesContainer.innerHTML = '';
    
    // 获取热门游戏（前6个）
    const hotGames = gameData.games.slice(0, 6);
    const newGames = [...gameData.games].reverse().slice(0, 6);
    
    // 渲染热门游戏
    hotGames.forEach(game => {
        hotGamesContainer.appendChild(createGameCard(game));
    });
    
    // 渲染最新游戏
    newGames.forEach(game => {
        newGamesContainer.appendChild(createGameCard(game));
    });
}

// 创建游戏卡片
function createGameCard(game) {
    const category = gameData.categories[game.category];
    
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.gameId = game.id;
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" class="game-img">
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <div class="game-meta">
                <span class="game-category">${category.name}</span>
                <div class="game-rating">
                    ${getStarRating(game.rating)}
                </div>
            </div>
            <p class="game-players">${game.players} 人在玩</p>
            <p class="game-description">${game.description.substring(0, 50)}...</p>
        </div>
    `;
    
    // 添加点击事件
    card.addEventListener('click', () => {
        openGameModal(game);
    });
    
    return card;
}

// 获取星级评分HTML
function getStarRating(rating) {
    const num = parseFloat(rating);
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(num)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= num) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars + ` <span>${rating}</span>`;
}

// 加载排行榜
function loadRanking() {
    const rankingBody = document.getElementById('rankingBody');
    rankingBody.innerHTML = '';
    
    // 按照游玩人数排序
    const sortedGames = [...gameData.games].sort((a, b) => {
        const aPlayers = parseInt(a.players.replace(/,/g, ''));
        const bPlayers = parseInt(b.players.replace(/,/g, ''));
        return bPlayers - aPlayers;
    });
    
    // 渲染前10名
    sortedGames.slice(0, 10).forEach((game, index) => {
        const category = gameData.categories[game.category];
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${game.title}</strong></td>
            <td>${category.name}</td>
            <td>${Math.floor(Math.random() * 10000).toLocaleString()}</td>
            <td>${game.players}</td>
        `;
        
        rankingBody.appendChild(row);
    });
}

// 初始化轮播图
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentSlide = 0;
    
    // 显示第一张幻灯片
    showSlide(currentSlide);
    
    // 上一张按钮
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    // 下一张按钮
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    // 自动轮播
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

// 显示特定幻灯片
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// 打开游戏模态框
function openGameModal(game) {
    const modal = document.getElementById('gameModal');
    const category = gameData.categories[game.category];
    
    // 填充游戏信息
    document.getElementById('modalGameImg').src = game.image;
    document.getElementById('modalGameImg').alt = game.title;
    document.getElementById('modalGameTitle').textContent = game.title;
    document.getElementById('modalGameCategory').textContent = category.name;
    document.getElementById('modalGamePlayers').textContent = `${game.players} 人在玩`;
    document.getElementById('modalGameRating').innerHTML = getStarRating(game.rating);
    document.getElementById('modalGameDescription').textContent = game.description;
    
    // 设置游玩按钮事件
    const playBtn = document.getElementById('playGameBtn');
    playBtn.onclick = () => loadGame(game.id);
    
    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 添加关闭事件
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// 加载游戏
function loadGame(gameId) {
    const gameContainer = document.getElementById('gameContainer');
    const game = gameData.games.find(g => g.id === gameId);
    
    // 显示加载中状态
    gameContainer.innerHTML = `
        <div class="game-placeholder">
            <i class="fas fa-spinner fa-spin"></i>
            <h3>正在加载游戏...</h3>
            <p>请稍候，游戏即将开始</p>
        </div>
    `;
    
    // 模拟游戏加载延迟
    setTimeout(() => {
        // 这里应该加载实际的游戏
        // 目前我们创建一个简单的游戏演示
        gameContainer.innerHTML = createGameDemo(gameId);
        
        // 设置游戏控制
        setupGameControls();
    }, 1500);
}

// 创建游戏演示
function createGameDemo(gameId) {
    switch(gameId) {
        case 'gold-miner':
            return `
                <canvas id="gameCanvas" width="800" height="500"></canvas>
                <script>
                    // 这里应该加载实际的黄金矿工游戏
                    const canvas = document.getElementById('gameCanvas');
                    const ctx = canvas.getContext('2d');
                    
                    // 简单的黄金矿工演示
                    ctx.fillStyle = '#8B4513';
                    ctx.fillRect(0, 400, 800, 100); // 地面
                    
                    ctx.fillStyle = '#FFD700';
                    ctx.beginPath();
                    ctx.arc(400, 200, 50, 0, Math.PI * 2); // 金子
                    ctx.fill();
                    
                    ctx.fillStyle = '#000';
                    ctx.font = '20px Arial';
                    ctx.fillText('黄金矿工游戏演示', 300, 250);
                    ctx.fillText('使用方向键或鼠标控制钩子', 280, 280);
                </script>
            `;
        case 'tetris':
            return `
                <div style="text-align: center; padding: 20px;">
                    <canvas id="tetrisCanvas" width="300" height="600"></canvas>
                    <p style="margin-top: 20px;">俄罗斯方块游戏演示</p>
                    <p>使用方向键移动和旋转方块</p>
                </div>
            `;
        case 'angry-birds':
            return `
                <div style="text-align: center; padding: 20px;">
                    <canvas id="angryCanvas" width="600" height="400"></canvas>
                    <p style="margin-top: 20px;">愤怒的小鸟游戏演示</p>
                    <p>点击并拖动小鸟发射</p>
                </div>
            `;
        default:
            return `
                <div class="game-placeholder">
                    <i class="fas fa-gamepad"></i>
                    <h3>${gameId} 游戏演示</h3>
                    <p>这是一个演示游戏，实际游戏中可以游玩完整版本</p>
                    <button class="btn-play" onclick="alert('游戏开始！')">开始游戏</button>
                </div>
            `;
    }
}

// 设置游戏控制
function setupGameControls() {
    const fullscreenBtn = document.querySelector('.btn-fullscreen');
    const restartBtn = document.querySelector('.btn-restart');
    const soundBtn = document.querySelector('.btn-sound');
    
    if (fullscreenBtn) {
        fullscreenBtn.onclick = toggleFullscreen;
    }
    
    if (restartBtn) {
        restartBtn.onclick = () => {
            if (confirm('确定要重新开始游戏吗？')) {
                const currentGame = document.querySelector('.modal-content').dataset.gameId;
                if (currentGame) {
                    loadGame(currentGame);
                }
            }
        };
    }
    
    if (soundBtn) {
        let soundOn = true;
        soundBtn.onclick = () => {
            soundOn = !soundOn;
            soundBtn.innerHTML = `<i class="fas fa-volume-${soundOn ? 'up' : 'mute'}"></i> 音效`;
            alert(`音效已${soundOn ? '开启' : '关闭'}`);
        };
    }
}

// 全屏切换
function toggleFullscreen() {
    const gameContainer = document.getElementById('gameContainer');
    
    if (!document.fullscreenElement) {
        if (gameContainer.requestFullscreen) {
            gameContainer.requestFullscreen();
        } else if (gameContainer.webkitRequestFullscreen) {
            gameContainer.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 登录/注册按钮
    document.querySelector('.btn-login').addEventListener('click', () => {
        alert('登录功能正在开发中...');
    });
    
    document.querySelector('.btn-register').addEventListener('click', () => {
        alert('注册功能正在开发中...');
    });
    
    // 收藏按钮
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-favorite')) {
            const btn = e.target.closest('.btn-favorite');
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                btn.innerHTML = '<i class="fas fa-heart"></i> 已收藏';
                alert('游戏已添加到收藏夹！');
            } else {
                btn.innerHTML = '<i class="far fa-heart"></i> 收藏';
                alert('游戏已从收藏夹移除！');
            }
        }
    });
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;
        
        const results = gameData.games.filter(game => 
            game.title.toLowerCase().includes(query) ||
            game.description.toLowerCase().includes(query) ||
            gameData.categories[game.category].name.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            alert(`找到 ${results.length} 个相关游戏：\n${results.map(g => g.title).join(', ')}`);
            // 这里可以跳转到搜索结果页面或过滤显示
        } else {
            alert('抱歉，没有找到相关的游戏。');
        }
    }
}

// 设置分类点击事件
function setupCategoryClick() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category && gameData.categories[category]) {
                const categoryName = gameData.categories[category].name;
                const gamesInCategory = gameData.games.filter(game => game.category === category);
                
                alert(`${categoryName}分类有 ${gamesInCategory.length} 个游戏：\n${gamesInCategory.map(g => g.title).join(', ')}`);
                // 这里可以跳转到分类页面或过滤显示该分类的游戏
            }
        });
    });
}

// 窗口大小调整时重新计算布局
window.addEventListener('resize', () => {
    // 可以根据需要添加响应式调整
});