import React, { useState, useEffect, useRef } from 'react';
import './RandomQuote.css';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const fetchQuoteRef = useRef(null);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].text);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  fetchQuoteRef.current = fetchRandomQuote;

  return (
    <div>
      <h1>Random Quote</h1>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <button onClick={fetchQuoteRef.current}>Get New Quote</button>
    </div>
  );
};

export default RandomQuote;



