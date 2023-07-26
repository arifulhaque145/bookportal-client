import FilterContainer from "../layouts/filter-container";
import { Book } from "./home";

interface HomePageProps {
  selectedGenre: string;
}

const Books: React.FC<HomePageProps> = ({ selectedGenre }) => {
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

  const Books = selectedGenre
    ? books.filter((book) => book.genre === selectedGenre)
    : books;

  return (
    <div>
      <FilterContainer />
    </div>
  );
};

export default Books;
