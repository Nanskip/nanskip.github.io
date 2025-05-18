document.addEventListener('DOMContentLoaded', function() {
    const loadingTextElement = document.getElementById('loadingText');
    const consoleElement = document.getElementById('console');
    const consoleOutputElement = document.getElementById('consoleOutput');
    const consoleResponseElement = document.getElementById('consoleResponse');
    const consoleInputElement = document.getElementById('consoleInput');
    if (consoleInputElement) {
    consoleInputElement.style.outline = '1px solid #0d0d0d';
    }

    const loadingSteps = [
        'INITIALIZING SYSTEM...',
        'LOADING ASSETS...',
        'CALIBRATING DISPLAY...',
        'ESTABLISHING CONNECTION...',
        'CHECKING MEMORY...',
        'VERIFYING FACE...',
        'FACE NOT FOUND...',
        'SYSTEM READY',
        'CALIBRATION: DONE'
    ];

    let currentStep = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentText = loadingSteps[currentStep];
        
        if (isDeleting) {
            loadingTextElement.textContent = currentText.substring(0, currentChar - 1);
            currentChar--;
            typingSpeed = 50;
        } else {
            loadingTextElement.textContent = currentText.substring(0, currentChar + 1);
            currentChar++;
            typingSpeed = 100;
        }

        if (!isDeleting && currentChar === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentStep = (currentStep + 1) % loadingSteps.length;
            typingSpeed = 500;
        }

        setTimeout(typeText, typingSpeed);
    }

    // Start typing animation
    setTimeout(() => {
        typeText();
        // Hide loader after all steps are complete
        setTimeout(() => {
            document.getElementById('loader').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
            }, 500);
        }, loadingSteps.length * 3000);
    }, 1000);

    // Add hover effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const info = item.querySelector('.gallery-item-info');
            info.style.transform = 'translateY(0)';
            info.style.opacity = '1';
        });

        item.addEventListener('mouseout', () => {
            const info = item.querySelector('.gallery-item-info');
            info.style.transform = 'translateY(100%)';
            info.style.opacity = '0';
        });
    });

    // Add typewriter effect to subtitle
    const subtitle = document.querySelector('.subtitle .typewriter');
    const cursor = document.querySelector('.subtitle .cursor');
    
    if (subtitle && cursor) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let charIndex = 0;

        function typeChar() {
            if (charIndex < text.length) {
                subtitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 100);
        } else {
                cursor.style.animation = 'none';
            }
        }

        setTimeout(typeChar, 1000);
    }

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add terminal-like typing effect to about section
    const aboutContent = document.querySelector('.about-content p');
    if (aboutContent) {
        const text = aboutContent.textContent;
        aboutContent.textContent = '';
        let charIndex = 0;

        function typeAbout() {
            if (charIndex < text.length) {
                aboutContent.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeAbout, 20);
            }
        }

        // Start typing when about section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeAbout();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(aboutContent);
    }

    // Add CRT screen flicker effect
    const crtScreen = document.querySelector('.crt-screen');
    if (crtScreen) {
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance of flicker
                crtScreen.style.opacity = '0.8';
                setTimeout(() => {
                    crtScreen.style.opacity = '1';
                }, 50);
            }
        }, 100);
    }

    const colorSymbols = (text) => {
        // Define colors for different symbols
        const symbolColors = {
            '@': 'black',
            '#': '#133cca',
            'o': 'lightgray',
            '-': 'white',
            '*': 'white',
            '|': 'white',
            '=': 'white',
            '.': 'white',
            ':': '#ffc2ad',
            '&': '#fed929',
            '_': 'white',
            '\\': 'white',
            '/': 'white',
        };

        // Replace each symbol with a span element with the appropriate color
        return text.replace(/[@#o\-\*\|\=.:&_\\\/]/g, (match) => {
            const color = symbolColors[match] || 'inherit';
            return `<span style="color: ${color};">${match}</span>`;
        });
    };

    const displayWelcomeMessage = () => {
        const welcomeMessageArt = 
`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@.====.@@@@@@@.====.@@@@@@@@
@@@@@@o*####o=.=_=.=o&&&&*o@@@@@@@
@@@@@@|#########|&&&&&&&&&|@@@@@@@
@@@@@@|#########|&&&&&&&&&|@@@@@@@
@@.===|#########|&&&&&&&&&|===.@@@
@@|:::|#o*****o#|&o*****o&|:::|@@@
@@|:::|#|:::::|#|=*:::::|&|:::|@@@
@@|:::|#|:::::*=*:::::::|&|:::|@@@
@@*===*#\\_.:::::::::::._/&*===*@@@
@@@@|#####|:::::::::::|&&&&&|@@@@@
@@@@|#####|:::::::::::|&&&&&|@@@@@
@@@@*=====*===========*=====*@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`;

        const welcomeMessageText = `
<span style="color: lightblue;">root@nanskipDEV</span>
<span style="color: lightgray;">---------------</span>
<span style="color: lightblue;">OS: </span><span style="color: lightgray;">IDK OS x14_88</span>
<span style="color: lightblue;">Host: </span><span style="color: lightgray;">chromium</span>
<span style="color: lightblue;">Kernel: </span><span style="color: lightgray;">idkernel-69</span>
<span style="color: lightblue;">Packages: </span><span style="color: lightgray;">0 (it's not an os)</span>
<span style="color: lightblue;">Shell: </span><span style="color: lightgray;">bash 5.0.18</span>
<span style="color: lightblue;">Resolution: </span><span style="color: lightgray;">600x900</span>
<span style="color: lightblue;">Terminal: </span><span style="color: lightgray;">/dev/tmx1</span>
<span style="color: lightblue;">CPU: </span><span style="color: lightgray;">Intel Bebrium 6900U (1) @ 1.488GHz</span>
<span style="color: lightblue;">GPU: </span><span style="color: lightgray;">RTX 5090 Super TI Ultra</span>
<span style="color: lightblue;">Memory: </span><span style="color: lightgray;">2MiB / -256MiB</span>
        `;

        const styledMessageArt = colorSymbols(welcomeMessageArt);

        document.getElementById('asciiArt').innerHTML = styledMessageArt;
        document.getElementById('asciiText').innerHTML = welcomeMessageText;
    };

    if (consoleInputElement) {
    consoleInputElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = consoleInputElement.value.trim();
            consoleInputElement.value = '';
            processCommand(command);
    
            // Scroll to the bottom of the console output
            const lastResponseElement = consoleResponseElement.lastElementChild;
            if (lastResponseElement) {
                lastResponseElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    }
    

    const processCommand = (command) => {
        let response = '';
        switch(command.toLowerCase()) {
            case 'help':
                response =
                `
All available commands:

    <span style="color: white;">help</span> - show this text
    <span style="color: white;">about</span> - about Nanskip
    <span style="color: white;">contact</span> - contact Nanskip
    <span style="color: white;">cubzh</span> - show cubzh website link
    <span style="color: #F6FB75;">fortcubes</span> - show information about Fortcubes game
    <span style="color: white;">hello</span> - greet the user
    <span style="color: white;">bye</span> - don't say it
    <span style="color: white;">amogus</span> - sussy
    <span style="color: white;">sus</span> - sussy too
                `;
                break;
            case 'hello':
                response = 'Hello!';
                break;
            case 'about':
                response = 'This is Nanskip\'s portfolio site. I create games in <a href="https://www.cubzh.com" target="_blank" style="color: lightblue;">cubzh</a>.';
                break;
            case 'contact':
                response = 'You can contact me at nanskip.yt@gmail.com.';
                break;
            case 'amogus':
                response = 'ඞ';
                break;
            case 'sus':
                response = 'ඞඞඞ';
                break;
            case 'bye':
                response = `Don't leave me!`;
                break;
            case 'cubzh':
                response = `Here's link to <a href="https://www.cubzh.com" target="_blank" style="color: lightblue;">cubzh website</a>.`;
                break;
            case 'fortcubes':
                response = `<a href="https://app.cu.bzh/?worldID=0178802d-bbc8-4085-9a5c-12351a98d1b0" target="_blank" style="color: lightblue;">Fortcubes</a> is a fast and funny top-down shooter where players fight each other with different weapons.
More information in <a href="https://discord.gg/cubzh" target="_blank" style="color: lightblue;">Discord</a>.
<a href="https://github.com/sysfab/nsfworks/tree/main/games/fortcubes" target="_blank" style="color: lightblue;">GitHub repository</a> of Fortcubes.
<a href="https://github.com/sysfab/nsfworks" target="_blank" style="color: lightblue;">GitHub repository</a> of NSFWorks team.`;
                break;
            default:
                response = 'Unknown command.';
                break;
        }
        consoleResponseElement.innerHTML += `<div style="color: lightgray">${response}</div>`;
    };

    // Add data-text attribute to all glitch-text elements
    document.querySelectorAll('.glitch-text').forEach(element => {
        element.setAttribute('data-text', element.textContent);
    });

    // Add typing effect to skill bars
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // Add hover effect to work items
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.borderColor = 'var(--primary-color)';
            item.style.boxShadow = '0 0 10px var(--primary-color)';
        });

        item.addEventListener('mouseout', () => {
            item.style.borderColor = 'var(--terminal-border)';
            item.style.boxShadow = 'none';
        });
    });

    // Add hover effect to game items
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.borderColor = 'var(--primary-color)';
            item.style.boxShadow = '0 0 10px var(--primary-color)';
        });

        item.addEventListener('mouseout', () => {
            item.style.borderColor = 'var(--terminal-border)';
            item.style.boxShadow = 'none';
        });
    });

    // Add typing effect to contact values
    const contactValues = document.querySelectorAll('.contact-value');
    contactValues.forEach(value => {
        const text = value.textContent;
        value.textContent = '';
        let charIndex = 0;

        function typeContact() {
            if (charIndex < text.length) {
                value.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeContact, 50);
            }
        }

        // Start typing when contact section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeContact();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(value);
    });

    // Add scanline effect
    const scanlines = document.querySelector('.scanlines');
    if (scanlines) {
        let offset = 0;
        function updateScanlines() {
            offset = (offset + 1) % 4;
            scanlines.style.backgroundPosition = `0 ${offset}px`;
            requestAnimationFrame(updateScanlines);
        }
        updateScanlines();
    }

    // Add noise effect
    const noise = document.querySelector('.noise');
    if (noise) {
        let noiseOffset = 0;
        function updateNoise() {
            noiseOffset = (noiseOffset + 1) % 100;
            noise.style.backgroundPosition = `${noiseOffset}px ${noiseOffset}px`;
            requestAnimationFrame(updateNoise);
        }
        updateNoise();
    }

    // Initialize loading screen
    const loadingScreen = document.getElementById('loading-screen');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    let progress = 0;
    const duration = 2000; // 2 seconds
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;
    function updateProgress() {
        progress += increment;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `LOADING... ${Math.round(progress)}%`;
        if (progress < 100) {
            setTimeout(updateProgress, interval);
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    // Initialize other systems after loading screen
                    if (typeof initializeSystems === 'function') initializeSystems();
                }, 500);
            }, 500);
        }
    }
    setTimeout(updateProgress, 500);
    
    // Initialize other systems
    function initializeSystems() {
        // Initialize notification system
        const notificationSystem = new NotificationSystem();
        
        // Initialize sound system
        const soundSystem = new SoundSystem();
        soundSystem.loadSounds();
        
        // Initialize terminal window
        const terminalWindow = new TerminalWindow();
        terminalWindow.init();
        
        // Show welcome notification
        setTimeout(() => {
            notificationSystem.show(
                'SYSTEM READY',
                'Welcome to NANSKIP.DEV - SYSTEM v16.02.2007',
                5000
            );
            soundSystem.play('boot');
        }, 1000);
    }
});

