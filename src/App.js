import React from 'react';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import { Card } from './Card';

function App() {
  const numberOfBoxes = Array.from(Array(16).keys());
  const [clearCards, setClearCards] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h5" component="h1">
            <a href="http://www.roforewards.com/">Rofo</a> Matching Game Helper
        </Typography>
      </header>
      <section className="section">
        {numberOfBoxes.map(() => <Card clearCards={clearCards} setClearCards={setClearCards}/>)} 
      </section>
      <Button onClick={() => setClearCards(true)}>Clear Cards</Button>
    </div>
  );
}

export default App;
