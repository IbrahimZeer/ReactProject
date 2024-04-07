import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./App.css";

function App() {
  // create loader as useState
  const [loader, setLoader] = useState(true);
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState(``);
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories/active?limit=10`
      );
      setCategories(data.categories);
      setLoader(false);
      setErr("");
    } catch {
      console.log(`something went wrong!`);
      setErr(`error to load data`);
      setLoader(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  if (loader) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {err ? <span>{err}</span> : null}
      {categories.map((cat) => (
        <div className="products" key={cat.id}>
          <Link to={`/products/${cat.id}`}>
            <h2>{cat.name}</h2>
            <img src={cat.image["secure_url"]} />
          </Link>
        </div>
      ))}
    </>
  );
}

export default App;
