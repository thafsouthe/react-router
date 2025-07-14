import React from 'react';

function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ marginRight: '10px' }}
      />

      <input
        type="number"
        placeholder="Filter by rating (1-5)"
        min="1"
        max="5"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;
