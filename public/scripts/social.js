/**
 * 社交分享和浏览器集成模块
 * 支持Web Share API和传统分享方式
 */

class SocialShare {
    constructor() {
        this.supported = 'share' in navigator;
        this.init();
    }
    
    init() {
        this.setupShareButtons();
        this.setupBrowserIntegration();
        this.setupGameSharing();
    }
    
    setupShareButtons() {
        // 为所有分享按钮添加事件监听
        document.querySelectorAll('[data-share]').forEach(button => {
            button.addEventListener('click', (e) => {
                const shareType = button.getAttribute('data-share');
                this.handleShare(shareType, button);
            });
        });
    }
    
    setupBrowserIntegration() {
        // 浏览器特性检测
        this.browserFeatures = {
            share: 'share' in navigator,
            clipboard: 'clipboard' in navigator,
            bluetooth: 'bluetooth' in navigator,
            usb: 'usb' in navigator,
            nfc: 'nfc' in navigator,
            presentation: 'presentation' in navigator
        };
        
        // 更新浏览器状态
        this.updateBrowserStatus();
        
        // 监听浏览器特性变化
        if (this.browserFeatures.clipboard) {
            navigator.clipboard.addEventListener('clipboardchange', () => {
                console.log('剪贴板内容已更改');
            });
        }
    }
    
    setupGameSharing() {
        // 游戏特定分享功能
        this.gameShareTemplates = {
            score: {
                default: '我在4399游戏世界获得了{score}分！快来挑战吧！',
                zh: '我在4399游戏世界获得了{score}分！快来挑战吧！',
                en: 'I scored {score} points in 4399 Game World! Come and challenge me!',
                fr: 'J\'ai obtenu {score} points dans le Monde des Jeux 4399 ! Venez me défier !',
                de: 'Ich habe {score} Punkte in 4399 Spielwelt erreicht! Komm und fordere mich heraus!',
                ja: '4399ゲームワールドで{score}点を獲得しました！挑戦してください！',
                ar: 'حصلت على {score} نقطة في عالم الألعاب 4399! تعال وتحداني!'
            },
            achievement: {
                default: '我在4399游戏世界解锁了成就"{achievement}"！',
                zh: '我在4399游戏世界解锁了成就"{achievement}"！',
                en: 'I unlocked the achievement "{achievement}" in 4399 Game World!',
                fr: 'J\'ai débloqué l\'accomplissement "{achievement}" dans le Monde des Jeux 4399 !',
                de: 'Ich habe die Errungenschaft "{achievement}" in 4399 Spielwelt freigeschaltet!',
                ja: '4399ゲームワールドで実績"{achievement}"を解除しました！',
                ar: 'فككت الإنجاز "{achievement}" في عالم الألعاب 4399!'
            },
            game: {
                default: '我在玩{game}，非常好玩！你也来试试吧！',
                zh: '我在玩{game}，非常好玩！你也来试试吧！',
                en: 'I\'m playing {game}, it\'s so fun! You should try it too!',
                fr: 'Je joue à {game}, c\'est tellement amusant ! Tu devrais essayer aussi !',
                de: 'Ich spiele {game}, es macht so viel Spaß! Du solltest es auch ausprobieren!',
                ja: '私は{game}をプレイしています、とても楽しいです！あなたも試してみてください！',
                ar: 'أنا ألعب {game}، إنه ممتع جدًا! يجب أن تجربه أيضًا!'
            }
        };
    }
    
    async handleShare(type, element) {
        const shareData = await this.prepareShareData(type, element);
        
        if (this.supported && shareData) {
            try {
                await navigator.share(shareData);
                this.showToast('分享成功！');
            } catch (error) {
                console.log('分享取消或失败:', error);
                if (error.name !== 'AbortError') {
                    this.fallbackShare(shareData);
                }
            }
        } else {
            this.fallbackShare(shareData);
        }
    }
    
