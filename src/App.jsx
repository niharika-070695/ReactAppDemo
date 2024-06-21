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
import UserNames from "./components/user-names/UserNames";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import A from "./components/parent-child/A";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/allproducts/AllProducts";

function App() {
  return (
    <div className="App">
      <Nav />
      <A />
      {/* <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />} />
          <Route path={"jewellery"} element={<Jewellery />} />
          <Route path={"mensclothing"} element={<Mensclothing />} />
          <Route path={"womensclothing"} element={<Womensclothing />} />
        </Route>

        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/imagecomp"} element={<ImageComp />} />
        <Route path={"/allproducts"} element={<AllProducts />} />
        <Route path={"/usernames"} element={<UserNames />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
