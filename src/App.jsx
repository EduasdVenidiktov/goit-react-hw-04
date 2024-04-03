// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";

import { useState } from "react";

// export default function App() {
//   // useEffect(() => {
//   //   if (!query) return;
//   // }, [query, page]);
//   useEffect(() => {
//     // 1. Оголошуємо стан
//     const [articles, setArticles] = useState([]);

//     async function fetchArticles() {
//       const response = await axios.get(
//         "<https://hn.algolia.com/api/v1/search?query=react>"
//       );
//       // 2. Записуємо дані в стан
//       setArticles(response.data.hits);
//     }
//     fetchArticles();
//   }, []);
//   return (
//     <div>
//       <h1>Latest articles</h1>
//     </div>
//   );
// }

const Btn = () => {
  const [count, setCount] = useState(0);
  const hendleEnter = (ev) => {
    console.log(ev);
  };
  const hendleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={hendleClick} onMouseEnter={hendleEnter}>
        Total click me - {count};
      </button>
      ;
    </>
  );
};

const App = () => {
  // const handleEnter = () => {
  //   console.log(Date.now());
  // };
  return (
    <div>
      App
      <Btn />
      <Btn />
      <Btn />
      <Btn />
    </div>
  );
};
export default App;
