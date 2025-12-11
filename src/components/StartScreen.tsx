import { DragonLogo } from './DragonLogo';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-sm">
        <DragonLogo size="lg" className="mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-amber-200 mb-2" style={{ fontFamily: 'MedievalSharp, serif' }}>
          Quest Board
        </h1>
        <p className="text-lg text-amber-100 mb-8">Adventurer's Challenge</p>
        
        <div className="parchment rounded-lg p-6 border-2 border-wood mb-8">
          <h2 className="font-semibold text-wood mb-3">How to play</h2>
          <ul className="text-left text-gray-700 text-sm space-y-2">
            <li>• Seek fellow adventurers matching these traits</li>
            <li>• Mark a square when you discover a match</li>
            <li>• Complete 5 in a row to claim victory!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-amber-100 font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-colors border-2 border-accent-light"
        >
          Begin Quest
        </button>
      </div>
    </div>
  );
}
