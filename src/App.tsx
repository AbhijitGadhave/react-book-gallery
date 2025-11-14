import React from 'react';
import BookList, { type Book } from './components/BookList';

const initialBooks: Book[] = [
  {
    id: 1,
    title: 'Clean Code',
    description: 'A handbook of agile software craftsmanship that teaches how to write clean, maintainable code.',
    imageUrl: 'https://picsum.photos/120/160?random=1'
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    description: 'Practical tips and philosophies for becoming a pragmatic, effective software engineer.',
    imageUrl: ''
  },
  {
    id: 3,
    title: 'Refactoring',
    description: 'Improving the design of existing code through small, safe steps and patterns.',
    imageUrl: 'https://picsum.photos/120/160?random=2'
  }
];


const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Book Gallery</h1>
        <p className="app-subtitle">
          A small React + TypeScript book gallery with reusable components,
          toggles, and basic error handling.
        </p>
      </header>

      <main>
        <BookList initialBooks={initialBooks} />
      </main>
    </div>
  );
};

export default App;
