import React, { useState } from "react";
import FilterDrawer from "../components/filter-drawer";

const FilterContainer: React.FC = () => {
  const genres = ["romance", "fantasy", "adventure"];
  const booksData = [
    { id: 1, title: "Book 1", genre: "romance" },
    { id: 2, title: "Book 2", genre: "fantasy" },
    { id: 3, title: "Book 3", genre: "adventure" },
    // Add more book data here with different genres
  ];

  const [filteredGenres, setFilteredGenres] = useState<string[]>([]);
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleFilterChange = (selectedGenres: string[]) => {
    setFilteredGenres(selectedGenres);
    // Filter the books based on selected genres
    const filteredBooks =
      selectedGenres.length === 0
        ? booksData
        : booksData.filter((book) => selectedGenres.includes(book.genre));
    setFilteredBooks(filteredBooks);
  };

  return (
    <div>
      <h1>Book Library</h1>
      <FilterDrawer genres={genres} onFilterChange={handleFilterChange} />
      {/* Display the filtered books */}
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterContainer;