// === FILE PROTOCOL WARNING ===
if (window.location.protocol === 'file:') {
    const warning = document.createElement('div');
    warning.style.position = 'fixed';
    warning.style.top = '0';
    warning.style.left = '0';
    warning.style.width = '100vw';
    warning.style.height = '100vh';
    warning.style.background = 'rgba(0,0,0,0.95)';
    warning.style.color = '#0f0';
    warning.style.fontFamily = 'monospace';
    warning.style.fontSize = '2rem';
    warning.style.zIndex = '99999';
    warning.style.display = 'flex';
    warning.style.flexDirection = 'column';
    warning.style.justifyContent = 'center';
    warning.style.alignItems = 'center';
    warning.innerHTML = `
        <div style="max-width:700px;text-align:center;">
            <b>⚠️ This site must be run from a local server!</b><br><br>
            You are opening <code>index.html</code> directly (file://), which will break features due to browser security.<br><br>
            <b>To view this site, run a local server as described in the README.</b><br><br>
            <button id="reloadPage" style="margin-top:2em;font-size:1.2em;padding:0.5em 2em;">Reload</button>
        </div>
    `;
    document.body.appendChild(warning);
    document.getElementById('reloadPage').onclick = () => location.reload();
}
// === END FILE PROTOCOL WARNING ===

