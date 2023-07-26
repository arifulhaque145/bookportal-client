import React from "react";
import BookCard from "../components/book-card";
import { Book } from "../pages/home";

interface BookContainerProps {
  books: Book[];
}

const BookContainer: React.FC<BookContainerProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookContainer;
