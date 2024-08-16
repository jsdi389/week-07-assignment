import { useEffect, useState } from "react";
export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    // call api
    const response = await fetch("http://localhost:8080/books");
    //get data from repsonse
    const data = await response.json();
    // update state with new data
    setBooks(data);
  }

  getBooks();

  return (
    <div>
      {books.map(function (book) {
        return (
          <h3 key={book.title}>
            {book.title} - {book.author} - {book.genre} -£{book.price}
          </h3>
        );
      })}
    </div>
  );
}
