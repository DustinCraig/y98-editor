import React from 'react';
import { LevelContextProvider } from './contexts/level';

function App() {
  return (
    <div className='App'>
      <LevelContextProvider>
        <div>Hello</div>
      </LevelContextProvider>
    </div>
  );
}

export default App;
