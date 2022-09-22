import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categoryPage/:category" element={<CategoryPage />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