// === CONFIG LOADING WITH FALLBACK ===
window.siteConfig = null;
function loadConfig() {
    return fetch('config.json').then(r => {
        if (!r.ok) throw new Error('Config fetch failed');
        return r.json();
    }).then(cfg => {
        window.siteConfig = cfg;
        return cfg;
    }).catch(() => {
        // Fallback config
        window.siteConfig = {
            spacing: 24,
            colors: { primary: '#0f0', background: '#000', terminal: '#111', text: '#fff' },
            // ...add more defaults as needed
        };
        return window.siteConfig;
    });
}
// === END CONFIG LOADING ===

// === SOUND LOADING WITH ERROR HANDLING ===
class SoundSystem {
    constructor() {
        this.sounds = {};
        this.userInteracted = false;
        this._setupUserInteraction();
    }
    loadSounds() {
        const files = ['click','hover','type','error','success','boot'];
        files.forEach(name => {
            const audio = new Audio(`sounds/${name}.wav`);
            audio.volume = 0.3;
            audio.onerror = () => { this.sounds[name] = null; };
            this.sounds[name] = audio;
        });
    }
    _setupUserInteraction() {
        const unlock = () => {
            this.userInteracted = true;
            document.removeEventListener('click', unlock);
            document.removeEventListener('keydown', unlock);
        };
        document.addEventListener('click', unlock);
        document.addEventListener('keydown', unlock);
    }
    play(soundName) {
        if (!this.userInteracted) return;
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(() => {});
        }
    }
}
// === SINGLE CUSTOM CURSOR ENFORCEMENT & FIX ===
document.addEventListener('DOMContentLoaded', () => {
    // Remove duplicate cursors
    document.querySelectorAll('.cursor').forEach((el, i) => { if (i > 0) el.remove(); });
    let cursor = document.querySelector('.cursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);
    }
    // Remove any old mouse-following debug/test elements
    document.querySelectorAll('.debug-cursor, .test-cursor, .mouse-square, .mouse-artifact').forEach(el => el.remove());
    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.transform = 'translate(-50%, -50%)';
    });
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
});
// === SAFE INITIALIZATION ORDER ===
document.addEventListener('DOMContentLoaded', () => {
    loadConfig().then(() => {
        // All other initialization code goes here, wrapped in try/catch for robustness
        try {
            // ... existing DOMContentLoaded code ...
        } catch (e) {
            const err = document.createElement('div');
            err.style.position = 'fixed';
            err.style.top = '0';
            err.style.left = '0';
            err.style.width = '100vw';
            err.style.height = '100vh';
            err.style.background = 'rgba(0,0,0,0.95)';
            err.style.color = '#f00';
            err.style.fontFamily = 'monospace';
            err.style.fontSize = '2rem';
            err.style.zIndex = '99999';
            err.style.display = 'flex';
            err.style.flexDirection = 'column';
            err.style.justifyContent = 'center';
            err.style.alignItems = 'center';
            err.innerHTML = `<div style="max-width:700px;text-align:center;">
                <b>Critical error initializing site.</b><br><br>
                <pre>${e.message}</pre>
                <button onclick="location.reload()" style="margin-top:2em;font-size:1.2em;padding:0.5em 2em;">Reload</button>
            </div>`;
            document.body.appendChild(err);
        }
    });
});

