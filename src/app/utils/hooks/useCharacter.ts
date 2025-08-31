// hooks/useCharacter.ts
import { useReducer } from 'react';
import { characterReducer } from '../reducers/characterReducer';
import { CharacterStats } from '../types/character';
import { initialState } from '../types/character';

export function useCharacter() {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  const actions = {
    takeDamage: (damage: number) => 
      dispatch({ type: 'TAKE_DAMAGE', payload: damage }),
    
    heal: (amount: number) => 
      dispatch({ type: 'HEAL', payload: amount }),
    
    useMana: (amount: number) => 
      dispatch({ type: 'USE_MANA', payload: amount }),
    
    restoreMana: (amount: number) => 
      dispatch({ type: 'RESTORE_MANA', payload: amount }),
    
    addExperience: (xp: number) => 
      dispatch({ type: 'ADD_EXPERIENCE', payload: xp }),
    
    addGold: (amount: number) => 
      dispatch({ type: 'ADD_GOLD', payload: amount }),
    
    consumeGold: (amount: number) => 
      dispatch({ type: 'CONSUME_GOLD', payload: amount }),
    
    updateStats: (updates: Partial<CharacterStats>) => 
      dispatch({ type: 'UPDATE_STATS', payload: updates }),
  };

  return { stats: state, actions };
}