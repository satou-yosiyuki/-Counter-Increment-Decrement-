import React from 'react';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className='App'>
     <h1>タイマー</h1>
     <Timer seconds={30}/>
    </div>
  );
}

export default App;
