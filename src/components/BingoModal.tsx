interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50">
      <div className="paper-card rounded-xl p-6 max-w-xs w-full text-center shadow-xl bloom">
        <div className="text-4xl mb-2">🌸</div>
        <h2 className="text-2xl font-bold text-[var(--sakura-deep)] mb-2" style={{ fontFamily: 'Shippori Mincho, serif' }}>おめでとう</h2>
        <p className="text-[var(--ink)]/80 mb-6">You completed a line — BINGO!</p>

        <button
          onClick={onDismiss}
          className="w-full bg-[var(--accent)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--sakura-deep)] transition-colors"
        >
          Keep Playing
        </button>

        {/* falling petals for celebration */}
        <div aria-hidden className="absolute inset-0 overflow-visible pointer-events-none">
          <div className="sakura-petal" style={{ left: '20%', top: '10%', animationDelay: '0s', width: 26, height: 26 }} />
          <div className="sakura-petal" style={{ left: '65%', top: '5%', animationDelay: '0.4s', width: 22, height: 22 }} />
        </div>
      </div>
    </div>
  );
}
