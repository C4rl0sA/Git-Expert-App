import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>Gif Expert App</h2>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        setError={setError}
      />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>

      {error}
    </>
  );
};
