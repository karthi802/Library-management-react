import React from "react";
import "./Bookcard.css";

const Bookcard = (props) => {
  const { imgsrc, title, author, genre, year, booksavailable, price } = props;
  console.log(props);
  return (
    <div className="bookcard">
      <div className="bookcard-image">
        <img src={imgsrc} alt="" />
      </div>
      <div className="bookcard-info">
        <h2>{title}</h2>
        <h3>by {author}</h3>
        <div className="bookcard-other">
          <h4>Genre: {genre}</h4>
          <h3>Published: {year}</h3>
        </div>
        <p>Price: ₹{price}</p>
        <div class="timeInformation">
          <span>{booksavailable} left</span>
          <button type="button">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
