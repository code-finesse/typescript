import React from 'react';
import './App.css';

function App() {
    const sum = (a:number, b:number):number => a + b

    return (
    <div className="App">
        <h1>Hello</h1>
        <p>{sum(5,12)}</p>
    </div>
    );
}

export default App;
