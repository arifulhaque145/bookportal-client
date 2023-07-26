import React from "react";
import { Link, useParams } from "react-router-dom";
import bookDetailsImg from "../assets/book.jpg";
import { Book } from "./home";

const BookDetails: React.FC = () => {
  const { id } = useParams<string>();
  const bookId = parseInt(id!, 10);

  const book: Book = {
    id: bookId,
    title: "Book Title",
    author: "Author Name",
    genre: "Fiction",
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={bookDetailsImg}
            alt={book.title}
            className="w-full h-60 object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{book.title}</h1>
          <p className="text-lg text-gray-600">{book.author}</p>
          <p className="text-lg text-gray-600">{book.genre}</p>
          <div className="flex mt-4">
            <Link to={`/edit/${book.id}`}>
              <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                Edit Book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