// Notification System
class NotificationSystem {
    constructor() {
        this.container = document.querySelector('.notification-container');
    }
    
    show(title, content, duration = 5000) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        notification.innerHTML = `
            <div class="notification-header">
                <div class="notification-title">${title}</div>
                <div class="notification-close">×</div>
            </div>
            <div class="notification-content">${content}</div>
            <div class="notification-progress"></div>
        `;
        
        this.container.appendChild(notification);
        
        // Trigger reflow to enable animation
        notification.offsetHeight;
        notification.classList.add('show');
        
        // Add close button functionality
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => {
            this.close(notification);
        });
        
        // Auto close after duration
        setTimeout(() => {
            this.close(notification);
        }, duration);
    }
    
    close(notification) {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => {
            notification.remove();
        });
    }
}

// Initialize notification system
const notifications = new NotificationSystem();

// Example notifications
document.addEventListener('DOMContentLoaded', () => {
    // Show welcome notification after loading screen
    setTimeout(() => {
        notifications.show(
            'SYSTEM READY',
            'Welcome to the portfolio. Type "help" in the terminal for available commands.',
            8000
        );
    }, 3500);
    
    // Show notification when hovering over gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const title = item.querySelector('h3').textContent;
            notifications.show(
                'GALLERY ITEM',
                `Viewing: ${title}`,
                3000
            );
        });
    });
});

