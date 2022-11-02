import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState([]);
  // useState is set to epmty array to initialize state
  const [render, setRender] = useState(0);
   // useState is set to 0 as typeOf render will be a number

  useEffect(() => {
    fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random`)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, [render]);
    // render in dependency array so when called will rerender and provide a new quote
    // Math.random is called in render button so change state of render and rerender the page

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
            setRender(Math.random());
          }}
        >
          New Quote
        </button>
      </section>
    </div>
  );
}

export default App;
