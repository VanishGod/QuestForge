import { CharacterStats } from "./character";

export type CharacterActions =
  | { type: 'TAKE_DAMAGE'; payload: number }
  | { type: 'HEAL'; payload: number }
  | { type: 'USE_MANA'; payload: number }
  | { type: 'RESTORE_MANA'; payload: number }
  | { type: 'ADD_EXPERIENCE'; payload: number }
  | { type: 'LEVEL_UP' }
  | { type: 'ADD_GOLD'; payload: number }
  | { type: 'CONSUME_GOLD'; payload: number }
  | { type: 'UPDATE_STATS'; payload: Partial<CharacterStats> };
;