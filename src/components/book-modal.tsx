interface BookModalProps {
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-md">
        <p className="text-lg font-semibold">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookModal;