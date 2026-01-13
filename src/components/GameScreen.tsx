import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="app-container flex-col min-h-full">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4">
        <button
          onClick={onReset}
          className="text-[var(--ink)]/80 text-sm px-3 py-1.5 rounded hover:bg-[var(--wood-1)] transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-bold text-lg" style={{ fontFamily: 'Shippori Mincho, serif' }}>桜 Bingo</h1>
        <div className="w-16" />
      </header>

      {/* Instructions */}
      <p className="text-center text-[var(--ink)]/70 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="mx-auto my-3 px-4 py-2 rounded-lg paper-card text-center font-semibold text-sm bloom" style={{ maxWidth: 520 }}>
          <div className="flex items-center justify-center gap-2">
            <span className="text-pink-500">🌸</span>
            <span>おめでとう — BINGO! You got a line!</span>
            <span className="text-pink-500">🌸</span>
          </div>
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3 w-full">
        <div className="paper-card p-4">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
