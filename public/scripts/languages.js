/**
 * 多语言支持系统
 * 支持语言：中文、英语、法语、德语、日语、阿拉伯语
 */

const translations = {
    // 中文（简体）
    'zh-CN': {
        // 通用
        'siteTitle': '意念科技游戏世界 - 免费在线小游戏大全',
        'siteTagline': '免费在线小游戏大全 - 我的游戏，我做主！',
        'loading': '加载中...',
        'more': '更多',
        'play': '立即游玩',
        'searchPlaceholder': '搜索游戏...',
        'search': '搜索',
        
        // 导航
        'home': '首页',
        'hotGames': '热门游戏',
        'rankings': '排行榜',
        'categories': '分类',
        'puzzle': '益智',
        'action': '动作',
        'shooting': '射击',
        'racing': '赛车',
        'casual': '休闲',
        'sports': '体育',
        'cards': '棋牌',
        'strategy': '策略',
        
        // 按钮
        'login': '登录',
        'register': '注册',
        'logout': '退出',
        'settings': '设置',
        'profile': '个人资料',
        'favorites': '收藏',
        'history': '历史记录',
        
        // 页面标题
        'hotGamesTitle': '热门游戏推荐',
        'categoriesTitle': '游戏分类',
        'newGamesTitle': '最新游戏',
        'recommendationsTitle': '为您推荐',
        
        // 游戏描述
        'gameAction': '格斗、跑酷、冒险',
        'gamePuzzle': '解谜、拼图、策略',
        'gameShooting': '射击、对战、生存',
        'gameRacing': '赛车、竞速、驾驶',
        'gameCasual': '休闲、轻松、娱乐',
        'gameSports': '足球、篮球、运动',
        'gameCards': '扑克、麻将、棋牌',
        'gameStrategy': '策略、战术、经营',
        
        // 其他
        'players': '玩家',
        'rating': '评分',
        'views': '浏览量',
        'lastPlayed': '上次游玩',
        'highScore': '最高分',
        'time': '时间',
        'moves': '移动次数',
        
        // 页脚
        'aboutUs': '关于我们',
        'contact': '联系我们',
        'privacy': '隐私政策',
        'terms': '服务条款',
        'help': '帮助中心',
        'copyright': '版权所有 © 2026 意念科技游戏世界'
    },
    
    // 英语
    'en-US': {
        'siteTitle': 'IdeaTech Game World - Free Online Games Collection',
        'siteTagline': 'Free Online Games Collection - My Games, My Rules!',
        'loading': 'Loading...',
        'more': 'More',
        'play': 'Play Now',
        'searchPlaceholder': 'Search games...',
        'search': 'Search',
        
        // 导航
        'home': 'Home',
        'hotGames': 'Hot Games',
        'rankings': 'Rankings',
        'categories': 'Categories',
        'puzzle': 'Puzzle',
        'action': 'Action',
        'shooting': 'Shooting',
        'racing': 'Racing',
        'casual': 'Casual',
        'sports': 'Sports',
        'cards': 'Cards',
        'strategy': 'Strategy',
        
        // 按钮
        'login': 'Login',
        'register': 'Register',
        'logout': 'Logout',
        'settings': 'Settings',
        'profile': 'Profile',
        'favorites': 'Favorites',
        'history': 'History',
        
        // 页面标题
        'hotGamesTitle': 'Hot Game Recommendations',
        'categoriesTitle': 'Game Categories',
        'newGamesTitle': 'New Games',
        'recommendationsTitle': 'Recommendations For You',
        
        // 游戏描述
        'gameAction': 'Fighting, Parkour, Adventure',
        'gamePuzzle': 'Puzzle, Strategy, Thinking',
        'gameShooting': 'Shooting, Battle, Survival',
        'gameRacing': 'Racing, Speed, Driving',
        'gameCasual': 'Casual, Relaxing, Entertainment',
        'gameSports': 'Football, Basketball, Sports',
        'gameCards': 'Poker, Mahjong, Cards',
        'gameStrategy': 'Strategy, Tactics, Management',
        
        // 其他
        'players': 'Players',
        'rating': 'Rating',
        'views': 'Views',
        'lastPlayed': 'Last Played',
        'highScore': 'High Score',
        'time': 'Time',
        'moves': 'Moves',
        
        // 页脚
        'aboutUs': 'About Us',
        'contact': 'Contact Us',
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service',
        'help': 'Help Center',
        'copyright': 'Copyright © 2026 IdeaTech Game World'
    },
    
    // 法语
    'fr-FR': {
        'siteTitle': 'Monde de Jeux IdeaTech - Collection de Jeux en Ligne Gratuits',
        'siteTagline': 'Collection de Jeux en Ligne Gratuits - Mes Jeux, Mes Règles !',
        'loading': 'Chargement...',
        'more': 'Plus',
        'play': 'Jouer Maintenant',
        'searchPlaceholder': 'Rechercher des jeux...',
        'search': 'Rechercher',
        
        // 导航
        'home': 'Accueil',
        'hotGames': 'Jeux Tendances',
        'rankings': 'Classements',
        'categories': 'Catégories',
        'puzzle': 'Casse-tête',
        'action': 'Action',
        'shooting': 'Tir',
        'racing': 'Course',
        'casual': 'Casuel',
        'sports': 'Sports',
        'cards': 'Cartes',
        'strategy': 'Stratégie',
        
        // 按钮
        'login': 'Connexion',
        'register': 'S\'inscrire',
        'logout': 'Déconnexion',
        'settings': 'Paramètres',
        'profile': 'Profil',
        'favorites': 'Favoris',
        'history': 'Historique',
        
        // 页面标题
        'hotGamesTitle': 'Recommandations de Jeux Tendances',
        'categoriesTitle': 'Catégories de Jeux',
        'newGamesTitle': 'Nouveaux Jeux',
        'recommendationsTitle': 'Recommandations Pour Vous',
        
        // 游戏描述
        'gameAction': 'Combat, Parkour, Aventure',
        'gamePuzzle': 'Casse-tête, Puzzle, Stratégie',
        'gameShooting': 'Tir, Bataille, Survie',
        'gameRacing': 'Course, Vitesse, Conduite',
        'gameCasual': 'Casuel, Relaxant, Divertissement',
        'gameSports': 'Football, Basketball, Sports',
        'gameCards': 'Poker, Mahjong, Cartes',
        'gameStrategy': 'Stratégie, Tactique, Gestion',
        
        // 其他
        'players': 'Joueurs',
        'rating': 'Note',
        'views': 'Vues',
        'lastPlayed': 'Dernière Partie',
        'highScore': 'Meilleur Score',
        'time': 'Temps',
        'moves': 'Mouvements',
        
        // 页脚
        'aboutUs': 'À Propos',
        'contact': 'Nous Contacter',
        'privacy': 'Politique de Confidentialité',
        'terms': 'Conditions d\'Utilisation',
        'help': 'Centre d\'Aide',
        'copyright': 'Copyright © 2026 Monde de Jeux IdeaTech'
    },
    
    // 德语
    'de-DE': {
        'siteTitle': 'IdeaTech Spielewelt - Kostenlose Online-Spiele Sammlung',
        'siteTagline': 'Kostenlose Online-Spiele Sammlung - Meine Spiele, Meine Regeln!',
        'loading': 'Laden...',
        'more': 'Mehr',
        'play': 'Jetzt Spielen',
        'searchPlaceholder': 'Spiele suchen...',
        'search': 'Suchen',
        
        // 导航
        'home': 'Startseite',
        'hotGames': 'Beliebte Spiele',
        'rankings': 'Rangliste',
        'categories': 'Kategorien',
        'puzzle': 'Puzzle',
        'action': 'Action',
        'shooting': 'Schießen',
        'racing': 'Rennen',
        'casual': 'Casual',
        'sports': 'Sport',
        'cards': 'Karten',
        'strategy': 'Strategie',
        
        // 按钮
        'login': 'Anmelden',
        'register': 'Registrieren',
        'logout': 'Abmelden',
        'settings': 'Einstellungen',
        'profile': 'Profil',
        'favorites': 'Favoriten',
        'history': 'Verlauf',
        
        // 页面标题
        'hotGamesTitle': 'Beliebte Spiel-Empfehlungen',
        'categoriesTitle': 'Spielkategorien',
        'newGamesTitle': 'Neue Spiele',
        'recommendationsTitle': 'Empfehlungen für Sie',
        
        // 游戏描述
        'gameAction': 'Kampf, Parkour, Abenteuer',
        'gamePuzzle': 'Puzzle, Strategie, Denken',
        'gameShooting': 'Schießen, Kampf, Überleben',
        'gameRacing': 'Rennen, Geschwindigkeit, Fahren',
        'gameCasual': 'Casual, Entspannend, Unterhaltung',
        'gameSports': 'Fußball, Basketball, Sport',
        'gameCards': 'Poker, Mahjong, Karten',
        'gameStrategy': 'Strategie, Taktik, Management',
        
        // 其他
        'players': 'Spieler',
        'rating': 'Bewertung',
        'views': 'Aufrufe',
        'lastPlayed': 'Zuletzt gespielt',
        'highScore': 'Highscore',
        'time': 'Zeit',
        'moves': 'Züge',
        
        // 页脚
        'aboutUs': 'Über Uns',
        'contact': 'Kontakt',
        'privacy': 'Datenschutz',
        'terms': 'Nutzungsbedingungen',
        'help': 'Hilfe-Center',
        'copyright': 'Copyright © 2026 IdeaTech Spielewelt'
    },
    
    // 日语
    'ja-JP': {
        'siteTitle': 'IdeaTechゲームワールド - 無料オンラインゲームコレクション',
        'siteTagline': '無料オンラインゲームコレクション - 私のゲーム、私のルール！',
        'loading': '読み込み中...',
        'more': 'もっと見る',
        'play': '今すぐプレイ',
        'searchPlaceholder': 'ゲームを検索...',
        'search': '検索',
        
        // 导航
        'home': 'ホーム',
        'hotGames': '人気ゲーム',
        'rankings': 'ランキング',
        'categories': 'カテゴリー',
        'puzzle': 'パズル',
        'action': 'アクション',
        'shooting': 'シューティング',
        'racing': 'レーシング',
        'casual': 'カジュアル',
        'sports': 'スポーツ',
        'cards': 'カード',
        'strategy': 'ストラテジー',
        
        // 按钮
        'login': 'ログイン',
        'register': '登録',
        'logout': 'ログアウト',
        'settings': '設定',
        'profile': 'プロフィール',
        'favorites': 'お気に入り',
        'history': '履歴',
        
        // 页面标题
        'hotGamesTitle': '人気ゲームのおすすめ',
        'categoriesTitle': 'ゲームカテゴリー',
        'newGamesTitle': '新着ゲーム',
        'recommendationsTitle': 'あなたへのおすすめ',
        
        // 游戏描述
        'gameAction': '格闘、パルクール、アドベンチャー',
        'gamePuzzle': 'パズル、戦略、思考',
        'gameShooting': 'シューティング、バトル、サバイバル',
        'gameRacing': 'レース、スピード、ドライビング',
        'gameCasual': 'カジュアル、リラックス、エンターテイメント',
        'gameSports': 'サッカー、バスケットボール、スポーツ',
        'gameCards': 'ポーカー、麻雀、カード',
        'gameStrategy': '戦略、戦術、経営',
        
        // 其他
        'players': 'プレイヤー',
        'rating': '評価',
        'views': '視聴回数',
        'lastPlayed': '前回のプレイ',
        'highScore': 'ハイスコア',
        'time': '時間',
        'moves': '移動回数',
        
        // 页脚
        'aboutUs': '会社概要',
        'contact': 'お問い合わせ',
        'privacy': 'プライバシーポリシー',
        'terms': '利用規約',
        'help': 'ヘルプセンター',
        'copyright': 'Copyright © 2026 IdeaTechゲームワールド'
    },
    
    // 阿拉伯语（从右到左）
    'ar-SA': {
        'siteTitle': 'عالم الألعاب IdeaTech - مجموعة الألعاب الإلكترونية المجانية',
        'siteTagline': 'مجموعة الألعاب الإلكترونية المجانية - ألعابي، قوانيني!',
        'loading': 'جار التحميل...',
        'more': 'المزيد',
        'play': 'العب الآن',
        'searchPlaceholder': 'ابحث عن ألعاب...',
        'search': 'بحث',
        
        // 导航
        'home': 'الصفحة الرئيسية',
        'hotGames': 'الألعاب الشائعة',
        'rankings': 'التصنيفات',
        'categories': 'الفئات',
        'puzzle': 'ألغاز',
        'action': 'أكشن',
        'shooting': 'رماية',
        'racing': 'سباقات',
        'casual': 'عابرة',
        'sports': 'رياضة',
        'cards': 'بطاقات',
        'strategy': 'إستراتيجية',
        
        // 按钮
        'login': 'تسجيل الدخول',
        'register': 'تسجيل',
        'logout': 'تسجيل الخروج',
        'settings': 'الإعدادات',
        'profile': 'الملف الشخصي',
        'favorites': 'المفضلة',
        'history': 'السجل',
        
        // 页面标题
        'hotGamesTitle': 'توصيات الألعاب الشائعة',
        'categoriesTitle': 'فئات الألعاب',
        'newGamesTitle': 'الألعاب الجديدة',
        'recommendationsTitle': 'توصيات لك',
        
        // 游戏描述
        'gameAction': 'قتال، باركور، مغامرة',
        'gamePuzzle': 'ألغاز، إستراتيجية، تفكير',
        'gameShooting': 'رماية، معركة، بقاء',
        'gameRacing': 'سباقات، سرعة، قيادة',
        'gameCasual': 'عابرة، استرخاء، ترفيه',
        'gameSports': 'كرة القدم، كرة السلة، رياضة',
        'gameCards': 'بوكر، ما جونغ، بطاقات',
        'gameStrategy': 'إستراتيجية، تكتيكات، إدارة',
        
        // 其他
        'players': 'لاعبون',
        'rating': 'تقييم',
        'views': 'المشاهدات',
        'lastPlayed': 'آخر مرة لعب',
        'highScore': 'أعلى درجة',
        'time': 'الوقت',
        'moves': 'الحركات',
        
        // 页脚
        'aboutUs': 'من نحن',
        'contact': 'اتصل بنا',
        'privacy': 'سياسة الخصوصية',
        'terms': 'شروط الخدمة',
        'help': 'مركز المساعدة',
        'copyright': 'حقوق الطبع والنشر © 2026 عالم الألعاب IdeaTech'
    }
};

