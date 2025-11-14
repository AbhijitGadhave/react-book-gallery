import React, { useState } from 'react';
import BookItem from './BookItem';

export interface Book {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
}

interface BookListProps {
  initialBooks?: Book[];
}

const BookList: React.FC<BookListProps> = ({ initialBooks = [] }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = () => {
    const nextId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

    const newBook: Book = {
      id: nextId,
      title: `New Book #${nextId}`,
      description:
        'This is a newly added book.',
      imageUrl: ''
    };

    setBooks((prev) => [...prev, newBook]);
  };

  return (
    <section aria-label="Book list" className="book-list-section">
      <div className="book-list-header">
        <h2 className="book-list-title">Available Books</h2>
        <button
          type="button"
          onClick={handleAddBook}
          className="btn btn-primary"
        >
          + Add New Book
        </button>
      </div>

      {books.length === 0 ? (
        <p className="empty-message">
          No books available. Click “Add New Book” to get started.
        </p>
      ) : (
        <ul className="book-list" role="list">
          {books.map((book) => (
            <li key={book.id} className="book-list-item" role="listitem">
              <BookItem
                id={book.id}
                title={book.title}
                description={book.description}
                imageUrl={book.imageUrl}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BookList;
