import { DragonLogo } from './DragonLogo';

interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="parchment rounded-xl p-6 max-w-xs w-full text-center border-4 border-wood shadow-2xl shadow-bingo/30 animate-[bounce_0.5s_ease-out]">
        <DragonLogo size="lg" className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-bingo mb-2" style={{ fontFamily: 'MedievalSharp, serif' }}>
          QUEST COMPLETE!
        </h2>
        <p className="text-wood mb-6">You have proven worthy, adventurer!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent text-amber-100 font-semibold py-3 px-6 rounded-lg active:bg-accent-light transition-colors border-2 border-accent-light"
        >
          Continue Your Journey
        </button>
      </div>
    </div>
  );
}