    async prepareShareData(type, element) {
        const pageUrl = window.location.href;
        const pageTitle = document.title;
        
        switch(type) {
            case 'page':
                return {
                    title: pageTitle,
                    text: '看看这个好玩的游戏网站！',
                    url: pageUrl
                };
                
            case 'game': {
                const gameElement = element.closest('[data-game]');
                if (gameElement) {
                    const gameId = gameElement.getAttribute('data-game');
                    const gameTitle = gameElement.getAttribute('data-game-title') || '这个游戏';
                    const currentLang = window.LanguageManager?.currentLanguage || 'zh-CN';
                    
                    const template = this.gameShareTemplates.game[currentLang] || 
                                    this.gameShareTemplates.game.default;
                    const text = template.replace('{game}', gameTitle);
                    
                    return {
                        title: `${gameTitle} - 4399游戏世界`,
                        text: text,
                        url: `${pageUrl}?game=${gameId}`
                    };
                }
                break;
            }
                
            case 'score': {
                const score = element.getAttribute('data-score');
                const game = element.getAttribute('data-game') || '游戏';
                const currentLang = window.LanguageManager?.currentLanguage || 'zh-CN';
                
                const template = this.gameShareTemplates.score[currentLang] || 
                                this.gameShareTemplates.score.default;
                const text = template.replace('{score}', score);
                
                return {
                    title: `我在${game}中获得了${score}分！`,
                    text: text,
                    url: pageUrl
                };
            }
                
            case 'achievement': {
                const achievement = element.getAttribute('data-achievement');
                const currentLang = window.LanguageManager?.currentLanguage || 'zh-CN';
                
                const template = this.gameShareTemplates.achievement[currentLang] || 
                                this.gameShareTemplates.achievement.default;
                const text = template.replace('{achievement}', achievement);
                
                return {
                    title: `成就解锁：${achievement}`,
                    text: text,
                    url: pageUrl
                };
            }
                
            default:
                return {
                    title: pageTitle,
                    text: '分享4399游戏世界',
                    url: pageUrl
                };
        }
    }
    
    fallbackShare(shareData) {
        if (!shareData) return;
        
        // 创建分享面板
        const sharePanel = this.createSharePanel(shareData);
        document.body.appendChild(sharePanel);
        
        // 显示分享面板
        setTimeout(() => {
            sharePanel.classList.add('active');
        }, 10);
    }
    
    createSharePanel(shareData) {
        const panel = document.createElement('div');
        panel.className = 'share-panel';
        panel.innerHTML = `
            <div class="share-panel-content">
                <div class="share-panel-header">
                    <h3>分享到</h3>
                    <button class="share-panel-close">&times;</button>
                </div>
                <div class="share-options">
                    <button class="share-option" data-action="copy">
                        <i class="fas fa-copy"></i>
                        <span>复制链接</span>
                    </button>
                    <button class="share-option" data-action="whatsapp">
                        <i class="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </button>
                    <button class="share-option" data-action="facebook">
                        <i class="fab fa-facebook"></i>
                        <span>Facebook</span>
                    </button>
                    <button class="share-option" data-action="twitter">
                        <i class="fab fa-twitter"></i>
                        <span>Twitter</span>
                    </button>
                    <button class="share-option" data-action="wechat">
                        <i class="fab fa-weixin"></i>
                        <span>微信</span>
                    </button>
                    <button class="share-option" data-action="qq">
                        <i class="fab fa-qq"></i>
                        <span>QQ</span>
                    </button>
                    <button class="share-option" data-action="weibo">
                        <i class="fab fa-weibo"></i>
                        <span>微博</span>
                    </button>
                    <button class="share-option" data-action="telegram">
                        <i class="fab fa-telegram"></i>
                        <span>Telegram</span>
                    </button>
                    <button class="share-option" data-action="email">
                        <i class="fas fa-envelope"></i>
                        <span>邮件</span>
                    </button>
                </div>
                <div class="share-preview">
                    <input type="text" readonly value="${shareData.url}">
                </div>
            </div>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .share-panel {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            .share-panel.active {
                opacity: 1;
            }
            
            .share-panel-content {
                background: white;
                border-radius: 20px;
                padding: 20px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            }
            
            .share-panel-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 1px solid #eee;
            }
            
            .share-panel-header h3 {
                margin: 0;
                color: #333;
            }
            
            .share-panel-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
                padding: 5px;
            }
            
            .share-options {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            }
            
            .share-option {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 15px 10px;
                background: #f8f9fa;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .share-option:hover {
                background: #e9ecef;
                transform: translateY(-2px);
            }
            
            .share-option i {
                font-size: 24px;
                margin-bottom: 5px;
            }
            
            .share-option[data-action="whatsapp"] i { color: #25D366; }
            .share-option[data-action="facebook"] i { color: #1877F2; }
            .share-option[data-action="twitter"] i { color: #1DA1F2; }
            .share-option[data-action="wechat"] i { color: #07C160; }
            .share-option[data-action="qq"] i { color: #12B7F5; }
            .share-option[data-action="weibo"] i { color: #DF2029; }
            .share-option[data-action="telegram"] i { color: #0088CC; }
            .share-option[data-action="email"] i { color: #EA4335; }
            .share-option[data-action="copy"] i { color: #6C757D; }
            
            .share-option span {
                font-size: 12px;
                color: #666;
            }
            
            .share-preview input {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 14px;
                background: #f8f9fa;
            }
            
            @media (max-width: 600px) {
                .share-options {
                    grid-template-columns: repeat(3, 1fr);
                }
            }
            
            @media (max-width: 400px) {
                .share-options {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        `;
        document.head.appendChild(style);
        
        // 添加事件监听
        panel.querySelector('.share-panel-close').addEventListener('click', () => {
            panel.classList.remove('active');
            setTimeout(() => panel.remove(), 300);
        });
        
        panel.querySelectorAll('.share-option').forEach(option => {
            option.addEventListener('click', () => {
                const action = option.getAttribute('data-action');
                this.handleShareAction(action, shareData);
                panel.classList.remove('active');
                setTimeout(() => panel.remove(), 300);
            });
        });
        
        // 点击背景关闭
        panel.addEventListener('click', (e) => {
            if (e.target === panel) {
                panel.classList.remove('active');
                setTimeout(() => panel.remove(), 300);
            }
        });
        
        return panel;
    }
    
