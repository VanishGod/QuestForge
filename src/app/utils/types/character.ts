export interface CharacterStats {
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  atk: number;
  def: number;
  level: number;
  experience: number;
  experienceToLevelUp: number;
  gold: number;
}

export const initialState: CharacterStats = {
    health: 120,
    maxHealth: 120,
    mana: 60,
    maxMana: 60,
    atk: 10,
    def: 5,
    experience: 0,
    experienceToLevelUp: 40,
    level: 1,
    gold: 0,
}