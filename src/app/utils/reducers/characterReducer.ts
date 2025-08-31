
import { CharacterActions } from "../types/actions";
import { CharacterStats } from "../types/character";


export function characterReducer(state: CharacterStats, action: CharacterActions): CharacterStats {
  switch (action.type) {

    case 'TAKE_DAMAGE': {
      const damageTaken = Math.max(0, action.payload - state.def);
      return {
        ...state,
        health: Math.max(0, state.health - damageTaken),
      };
    }

 
    case 'HEAL': {
      return {
        ...state,
        health: Math.min(state.maxHealth, state.health + action.payload),
      };
    }


    case 'USE_MANA': {
      return {
        ...state,
        mana: Math.max(0, state.mana - action.payload),
      };
    }

    case 'RESTORE_MANA': {
      return {
        ...state,
        mana: Math.min(state.maxMana, state.mana + action.payload),
      };
    }

   
    case 'ADD_EXPERIENCE': {
      const newExperience = state.experience + action.payload;
      
      if (newExperience >= state.experienceToLevelUp) {

        return {
          ...state,
          level: state.level + 1,
          experience: newExperience - state.experienceToLevelUp,
          experienceToLevelUp: Math.floor(state.experienceToLevelUp * 1.5),
          maxHealth: state.maxHealth + 20,
          maxMana: state.maxMana + 10,
          atk: state.atk + 2,
          def: state.def + 1,
          health: state.maxHealth + 20, // Salud completa
          mana: state.maxMana + 10,     // Maná completo
        };
      }

      return {
        ...state,
        experience: newExperience,
      };
    }

    case 'ADD_GOLD': {
      return {
        ...state,
        gold: state.gold + action.payload,
      };
    }

    case 'CONSUME_GOLD': {
      return {
        ...state,
        gold: Math.max(0, state.gold - action.payload),
      };
    }

    case 'UPDATE_STATS': {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
}