class ConfigManager {
    constructor() {
        this.config = null;
        this.loadConfig();
    }

    async loadConfig() {
        try {
            const response = await fetch('config.json');
            this.config = await response.json();
            this.applyConfig();
        } catch (error) {
            console.error('Error loading configuration:', error);
        }
    }

    applyConfig() {
        if (!this.config) return;

        // Apply CSS variables
        const root = document.documentElement;
        
        // Apply colors
        Object.entries(this.config.colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}-color`, value);
        });

        // Apply spacing
        Object.entries(this.config.spacing).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });

        // Apply typography
        root.style.setProperty('--font-family', this.config.typography.fontFamily);
        root.style.setProperty('--base-font-size', this.config.typography.baseFontSize);
        root.style.setProperty('--line-height', this.config.typography.lineHeight);

        // Apply layout
        root.style.setProperty('--max-width', this.config.layout.maxWidth);
        root.style.setProperty('--container-padding', this.config.layout.containerPadding);
        root.style.setProperty('--grid-gap', this.config.layout.gridGap);
        root.style.setProperty('--border-radius', this.config.layout.borderRadius);

        // Apply animations
        root.style.setProperty('--transition-speed', this.config.animations.transitionSpeed);
        root.style.setProperty('--hover-scale', this.config.animations.hoverScale);

        // Update section spacing
        document.querySelectorAll('.section').forEach(section => {
            section.style.padding = this.config.spacing.sectionPadding;
            section.style.marginBottom = this.config.spacing.sectionGap;
        });

        // Update gallery grid
        const gallery = document.querySelector('.gallery');
        if (gallery) {
            gallery.style.gap = this.config.spacing.elementGap;
            gallery.style.gridTemplateColumns = `repeat(auto-fit, minmax(${this.config.gallery.itemMinWidth}, 1fr))`;
        }

        // Update skills grid
        const skillsGrid = document.querySelector('.skills-grid');
        if (skillsGrid) {
            skillsGrid.style.gap = this.config.spacing.elementGap;
        }

        // Update terminal
        const terminal = document.getElementById('terminal');
        if (terminal) {
            terminal.style.width = this.config.terminal.width;
            terminal.style.height = this.config.terminal.height;
            terminal.style.minWidth = this.config.terminal.minWidth;
            terminal.style.minHeight = this.config.terminal.minHeight;
            terminal.style.fontSize = this.config.terminal.fontSize;
        }
    }

    getConfig() {
        return this.config;
    }
}

// Initialize configuration
const configManager = new ConfigManager();

// Fallback config if config.json fails to load
if (!window.siteConfig) {
    window.siteConfig = {
        spacing: 24,
        colors: { primary: '#0f0', background: '#000', terminal: '#111', text: '#fff' },
        // ...add more defaults as needed
    };
} 