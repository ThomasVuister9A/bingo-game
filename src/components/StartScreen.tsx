interface StartScreenProps {
  onStart: () => void;
}

const sampleQuestions = [
  'Has traveled abroad',
  'Speaks 2+ languages',
  'Loves spicy food',
  'FREE',
  'Has a pet',
  'Plays an instrument',
  'Morning person',
  'Can do a cartwheel',
  'Loves karaoke',
];

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="app-container">
      <div className="paper-card p-6 md:p-10 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Hero section */}
          <div className="flex-1 space-y-6 text-center md:text-left fade-in" style={{ animationDelay: '0ms' }}>
            <div>
              <h1 className="font-['Shippori_Mincho'] text-5xl md:text-6xl text-[--ink]">桜 Bingo</h1>
              <p className="text-xl text-[--sakura-blush] mt-2">A spring social bingo</p>
            </div>

            <p className="text-base text-[--ink]/80 max-w-md mx-auto md:mx-0">
              Find people who match the prompts. Tap squares when you find matches. Get 5 in a row to win!
            </p>

            <button
              onClick={onStart}
              className="w-full md:w-auto bg-[--accent] text-[--ink] hover:bg-[--sakura-deep] hover:text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition-all duration-300"
            >
              Play Now
            </button>
          </div>

          {/* Preview section */}
          <div className="flex-1 space-y-4 fade-in" style={{ animationDelay: '200ms' }}>
            <p className="text-sm text-center text-[--ink]/60">See it in action ↓</p>

            {/* 3x3 preview grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-sm mx-auto">
              {sampleQuestions.map((question, idx) => (
                <div
                  key={idx}
                  className="preview-square pulse-wave"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="text-xs md:text-sm text-[--ink]">{question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5 decorative petals - medium count */}
      <div aria-hidden="true">
        <div className="sakura-petal" style={{ left: '8%', width: '26px', height: '26px', animationDelay: '0s' }} />
        <div className="sakura-petal" style={{ left: '25%', top: '12%', width: '22px', height: '22px', animationDelay: '1.4s' }} />
        <div className="sakura-petal" style={{ left: '50%', width: '28px', height: '28px', animationDelay: '2.8s' }} />
        <div className="sakura-petal" style={{ left: '72%', top: '8%', width: '24px', height: '24px', animationDelay: '0.7s' }} />
        <div className="sakura-petal" style={{ left: '88%', top: '15%', width: '20px', height: '20px', animationDelay: '2.1s' }} />
      </div>
    </div>
  );
}
