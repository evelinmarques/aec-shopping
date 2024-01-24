import React, { useState } from "react";
import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement, memo } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.png`, import.meta.url).href;

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen((prev) => !prev);
  };

  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? ' → Adicionado ao carrinho: ✔️' : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" onClick={toggleDetails} />
      {isDetailsOpen && (
        <div className="product-details">
          <div className="description-box">
            <p className="description">{product.description}</p>
            <p className="category-box">Categoria: {product.category}</p>
          </div>
          
        </div>
      )}
        <div className="paragraph_container">
            <p className="paragraph">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}{itemInCart}</p>
        </div>
      <button className="button_card" onClick={onAddToCart}>Adicionar ao carrinho</button>
    </article>
  );

  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every(key => {
      return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType];
    }) && prevInCart === nextInCart
  );
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;
