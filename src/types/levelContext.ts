export type LevelContextState = {
  width: number;
  height: number;
};

export enum LevelContextActions {
  'SET_WIDTH',
  'SET_HEIGHT',
}

export type LevelContextAction = { type: string };

export type LevelContextDispatch = (action: LevelContextAction) => void;
