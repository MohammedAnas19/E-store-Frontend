import React, { useEffect } from "react";
import Product from "./Product";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Title from "./Title";
import { getProducts } from "../redux/productSlice";

function ProductList() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <React.Fragment>
      <ProductWrapper className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map((p) => {
              return <Product key={p.id} {...p} />;
            })}
          </div>
        </div>
      </ProductWrapper>
    </React.Fragment>
  );
}

const ProductWrapper = styled.section``;

export default ProductList;
