import BookContainer from "../layouts/book-container";
import Footer from "../layouts/footer";
import Navbar from "../layouts/nav-bar";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

export default function Home() {
  const books: Book[] = [
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      genre: "Genre 1",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      genre: "Genre 2",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      genre: "Genre 3",
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 4",
      genre: "Genre 4",
    },
    {
      id: 5,
      title: "Book 5",
      author: "Author 5",
      genre: "Genre 5",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="m-4 sm:m-6 md:m-8">
        <div className="container mx-auto mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
            Latest Books
          </h1>
        </div>
        <BookContainer books={books} />
      </div>
      <Footer />
    </div>
  );
}
