import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  // useEffect(() => {
  //   if (!query) return;
  // }, [query, page]);
  useEffect(() => {
    // 1. Оголошуємо стан
    const [articles, setArticles] = useState([]);

    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
      // 2. Записуємо дані в стан
      setArticles(response.data.hits);
    }
    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
}
