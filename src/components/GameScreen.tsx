import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';
import { DragonLogo } from './DragonLogo';

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
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="flex items-center justify-between p-3 parchment border-b-2 border-wood">
        <button
          onClick={onReset}
          className="text-wood text-sm px-3 py-1.5 rounded active:bg-parchment-dark"
        >
          ← Return to Tavern
        </button>
        <div className="flex items-center gap-2">
          <DragonLogo size="sm" />
          <h1 className="font-bold text-wood" style={{ fontFamily: 'MedievalSharp, serif' }}>Quest Board</h1>
        </div>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-amber-100 text-sm py-2 px-4">
        Mark squares as you meet matching adventurers
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo text-wood text-center py-2 font-semibold text-sm border-y-2 border-amber-500">
          ⚔️ VICTORY! You've completed a quest line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
