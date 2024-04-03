import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  }; //викликається кожен раз, коли вміст поля вводу змінюється

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(query);
  }; //відповідає за обробку подання форми і передачу введеного користувачем запиту для подальшої обробки
  return (
    <header>
      <form onSubmit={() => onSubmit(handleSubmit)}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
