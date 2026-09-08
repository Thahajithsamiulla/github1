# Modern Calculator

A lightweight browser-based calculator app with a modern glassmorphism UI, keyboard support, and a simple Node.js server for local hosting.

## Overview

This project is a small web application that lets users perform standard arithmetic calculations directly in the browser. It includes a polished interface, responsive layout, and client-side calculation logic without external dependencies.

## Features

- Arithmetic operations: addition, subtraction, multiplication, and division
- Percentage conversion
- Decimal input support
- Sign toggle (+/-)
- Backspace and clear actions
- Keyboard shortcuts for quick input
- Error handling for invalid operations such as division by zero
- Responsive design for desktop and mobile screens
- Docker support for easy containerized deployment

## Project Structure

- `calculator.html` — main calculator interface and JavaScript logic
- `server.js` — Node.js HTTP server that serves the app
- `Dockerfile` — container configuration for running the app in Docker

## Requirements

- Node.js 20 or newer
- A modern browser such as Chrome, Edge, Firefox, or Safari
- Optional: Docker for containerized execution

## Running Locally

1. Open a terminal in the project directory.
2. Start the server:

```bash
node server.js
```

3. Open your browser and visit:

```text
http://localhost:3000
```

You can also access the page directly at:

```text
http://localhost:3000/calculator.html
```

## Docker Usage

Build the Docker image:

```bash
docker build -t calculator .
```

Run the container:

```bash
docker run -p 3000:3000 calculator
```

Then open:

```text
http://localhost:3000
```

## Supported Keyboard Inputs

- Numbers: 0-9
- Operators: +, -, *, /
- Decimal: .
- Enter or =: calculate
- Escape: clear all
- Backspace: delete last character
- Delete or C: clear current entry
- %: percentage

## Notes

The application is intentionally simple and self-contained, making it a good example of a static frontend paired with a minimal Node.js server. It is suitable for learning, demos, or deployment as a small utility app.

## License

This project is provided as-is for educational and personal use.
