import React from 'react';
import './App.css';
import TODOList from '/src/TODO/TODOList';

function App() {
  return (
    <main>
      <div className='todo-app'>
        <TODOList/>
      </div>
    </main>
  );
}

export default App;