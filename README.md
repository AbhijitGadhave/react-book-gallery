# 📚 React Book Gallery

A small React + TypeScript book gallery.

The application demonstrates:

- Reusable React components
- State management with hooks
- Handling optional data (description & image)
- Graceful error handling for invalid image URLs
- Basic accessibility practices
- Unit testing with Jest & React Testing Library

---

## 🚀 Features

- **Book List**: Renders a list of books using a reusable `BookItem` component.
- **Title & Description**: Each book shows a title and a description (when available).
- **Optional Image**:
  - If `imageUrl` is provided → show that image.
  - If `imageUrl` is missing → show a fallback image.
  - If the image fails to load → show an inline “Image not available” placeholder.
- **Show / Hide Description**:
  - Toggle button to show/hide the book description.
  - Button color changes when the description is visible.
- **Add New Book**:
  - “+ Add New Book” button adds a new item to the in-memory list.
  - No persistence is used (as requested); the list is stored in React state.
- **Accessibility**:
  - Semantic HTML (`<section>`, `<ul>`, `<li>`, `<h3>`, `<button>`, `<p>`).
  - `aria-expanded` and `aria-controls` on the toggle button.
  - `alt` text for images and labels for placeholders.

---

## 🛠 Tech Stack

- **React** (with hooks & JSX)
- **TypeScript**
- **Vite** (build & dev server)
- **Jest** (test runner)
- **React Testing Library** (component testing)
- Plain **CSS** for styling (`src/styles.css`)

---

## ▶️ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/react-book-gallery.git
cd react-book-gallery
npm install
npm run dev