    handleShareAction(action, shareData) {
        const url = encodeURIComponent(shareData.url);
        const text = encodeURIComponent(shareData.text);
        const title = encodeURIComponent(shareData.title);
        
        let shareUrl;
        
        switch(action) {
            case 'copy':
                this.copyToClipboard(shareData.url);
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
                window.open(shareUrl, '_blank');
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                window.open(shareUrl, '_blank');
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                window.open(shareUrl, '_blank');
                break;
            case 'wechat':
                // 微信分享需要特殊处理，这里显示二维码
                this.showWeChatQRCode(shareData.url);
                break;
            case 'qq':
                shareUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&summary=${text}`;
                window.open(shareUrl, '_blank');
                break;
            case 'weibo':
                shareUrl = `https://service.weibo.com/share/share.php?url=${url}&title=${text}`;
                window.open(shareUrl, '_blank');
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
                window.open(shareUrl, '_blank');
                break;
            case 'email':
                shareUrl = `mailto:?subject=${title}&body=${text}%0A%0A${url}`;
                window.location.href = shareUrl;
                break;
        }
    }
    
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast('链接已复制到剪贴板');
        } catch (err) {
            console.error('复制失败:', err);
            
            // 降级方案
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand('copy');
                this.showToast('链接已复制到剪贴板');
            } catch (err2) {
                console.error('降级复制失败:', err2);
                this.showToast('复制失败，请手动复制链接');
            }
            
            document.body.removeChild(textarea);
        }
    }
    
    showWeChatQRCode(url) {
        const qrModal = document.createElement('div');
        qrModal.className = 'qr-modal';
        qrModal.innerHTML = `
            <div class="qr-modal-content">
                <h3>微信分享</h3>
                <p>使用微信扫一扫分享给朋友</p>
                <div class="qr-code-placeholder">
                    <i class="fas fa-qrcode"></i>
                    <p>二维码生成中...</p>
                </div>
                <button class="qr-modal-close">关闭</button>
            </div>
        `;
        
        document.body.appendChild(qrModal);
        
        // 这里可以集成二维码生成库
        // 示例：https://github.com/davidshimjs/qrcodejs
        
        qrModal.querySelector('.qr-modal-close').addEventListener('click', () => {
            qrModal.remove();
        });
    }
    
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'share-toast';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
        
        // 添加样式
        if (!document.querySelector('#toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                .share-toast {
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #333;
                    color: white;
                    padding: 12px 24px;
                    border-radius: 25px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    z-index: 10001;
                    opacity: 0;
                    transition: opacity 0.3s, transform 0.3s;
                }
                
                .share-toast.show {
                    opacity: 1;
                    transform: translateX(-50%) translateY(-10px);
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    updateBrowserStatus() {
        console.log('浏览器功能支持:', this.browserFeatures);
        
        // 根据浏览器功能调整界面
        if (!this.browserFeatures.share) {
            console.log('浏览器不支持原生分享API，使用降级方案');
        }
        
        if (!this.browserFeatures.clipboard) {
            console.log('浏览器不支持剪贴板API');
        }
    }
    
    // 游戏内分享功能
    shareGameScore(gameName, score) {
        const shareData = {
            title: `我在${gameName}中获得了${score}分！`,
            text: `我在4399游戏世界的${gameName}游戏中获得了${score}分！你也来挑战吧！`,
            url: window.location.href
        };
        
        return this.share(shareData);
    }
    
    shareAchievement(achievementName) {
        const shareData = {
            title: `成就解锁：${achievementName}`,
            text: `我在4399游戏世界解锁了成就"${achievementName}"！`,
            url: window.location.href
        };
        
        return this.share(shareData);
    }
    
    async share(data) {
        if (this.supported) {
            try {
                await navigator.share(data);
                return true;
            } catch (error) {
                console.log('分享失败:', error);
                return false;
            }
        } else {
            this.fallbackShare(data);
            return true;
        }
    }
}

// 创建全局社交分享实例
window.SocialShare = new SocialShare();