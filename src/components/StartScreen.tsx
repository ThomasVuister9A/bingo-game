interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="app-container">
      <div className="text-center max-w-sm">
        <div className="paper-card p-6 mb-6">
          <h1 className="text-4xl font-bold text-ink mb-1" style={{ fontFamily: 'Shippori Mincho, serif' }}>桜 Bingo</h1>
          <p className="text-sm text-ink/70 mb-4" style={{ fontFamily: 'Zen Maru Gothic, sans-serif' }}>A spring social bingo</p>

          <div className="bg-transparent rounded p-4 mb-4 text-left">
            <h2 className="font-semibold text-ink mb-2">How to play</h2>
            <ul className="text-left text-ink/70 text-sm space-y-2">
              <li>• Find people who match the questions</li>
              <li>• Tap a square when you find a match</li>
              <li>• Get 5 in a row to win!</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="w-full bg-[var(--accent)] text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-sm hover:bg-[var(--sakura-deep)] transition-colors"
          >
            Start Game
          </button>
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
