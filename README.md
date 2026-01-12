# 🎯 Soc Ops Bingo

> **Break the ice, make connections, and have fun!**

An interactive social bingo game designed for in-person mixers, team building events, and networking sessions. Players mingle to find people who match the bingo prompts and race to get five in a row!

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)

---

## ✨ Features

- 🎲 **Dynamic 5×5 Bingo Grid** - Each game generates a unique board with 24 random prompts
- 🎯 **Free Space Center** - Start with one square already marked!
- 💾 **Auto-Save Progress** - Your game state persists across browser sessions
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- 🎨 **Modern UI** - Built with React 19 and Tailwind CSS v4
- ⚡ **Lightning Fast** - Powered by Vite for instant hot module replacement

## 🎮 How to Play

1. **Start a Game** - Click "Start Game" to generate your bingo board
2. **Mingle & Ask** - Walk around and find people who match the prompts on your board
3. **Mark Your Board** - Tap squares to mark them when you find a match
4. **Get Five in a Row** - First to complete a row, column, or diagonal wins!

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app running locally.

### Build for Production

```bash
npm run build
```

The app automatically deploys to GitHub Pages on every push to `main`.

## 🛠️ Tech Stack

This project showcases modern web development practices:

- **[React 19](https://react.dev/)** - Latest React with improved performance
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe code with strict mode
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling with `@theme` configuration
- **[Vite](https://vite.dev/)** - Next-generation frontend tooling
- **[Vitest](https://vitest.dev/)** - Unit testing with React Testing Library
- **[ESLint](https://eslint.org/)** - Code quality and consistency

## 📁 Project Structure

```
src/
├── components/      # React components (GameScreen, BingoSquare, Modal)
├── hooks/          # Custom React hooks (useBingoGame)
├── utils/          # Game logic (generateBoard, checkBingo)
├── data/           # Game questions and prompts
└── types/          # TypeScript type definitions
```

## 🎨 Customization

Want to customize the game for your event? Check out the **[Lab Guide](.lab/GUIDE.md)** for detailed instructions on:

- Adding or modifying bingo prompts
- Customizing colors and themes
- Adjusting game rules
- Extending functionality

## 🧪 Development

```bash
# Run tests
npm run test

# Lint code
npm run lint

# Type check
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

Need help? Check out our [Support Guide](SUPPORT.md) or [open an issue](https://github.com/ThomasVuister9A/bingo-game/issues).

---

<div align="center">
Made with ❤️ for building better connections
</div>
