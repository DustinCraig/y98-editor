import React, { createContext, useContext, useReducer, useRef } from 'react';
import {
  LevelContextAction,
  LevelContextState,
  LevelContextActions,
  LevelContextDispatch,
} from '../types/levelContext';

export const initialState: LevelContextState = {
  width: 256,
  height: 256,
};

const LevelContext = createContext<
  | {
      state: LevelContextState;
      dispatch: LevelContextDispatch;
    }
  | undefined
>(undefined);

function levelContextReducer(state: LevelContextState, action: any) {
  switch (action.type) {
    case 'SET_WIDTH': {
      return state;
    }
    default: {
      return state;
    }
  }
}

function LevelContextProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(levelContextReducer, initialState);
  const value = { state, dispatch };
  return (
    <LevelContext.Provider value={value}>{children}</LevelContext.Provider>
  );
}

export { LevelContextProvider, LevelContext };
