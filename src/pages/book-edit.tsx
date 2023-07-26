import BookEditForm, { Book } from "../components/book-edit-form";
import Navbar from "../layouts/nav-bar";

export default function BookEdit() {
  const book: Book = {
    id: 1,
    title: "Sample Book Title",
    author: "John Doe",
    genre: "Fiction",
  };

  const handleEditBook = (editedBook: Book) => {
    // Replace this with the logic to update the book with the new values
    console.log("Edited Book:", editedBook);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <BookEditForm book={book} onSubmit={handleEditBook} />
      </div>
    </div>
  );
}
