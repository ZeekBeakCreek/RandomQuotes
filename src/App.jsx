import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random`)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, [randomNumber]);

  return (
    <div className="main-container">
      <h1 className="main-header">
        Check Out <span>SUPER</span> Cool Quotes
      </h1>
      <section className="quote-section">
        <h2 className="main-text">
          "{quote.en}"  — {quote.author}
        </h2>
        <button
          className="new-quote-button"
          onClick={() => {
            setRandomNumber(Math.random());
          }}
        >
          New Quote
        </button>
      </section>
    </div>
  );
}

export default App;
