import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-3 text-center rounded-lg transition-all duration-150 select-none min-h-[68px] text-sm leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[linear-gradient(180deg,var(--sakura-blush),rgba(255,255,255,0.8))] border-[2px] border-[var(--sakura-deep)] text-[var(--ink)] bloom'
      : 'bg-[var(--sakura-blush)] border-[2px] border-[var(--sakura-deep)] text-[var(--ink)]'
    : 'bg-white border border-[var(--wood-1)] text-[var(--ink)] hover:translate-y-[-2px] active:translate-y-0';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto px-1">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-white bg-[var(--sakura-deep)] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-sm">✓</span>
      )}
    </button>
  );
}
