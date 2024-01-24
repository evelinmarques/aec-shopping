import React, { useState } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  let filteredProducts = products || [];  

  if (searchTerm) {
    filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        false
      );
    });
  }

  let pageContent: ReactElement[] = [];

  if (filteredProducts.length > 0) {
    pageContent = filteredProducts.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  } else {
    pageContent.push(<p key="no-results">Nenhum produto encontrado.</p>);
  }

  const content = (
    <main className="main main--products">
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Pesquise por Nome ou Categoria"
          style={{ width: '100%' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="products-container">
        {pageContent}
      </div>
    </main>
  );

  return content;
};

export default ProductList;