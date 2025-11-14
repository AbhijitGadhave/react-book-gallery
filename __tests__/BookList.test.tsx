import { render, screen, fireEvent } from '@testing-library/react';
import BookList, { type Book } from '../src/components/BookList';

describe('BookList component', () => {
  test('renders initial books', () => {
    const initialBooks: Book[] = [
      { id: 1, title: 'First Book', description: 'First desc', imageUrl: '' },
      { id: 2, title: 'Second Book', description: 'Second desc', imageUrl: '' }
    ];

    render(<BookList initialBooks={initialBooks} />);

    // Titles should appear
    expect(screen.getByText('First Book')).toBeInTheDocument();
    expect(screen.getByText('Second Book')).toBeInTheDocument();

    // There should be 2 list items
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  test('shows empty message when no books are provided', () => {
    render(<BookList initialBooks={[]} />);

    expect(
      screen.getByText(/No books available\./i)
    ).toBeInTheDocument();
  });

  test('adds a new book when "Add New Book" is clicked', () => {
    const initialBooks: Book[] = [
      { id: 1, title: 'Existing Book', description: 'Desc', imageUrl: '' }
    ];

    render(<BookList initialBooks={initialBooks} />);

    // Initially only 1 book
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Existing Book')).toBeInTheDocument();

    const addButton = screen.getByRole('button', { name: /\+ Add New Book/i });
    fireEvent.click(addButton);

    // Now there should be 2 books
    const itemsAfter = screen.getAllByRole('listitem');
    expect(itemsAfter).toHaveLength(2);

    // New book title should follow the "New Book #<id>" pattern
    expect(
      screen.getByText(/New Book #2/i)
    ).toBeInTheDocument();
  });
});
