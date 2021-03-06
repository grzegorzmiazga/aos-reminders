import { TTurnWhen } from './phases'
import { IEffects } from './data'
import { TGameStructure } from 'meta/turn_structure'

export interface IEntry {
  name: string
  effects: IEffects[]
}

export type TArtifacts = IEntry[]
export type TBattalions = IEntry[]
export type TUnits = IEntry[]
export type TCommandTraits = IEntry[]
export type TAbilities = IEffects[]

export interface IArmy {
  Abilities: TAbilities
  Artifacts: TArtifacts
  Battalions: TBattalions
  Game: TGameStructure
  Traits: TCommandTraits
  Units: TUnits
}