// Terminal Window Management
class TerminalWindow {
    constructor() {
        this.terminal = document.getElementById('terminal');
        this.toggleButton = document.querySelector('.terminal-toggle');
        this.header = this.terminal.querySelector('.terminal-header');
        // Replace old controls with new retro controls
        let controls = this.terminal.querySelector('.terminal-controls');
        if (!controls) {
            controls = document.createElement('div');
            controls.className = 'terminal-controls';
            this.header.appendChild(controls);
        }
        controls.innerHTML = `
            <div class="terminal-control terminal-close">X</div>
            <div class="terminal-control terminal-minimize">_</div>
            <div class="terminal-control terminal-maximize">▢</div>
        `;
        this.closeButton = controls.querySelector('.terminal-close');
        this.minimizeButton = controls.querySelector('.terminal-minimize');
        this.maximizeButton = controls.querySelector('.terminal-maximize');
        this.content = this.terminal.querySelector('.terminal-content');
        
        this.isDragging = false;
        this.currentX = 0;
        this.currentY = 0;
        this.initialX = 0;
        this.initialY = 0;
        this.xOffset = 0;
        this.yOffset = 0;
        
        // Store original dimensions
        this.originalHeight = '400px';
        this.originalWidth = '600px';
        this.minimizedHeight = '40px';
        
        this.init();
    }
    
    init() {
        // Dragging functionality
        this.header.addEventListener('mousedown', (e) => {
            if (e.target === this.header || e.target.parentElement === this.header) {
                this.isDragging = true;
                this.initialX = e.clientX - this.xOffset;
                this.initialY = e.clientY - this.yOffset;
                this.terminal.style.transition = 'none';
            }
        });
        
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                e.preventDefault();
                this.currentX = e.clientX - this.initialX;
                this.currentY = e.clientY - this.initialY;
                this.xOffset = this.currentX;
                this.yOffset = this.currentY;
                this.setTranslate(this.currentX, this.currentY, this.terminal);
            }
        });
        
        document.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.terminal.style.transition = 'all 0.3s ease';
        });
        
        // Window controls
        this.closeButton.addEventListener('click', () => this.close());
        this.minimizeButton.addEventListener('click', () => this.minimize());
        this.maximizeButton.addEventListener('click', () => this.maximize());
        this.toggleButton.addEventListener('click', () => this.toggle());
        
        // Initialize position
        this.setTranslate(0, 0, this.terminal);
    }
    
    setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
    
    close() {
        this.terminal.style.display = 'none';
        this.toggleButton.style.display = 'block';
        soundSystem.play('error');
    }
    
    minimize() {
        this.terminal.style.height = this.minimizedHeight;
        this.content.style.display = 'none';
        soundSystem.play('click');
    }
    
    maximize() {
        this.terminal.style.height = this.originalHeight;
        this.content.style.display = 'block';
        soundSystem.play('success');
    }
    
    toggle() {
        if (this.terminal.style.display === 'none') {
            this.terminal.style.display = 'block';
            this.toggleButton.style.display = 'none';
            this.terminal.style.height = this.originalHeight;
            this.content.style.display = 'block';
            soundSystem.play('boot');
        } else {
            this.terminal.style.display = 'none';
            this.toggleButton.style.display = 'block';
            soundSystem.play('error');
        }
    }
}

// Initialize terminal window management
document.addEventListener('DOMContentLoaded', () => {
    new TerminalWindow();
});
