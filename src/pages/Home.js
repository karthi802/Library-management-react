import React from "react";
import { useState } from "react";
import "./Home.css";
import {books} from "../books.js";
import Bookcard from "../components/Bookcard.js";
  

const Home = () => {
  const [bookitem, setBooks] = useState(books);
  const [sort, setSort] = useState("");

  const handleSortByTitle = () => {
    setSort("title");
    setBooks([...bookitem].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const handleSortByAuthor = () => {
    setSort("author");
    setBooks([...bookitem].sort((a, b) => a.author.localeCompare(b.author)));
  };

  const handleSortByGenre = () => {
    setSort("genre");
    setBooks([...bookitem].sort((a, b) => a.genre.localeCompare(b.genre)));
  };

  const handleSortByDatePublished = () => {
    setSort("year");
    setBooks([...bookitem].sort((a, b) => a.year.localeCompare(b.year)));
  };

  return (
    <div className="home">
      <div class="dropdown">
        <button class="dropbtn">Sort by</button>
        <div class="dropdown-content">
          <a onClick={handleSortByTitle}>Title</a>
          <a onClick={handleSortByAuthor}>Author</a>
          <a onClick={handleSortByGenre}>Genre</a>
          <a onClick={handleSortByDatePublished}>Date published</a>
        </div>
      </div>
      <div className="home-container">
        {bookitem.map((book) => {
          return <Bookcard key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
};
export default Home;
