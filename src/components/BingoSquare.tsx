import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border-2 rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-bingo to-ember border-bingo text-wood shadow-lg shadow-bingo/50'
      : 'parchment-dark border-marked-border text-green-900'
    : 'parchment border-wood text-gray-800 active:bg-parchment-dark';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className={`absolute top-0.5 right-0.5 text-xs ${isWinning ? 'text-ember' : 'text-marked-border'}`}>
          ✦
        </span>
      )}
    </button>
  );
}