// 语言检测和设置
class LanguageManager {
    constructor() {
        this.currentLanguage = 'zh-CN';
        this.htmlElement = document.documentElement;
        this.init();
    }
    
    init() {
        // 尝试从本地存储获取用户选择的语言
        const savedLanguage = localStorage.getItem('gameLanguage');
        if (savedLanguage && translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else {
            // 根据浏览器语言自动检测
            const browserLang = navigator.language || navigator.userLanguage;
            this.detectLanguage(browserLang);
        }
        
        // 应用当前语言
        this.applyLanguage();
    }
    
    detectLanguage(browserLang) {
        // 简化检测逻辑
        const languageMap = {
            'zh': 'zh-CN',
            'en': 'en-US',
            'fr': 'fr-FR',
            'de': 'de-DE',
            'ja': 'ja-JP',
            'ar': 'ar-SA'
        };
        
        const langPrefix = browserLang.split('-')[0].toLowerCase();
        if (languageMap[langPrefix]) {
            this.currentLanguage = languageMap[langPrefix];
        }
    }
    
    setLanguage(languageCode) {
        if (translations[languageCode]) {
            this.currentLanguage = languageCode;
            localStorage.setItem('gameLanguage', languageCode);
            this.applyLanguage();
            this.updateDirection();
            return true;
        }
        return false;
    }
    
    applyLanguage() {
        // 更新HTML lang属性
        this.htmlElement.lang = this.currentLanguage;
        
        // 对于阿拉伯语，设置从右到左布局
        this.updateDirection();
        
        // 翻译所有带data-i18n属性的元素
        this.translateElements();
        
        // 更新语言选择器UI
        this.updateLanguageSelector();
        
        // 触发自定义事件，让其他组件知道语言已更改
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }
    
    updateDirection() {
        if (this.currentLanguage === 'ar-SA') {
            this.htmlElement.dir = 'rtl';
        } else {
            this.htmlElement.dir = 'ltr';
        }
    }
    
    translateElements() {
        // 查找所有需要翻译的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text' || element.type === 'password') {
                    element.placeholder = translation;
                } else if (element.tagName === 'IMG') {
                    element.alt = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
    
    getTranslation(key) {
        const langDict = translations[this.currentLanguage];
        if (langDict && langDict[key]) {
            return langDict[key];
        }
        // 如果当前语言没有翻译，返回中文翻译
        return translations['zh-CN'][key] || key;
    }
    
    translate(key) {
        return this.getTranslation(key);
    }
    
    updateLanguageSelector() {
        const selector = document.querySelector('.language-selector select');
        if (selector) {
            selector.value = this.currentLanguage;
        }
    }
    
    getAvailableLanguages() {
        return [
            { code: 'zh-CN', name: '中文', nativeName: '简体中文', flag: '🇨🇳' },
            { code: 'en-US', name: 'English', nativeName: 'English', flag: '🇺🇸' },
            { code: 'fr-FR', name: 'Français', nativeName: 'Français', flag: '🇫🇷' },
            { code: 'de-DE', name: 'Deutsch', nativeName: 'Deutsch', flag: '🇩🇪' },
            { code: 'ja-JP', name: '日本語', nativeName: '日本語', flag: '🇯🇵' },
            { code: 'ar-SA', name: 'العربية', nativeName: 'العربية', flag: '🇸🇦' }
        ];
    }
    
    getLanguageInfo(languageCode) {
        const languages = this.getAvailableLanguages();
        return languages.find(lang => lang.code === languageCode);
    }
}

// 创建全局语言管理器实例
window.LanguageManager = new LanguageManager();