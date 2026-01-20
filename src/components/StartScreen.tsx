interface StartScreenProps {
  onStart: () => void;
  onStartCardDeck: () => void;
}

export function StartScreen({ onStart, onStartCardDeck }: StartScreenProps) {
  return (
    <div className="app-container">
      <div className="text-center max-w-sm">
        <div className="paper-card p-6 mb-6">
          <h1 className="text-4xl font-bold text-ink mb-1" style={{ fontFamily: 'Shippori Mincho, serif' }}>桜 Bingo</h1>
          <p className="text-sm text-ink/70 mb-4" style={{ fontFamily: 'Zen Maru Gothic, sans-serif' }}>A spring social bingo</p>

          <div className="bg-transparent rounded p-4 mb-4 text-left">
            <h2 className="font-semibold text-ink mb-2">Choose your mode</h2>
            <ul className="text-left text-ink/70 text-sm space-y-2">
              <li>• <strong>Classic:</strong> 5×5 grid, get 5 in a row</li>
              <li>• <strong>Card Deck:</strong> Flip through questions one by one</li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={onStart}
              className="w-full bg-(--accent) text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-sm hover:bg-(--sakura-deep) transition-colors"
            >
              Classic Bingo
            </button>
            
            <button
              onClick={onStartCardDeck}
              className="w-full bg-(--sakura-petal) text-(--sakura-deep) font-semibold py-3 px-6 rounded-lg text-lg shadow-sm hover:bg-(--sakura-blush) transition-colors"
            >
              🌸 Card Deck
            </button>
          </div>
        </div>

        {/* Decorative petals */}
        <div aria-hidden>
          <div className="sakura-petal" style={{ left: '8%', animationDelay: '0s' }} />
          <div className="sakura-petal" style={{ left: '55%', top: '5%', width: 22, height: 22, animationDelay: '1.6s' }} />
          <div className="sakura-petal" style={{ left: '82%', top: '10%', width: 18, height: 18, animationDelay: '0.8s' }} />
        </div>
      </div>
    </div>
  );
}
