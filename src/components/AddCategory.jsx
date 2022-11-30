import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputvalue, setInputvalue] = useState('');
  const onInputChange = ({ target }) => setInputvalue(target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputvalue.trim().length <= 1) return;

    onNewCategory(inputvalue.trim());
    setInputvalue('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder='Buscar gifs...'
          value={inputvalue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
