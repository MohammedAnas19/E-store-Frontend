import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

function Details() {
  const { detailProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const cartHandler = (product) => {
    dispatch(addToCart(product));
    history.push(`/cart`);
  };
  useEffect(() => {
    dispatch(getProductById(id));
  }, []);
  const { company, img, info, price, title, inCart } = detailProduct[0];
  return (
    <div>
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        {/* end of title */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={window.location.origin + "/" + img}
              className="img-fluid"
              alt=""
            />
          </div>
          {/* prdoduct info */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h1>model : {title}</h1>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by : <span className="text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price : <span>&#8377;</span>
                {price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product :
            </p>
            <p className="text-muted lead">{info}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                disabled={inCart ? true : false}
                onClick={(e) => cartHandler(detailProduct[0])}
              >
                {inCart ? "in cart" : "add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default Details;
