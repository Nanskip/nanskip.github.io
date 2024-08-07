document.addEventListener('DOMContentLoaded', function() {
    const loadingTextElement = document.getElementById('loadingText');
    const consoleElement = document.getElementById('console');
    const consoleOutputElement = document.getElementById('consoleOutput');
    const consoleInputElement = document.getElementById('consoleInput');

    const loadingSteps = [
        'main() = function{}',
        'main()',
        'site = {}',
        'site.load = function(self)',
        'site:load()',
        '#Log: Site loading complete.'
    ];

    let currentStep = 0;
    let symbolChangeInterval = null;

    const showFinalText = () => {
        loadingTextElement.textContent = loadingSteps[currentStep];
        currentStep++;
        if (currentStep >= loadingSteps.length) {
            clearInterval(symbolChangeInterval);
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                consoleElement.style.display = 'block';
                displayWelcomeMessage();
            }, 500);
        } else {
            setTimeout(updateLoadingText, 500);
        }
    };

    const updateLoadingText = () => {
        if (currentStep < loadingSteps.length) {
            let charArray = loadingSteps[currentStep].split('');
            symbolChangeInterval = setInterval(() => {
                loadingTextElement.textContent = charArray.map(char => 
                    Math.random() < 0.5 ? char : String.fromCharCode(33 + Math.floor(Math.random() * 94))
                ).join('');
            }, 10);

            setTimeout(() => {
                clearInterval(symbolChangeInterval);
                showFinalText();
            }, 200);
        }
    };

    setTimeout(updateLoadingText, 1000);

    const displayWelcomeMessage = () => {
        const welcomeMessage = `
        Welcome to Nanskip's portfolio site!
        Here are some commands you can try:
        - hello
        - about
        - contact
        `;
        consoleOutputElement.innerHTML = `<span style="color: lightgreen;">${welcomeMessage}</span>`;
    };

    consoleInputElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = consoleInputElement.value.trim();
            consoleInputElement.value = '';
            processCommand(command);
        }
    });

    const processCommand = (command) => {
        let response = '';
        switch(command.toLowerCase()) {
            case 'hello':
                response = 'Hello! I am Nanskip!';
                break;
            case 'about':
                response = 'This is Nanskip\'s portfolio site. I create games and websites.';
                break;
            case 'contact':
                response = 'You can contact me at [your email].';
                break;
            default:
                response = 'Unknown command.';
                break;
        }
        consoleOutputElement.innerHTML += `<div style="color: white; font-family: 'Lucida Console', Lucida Console, monospace;">${response}</div>`;
    };
});
