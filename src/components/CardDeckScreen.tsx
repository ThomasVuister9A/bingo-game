import { useState } from 'react';
import type { BingoSquareData } from '../types';

interface CardDeckScreenProps {
  board: BingoSquareData[];
  onReset: () => void;
}

export function CardDeckScreen({ board, onReset }: CardDeckScreenProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get all non-free-space questions
  const cards = board.filter(sq => !sq.isFreeSpace);
  const currentCard = cards[currentCardIndex];

  const handleCardTap = () => {
    if (isAnimating) return;

    if (!isFlipped) {
      setIsAnimating(true);
      setIsFlipped(true);
      setTimeout(() => setIsAnimating(false), 420);
    } else {
      // Move to next card
      if (currentCardIndex < cards.length - 1) {
        setIsAnimating(true);
        setCurrentCardIndex(currentCardIndex + 1);
        setIsFlipped(false);
        setTimeout(() => setIsAnimating(false), 420);
      }
    }
  };

  const isLastCard = currentCardIndex >= cards.length - 1;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-linear-to-br from-(--paper-cream) to-(--sakura-blush)">
      <div className="w-full max-w-md flex flex-col gap-6">
        {/* Progress */}
        <div className="text-center">
          <p className="text-sm text-[--wood-2] mb-2">
            Card {currentCardIndex + 1} of {cards.length}
          </p>
          <div className="w-full h-2 bg-[--wood-1]/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[--sakura-deep] transition-all duration-300"
              style={{ width: `${((currentCardIndex + 1) / cards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div 
          onClick={handleCardTap}
          className={`paper-card aspect-3/4 flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300 relative overflow-hidden ${isAnimating ? 'card-flip' : ''}`}
        >
          {!isFlipped ? (
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🌸</div>
              <p className="text-lg text-[--wood-2] font-['Shippori_Mincho']">
                Tap to reveal
              </p>
            </div>
          ) : (
            <div className="text-center p-8">
              <p className="text-xl text-[--ink] font-['Zen_Maru_Gothic'] leading-relaxed">
                Find someone who...
              </p>
              <p className="text-2xl text-[--sakura-deep] font-['Shippori_Mincho'] mt-6 font-bold">
                {currentCard?.text}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {isFlipped && !isLastCard && (
            <button
              onClick={handleCardTap}
              className="flex-1 paper-card py-4 text-[--sakura-deep] font-['Shippori_Mincho'] font-semibold hover:shadow-lg transition-shadow"
            >
              Next Card →
            </button>
          )}
          {isFlipped && isLastCard && (
            <button
              onClick={onReset}
              className="flex-1 paper-card py-4 text-[--sakura-deep] font-['Shippori_Mincho'] font-semibold hover:shadow-lg transition-shadow"
            >
              Done ✓
            </button>
          )}
        </div>

        {/* Back to menu */}
        <button
          onClick={onReset}
          className="text-sm text-[--wood-2] hover:text-[--ink] transition-colors"
        >
          ← Back to menu
        </button>
      </div>
    </div>
  );
}
