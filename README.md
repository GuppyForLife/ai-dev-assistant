# AI Dev Assistant

A simple AI-powered developer assistant web app built with **React**.  
Allows users to enter questions or prompts and receive formatted responses in a clean, dark-themed UI.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

- Responsive, modern dark UI
- Input textarea with focus styling
- Submit button with disabled/loading state
- Response panel preserving formatting (`<pre>` for line breaks and indentation)
- Simple simulated “Thinking…” response (Day 1)

---

## Tech Stack

- **Frontend:** React, Vite, JavaScript
- **Styling:** CSS, dark theme
- **State Management:** React hooks (`useState`)
- **IDE:** VS Code

_(Backend integration with NestJS planned in future iterations)_

---

## Getting Started

1. **Clone the repo**

````bash
git clone https://github.com/GuppyForLife/ai-dev-assistant.git
cd ai-dev-assistant
````

2. **Install Dependencies**
````bash
npm install
````
3. **Start Development Server**
````bash
npm run dev
````

---

## Usage

1. Type a question or prompt in the input textarea.
2 .Click Submit.
3. The response panel will show “Thinking…” then display the answer.
4 .Text formatting is preserved for multi-line responses or code snippets.

## Future Improvements
- Connect frontend to a real AI backend (NestJS + API)
- Add syntax highlighting for code responses
- Expand input validation
- Mobile-friendly / responsive design
- Optional persistent chat history
````
