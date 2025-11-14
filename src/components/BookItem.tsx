import React, { useState } from 'react';

const FALLBACK_IMAGE =
  'https://via.placeholder.com/120x160?text=No+Image';

export interface BookItemProps {
  id: number;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const BookItem: React.FC<BookItemProps> = ({
  id,
  title = 'Untitled Book',
  description = '',
  imageUrl = ''
}) => {
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);

  const hasDescription = description.trim().length > 0;
  const hasImageUrl = imageUrl.trim().length > 0;

  const handleToggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const descriptionId = `book-description-${id}`;
  const toggleButtonClassName = `btn btn-secondary ${
    showDescription ? 'btn-toggle-active' : ''
  }`;

  return (
    <article className="book-item" aria-label={title}>
      <div className="book-item-media">
        {imageError ? (
          <div className="book-image-placeholder" aria-label="Image not available">
            Image not available
          </div>
        ) : (
          <img
            src={hasImageUrl ? imageUrl : FALLBACK_IMAGE}
            alt={title || 'Book cover'}
            className="book-image"
            onError={handleImageError}
          />
        )}
      </div>

      <div className="book-item-content">
        <h3 className="book-title">{title || 'Untitled Book'}</h3>

        <div className="book-item-actions">
          {hasDescription ? (
            <button
              type="button"
              className={toggleButtonClassName}
              onClick={handleToggleDescription}
              aria-expanded={showDescription}
              aria-controls={descriptionId}
            >
              {showDescription ? 'Hide Details' : 'Show Details'}
            </button>
          ) : (
            <span className="no-description-label">No description available.</span>
          )}
        </div>

        {hasDescription && showDescription && (
          <p id={descriptionId} className="book-description">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default BookItem;
