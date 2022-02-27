import logo from './logo.svg';
import './App.css';
import quotes from './quotes.json';
import { useState } from 'react';
import QuoteBox from './components/QuoteBox';

function App() {

  console.log( quotes )

  return (
    <div className="App">
      
      <QuoteBox/>

    </div>
  );
}

export default App;