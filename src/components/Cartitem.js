import React from "react";
import "./Cartitem.css";

const Cartitem = ({ book, onDelete }) => {
  const { imgsrc, title, author, genre, year, booksavailable, price } = book;
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <img src={imgsrc} alt={title} />
      </div>
      <div className="cartitem-info">
        <h2>{title}</h2>
        <h3>by {author}</h3>
        <div className="cartitem-other">
          <h3>Genre: {genre}</h3>
          <h3>Published: {year}</h3>
        </div>
        <div className="cartitem-bottom">
          <p>₹ {price}</p>
          <p>{booksavailable} left</p>
        </div>
        <button onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
};
export default Cartitem;
