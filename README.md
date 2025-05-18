# Portfolio Website

> **⚠️ IMPORTANT: You MUST use a local server to view this site! Opening index.html directly (file://) will NOT work due to browser security restrictions.**
>
> ## How to run a local server
> 
> **Windows:**
> 1. Open a terminal in this folder.
> 2. Run: `python -m http.server 8000`
> 3. Go to [http://localhost:8000](http://localhost:8000) in your browser.
>
> **Mac/Linux:**
> 1. Open a terminal in this folder.
> 2. Run: `python3 -m http.server 8000`
> 3. Go to [http://localhost:8000](http://localhost:8000) in your browser.
>
> **Node.js (any OS):**
> 1. Install http-server: `npm install -g http-server`
> 2. Run: `http-server`
> 3. Go to the shown address (usually [http://localhost:8080](http://localhost:8080)).
>
> **If you see a white screen or errors about CORS/config, you are NOT using a local server!**

A retro-style portfolio website with various interactive elements and effects.

## Required Sound Files

Place the following .wav files in the `sounds` directory:

- click.wav (button clicks)
- hover.wav (mouse interactions)
- type.wav (typing sounds)
- error.wav (failed operations)
- success.wav (completed operations)
- boot.wav (system boot sound)

You can find suitable retro-style sound effects from various free sound effect websites or create your own.

## Features

- Retro-style loading screen
- Matrix rain effect
- Terminal interface
- Particle system background
- Glitch text effects
- Custom cursor
- Notification system
- Sound effects

## Setup

1. Clone the repository
2. Add the required sound files to the `sounds` directory
3. Open `index.html` in a web browser

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Canvas API

## License

MIT License 