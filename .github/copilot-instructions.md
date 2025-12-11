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

## Design System (D&D Fantasy Theme)

**Color Palette**:
- Burgundy accent (#8b2e2e) - buttons, borders
- Parchment (#f4e8d0, #e8d7b5) - backgrounds
- Forest green (#2d4a2d, #4a7c4a) - marked squares
- Ember gold (#d4af37, #ff6b35) - victories, dragon accents
- Dark wood (#3d2817) - text, borders

**Typography**:
- Display: MedievalSharp (Google Fonts) for titles
- Body: Cinzel serif for readability
- Apply with `style={{ fontFamily: 'MedievalSharp, serif' }}`

**DragonLogo Component** (src/components/DragonLogo.tsx):
- SVG heraldic crest, sizes: sm/md/lg
- Hover animation: subtle scale pulse
- Use in headers, modals, start screen

**Parchment Texture**:
- `.parchment` class for backgrounds (layered CSS gradients)
- `.parchment-dark` for marked squares
- No images—pure CSS for performance

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
