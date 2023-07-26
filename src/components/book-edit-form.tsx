/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SubmitHandler, useForm } from "react-hook-form";
import { Book } from "../pages/home";

interface BookEditFormProps {
  book: Book;
  onSubmit: (editedBook: Book) => void;
}

const genres = [
  "Fiction",
  "Fantasy",
  "Romance",
  "Mystery",
  "Sci-Fi",
  "Thriller",
  "Non-Fiction",
];

export default function BookEditForm({ book, onSubmit }: BookEditFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>({
    defaultValues: book,
  });

  const handleFormSubmit: SubmitHandler<Book> = (data: Book) => {
    onSubmit(data);
  };

  return (
    <div className="p-4 border border-gray-300 shadow-md rounded-md bg-white">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Edit a book</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <p className="text-red-500">{errors.title?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Author
            </label>
            <input
              {...register("author", { required: "Author is required" })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <p className="text-red-500">{errors.author?.message}</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Genre</label>
          <select
            {...register("genre", { required: "Genre is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option value="" disabled>
              Select a genre
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <p className="text-red-500">{errors.genre?.message}</p>
        </div>
        <div>
          <button
            type="submit"
            className="w-full md:w-auto px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
