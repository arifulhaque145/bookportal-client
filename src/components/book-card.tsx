import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bookImg from "../assets/book.jpg";
import { Book } from "../pages/home";
import BookModal from "./book-modal";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteBook = () => {
    // Handle the delete book logic here
    // For now, let's just hide the modal
    setShowModal(false);
  };

  return (
    <div className="p-4 border border-gray-300 shadow-md rounded-md bg-white">
      <Link to={`/details/${book.id}`}>
        <div className="flex justify-center">
          <img
            src={bookImg}
            alt={book.title}
            className="w-full h-40 object-cover rounded-md cursor-pointer"
          />
        </div>
      </Link>
      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-sm text-gray-600">{book.genre}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/add`}>
          <FontAwesomeIcon
            icon={faPlus}
            className="h-6 w-6 text-green-500 cursor-pointer"
          />
        </Link>
        <button
          onClick={() => setShowModal(true)} // Show the modal when delete button is clicked
          className="flex items-center justify-center w-10 h-10 text-red-500 bg-white border border-red-500 rounded-full hover:text-red-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={faTrash} className="h-5 w-5" />
        </button>
      </div>
      {showModal && (
        <BookModal
          message="Do you want to delete the book?"
          onCancel={() => setShowModal(false)}
          onConfirm={handleDeleteBook}
        />
      )}
    </div>
  );
};

export default BookCard;
