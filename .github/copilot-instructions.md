# Copilot Instructions for Soc Ops (Social Bingo)

**Soc Ops** is an icebreaker bingo game for mixers. 5x5 board, players find matches, 5-in-a-row wins.

## Before Committing
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds (TypeScript + Vite)
- [ ] `npm run test` passes (21 tests)

## Architecture

**Core Logic** (src/utils/bingoLogic.ts, src/hooks/useBingoGame.ts):
- Board: 25-square immutable array, index 12 is free space (always marked)
- States: `'start'` → `'playing'` → `'bingo'` (type: GameState)
- Game state persists to localStorage with strict validation
- Questions: 24 prompts from src/data/questions.ts + FREE_SPACE

**Components** (Tailwind 4):
- App → StartScreen | GameScreen + BingoModal
- GameScreen → BingoBoard → BingoSquare (stateless)
- Props are explicit interfaces, no prop drilling

**Types** (src/types/index.ts):
- `BingoSquareData`, `BingoLine`, `GameState` - all exhaustively handled

## Code Patterns

**Immutability**: Functions return new state, never mutate
- ✅ `toggleSquare(board, id)` → new array
- ❌ `board[0].isMarked = true`

**Type Narrowing**: Exhaustively handle GameState branches
```typescript
if (gameState === 'bingo') { /* safe to use board */ }
```

**Storage**: localStorage persists with version validation (see `validateStoredData()`)

**Components**: Explicit prop interfaces, callback handlers (`onSquareClick`, `onReset`)
- BingoSquare: stateless, receives only `isMarked` + handler

## When Modifying

1. **Questions**: Update src/data/questions.ts - keep ≤ 24 (5x5 minus free space)
2. **Logic**: Test in bingoLogic.test.ts first (use Vitest globals, mock Math.random)
3. **UI**: Respect component hierarchy, use hook for state
4. **Types**: Update src/types/index.ts, then fix compiler errors
5. **State**: Centralize in useBingoGame.ts

## Key Gotchas

- **Center square** (index 12) is always free & marked—not configurable
- **Immutability required**: Logic returns new arrays, never mutates
- **localStorage validation**: Strict type checking prevents silent corruption
- **Tests colocated**: bingoLogic.test.ts next to bingoLogic.ts
- **Vite base path**: Auto-detected from `VITE_REPO_NAME` for GitHub Pages
