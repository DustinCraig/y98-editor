import { useContext } from 'react';
import { LevelContext } from '../contexts/level';

export const useCount = () => {
  const context = useContext(LevelContext);
  if (!context) throw new Error('LevelContext must be used within a provider');
  return context;
};
