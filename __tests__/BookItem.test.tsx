import { render, screen, fireEvent } from '@testing-library/react';
import BookItem from '../src/components/BookItem';

describe('BookItem component', () => {
  test('toggles description visibility when button is clicked', () => {
    const title = 'Test Book';
    const description = 'This is a test description.';

    render(
      <BookItem
        id={1}
        title={title}
        description={description}
        imageUrl=""
      />
    );
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();

    const hideButton = screen.getByRole('button', { name: /hide details/i });
    expect(hideButton).toBeInTheDocument();
    fireEvent.click(hideButton);
    expect(screen.queryByText(description)).not.toBeInTheDocument();

    const showButton = screen.getByRole('button', { name: /show details/i });
    expect(showButton).toBeInTheDocument();
    fireEvent.click(showButton);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
