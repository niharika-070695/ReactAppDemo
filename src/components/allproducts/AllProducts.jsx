import axios from "axios";
import "./AllProducts.css";
import Card from "./card/Card";
import { useState } from "react";
function AllProducts() {
  let [allproducts, setAllProducts] = useState([]);
  const getProducts = () => {
    var promiseObject = axios.get("https://fakestoreapi.com/products");
    promiseObject
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ marginBottom: "20px" }}>All Products</h2>
      <p style={{ marginBottom: "20px" }}>
        Axios is a popular JavaScript library used to make HTTP requests from
        Node.js or XMLHttpRequests from the browser. It is often used in React
        applications to handle network requests to APIs. Axios provides a
        promise-based API that is easy to use and integrates well with modern
        JavaScript features like async/await.
      </p>
      <button onClick={getProducts}>GetProducts</button>
      <div className="allProductsData">
        {allproducts.map(function (product) {
          return (
            <Card
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
