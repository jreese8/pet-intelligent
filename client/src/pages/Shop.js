import React from 'react';
import ProductList from "../components/ProductList/ProductList";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import Cart from "../components/Cart/Cart";

const Shop = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Shop;