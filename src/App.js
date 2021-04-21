import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Card } from './Card';

function App() {
  const numberOfBoxes = Array.from(Array(16).keys());
  const [clearCards, setClearCards] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header"><a href="http://www.roforewards.com/">Rofo</a> Matching Game Helper</header>
      <section className="section">
        {numberOfBoxes.map(() => <Card clearCards={clearCards} setClearCards={setClearCards}/>)} 
      </section>
      <Button onClick={() => setClearCards(true)}>Clear Cards</Button>
    </div>
  );
}

export default App;
