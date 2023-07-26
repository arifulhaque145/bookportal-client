import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface FilterDrawerProps {
  genres: string[];
  onFilterChange: (selectedGenres: string[]) => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  genres,
  onFilterChange,
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleGenreChange = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleApplyFilters = () => {
    onFilterChange(selectedGenres);
  };

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleToggleDrawer}
      >
        {open ? (
          <FontAwesomeIcon
            icon={faTimes}
            className="h-5 w-5 text-white focus:outline-none"
          />
        ) : (
          <FontAwesomeIcon
            icon={faFilter}
            className="h-5 w-5 text-white focus:outline-none"
          />
        )}
      </button>
      {open && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filter by Genre</h2>
              <button
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={handleToggleDrawer}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="h-5 w-5 text-gray-500 focus:outline-none"
                />
              </button>
            </div>
            {genres.map((genre) => (
              <label key={genre} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                />
                <span className="text-gray-800">{genre}</span>
              </label>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 w-full focus:outline-none"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterDrawer;
