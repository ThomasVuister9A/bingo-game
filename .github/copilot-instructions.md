---
name: copilot-instructions
description: AI agent guidelines for the Soc Ops Bingo game codebase
---

# Soc Ops Bingo - AI Agent Guidelines

## Before Committing
- [ ] `npm run lint` (ESLint - fixes with `--fix` flag)
- [ ] `npm run build` (TypeScript check + Vite build)
- [ ] `npm run test` (Vitest - all tests pass)

## Project Overview
Social bingo game for mixers: 5x5 board with 24 random questions + FREE SPACE center. Players find people matching prompts, aim for 5 in a row. Stack: React 19, TypeScript, Tailwind CSS v4, Vite.

## Architecture

### Game Logic (`src/utils/bingoLogic.ts`, `src/types/index.ts`)
- 5x5 grid, center auto-marked as FREE_SPACE
- Pure functions: `generateBoard()`, `toggleSquare()`, `checkBingo()`, `getWinningSquareIds()`
- **Immutable**: `toggleSquare(board, id)` returns new array, never mutates
- Rows/columns/diagonals checked for 5 in a row

### State (`src/hooks/useBingoGame.ts`)
- Single hook: `GameState` enum (start → playing → bingo)
- LocalStorage persistence with `validateStoredData()` version check (`STORAGE_VERSION = 1`)
- State keys: `board`, `gameState`, `winningLine`, `showBingoModal`
- Public API: `startGame()`, `handleSquareClick()`, `resetGame()`, `dismissModal()`

### Components
- **App.tsx**: Routes to StartScreen (gameState='start') or GameScreen (playing/bingo)
- **GameScreen**: Main UI, grid layout, accepts board + handlers as props
- **StartScreen**: "Start Game" button entry point
- **BingoSquare**: Cell component (text, marked state, click)
- **BingoModal**: Victory overlay

### Questions (`src/data/questions.ts`)
- 24 questions in pool, shuffled per board, only 24 used (+ FREE_SPACE center)
- Add questions by extending `questions[]` array

## Conventions

**Naming**: `handleX()` event handlers, `useX()` hooks, PascalCase components, camelCase utilities
**Immutability**: `toggleSquare()` returns new array via `map()`, never direct mutation
**Props**: Named `on*` handlers; state flows from App hook → components
**Types**: All in `src/types/index.ts`, no `any` types, strict TypeScript
**Testing**: Colocated `*.test.ts` files with Vitest + RTL
**Styling**: Tailwind v4 with `@theme` CSS variables in `index.css`, no config file

## Common Tasks

**Add Questions**: Edit `src/data/questions.ts`, push to `questions[]` array
**Add Feature**: Types → `src/types/` → logic in `src/utils/bingoLogic.ts` → hook → components → tests
**Bug Fix**: 99% in `bingoLogic.ts` or `useBingoGame.ts`. Use `npm run test` to verify.
**Design**: See `.github/instructions/frontend-design.instructions.md` + `tailwind-4.instructions.md`
