import React from 'react';
import './book.css';

const book = () => {
  return (
    <div id="book" className="table">
      <div className="rgb"></div>
      <h1>Book a table</h1>
      <div className="inputs">
        <input type="email" placeholder="EMAIL" />
        <input type="number" placeholder="NUMBER OF GUESTS" />
        <input type="time" />
        <input type="date" />
      </div>
      <button>Find Table</button>
    </div>
  );
}

export default book