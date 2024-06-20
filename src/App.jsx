import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Electronics from "./components/products/categories/electronics/Electronics";
import Jewellery from "./components/products/categories/jewellery/Jewellery";
import Mensclothing from "./components/products/categories/mensclothing/Mensclothing";
import Womensclothing from "./components/products/categories/womensclothing/Womensclothing";

import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />} />
          <Route path={"jewellery"} element={<Jewellery />} />
          <Route path={"mensclothing"} element={<Mensclothing />} />
          <Route path={"womensclothing"} element={<Womensclothing />} />
        </Route>

        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/imagecomp"} element={<ImageComp />} />
      </Routes>
    </div>
  );
}

export default App;
