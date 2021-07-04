import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quantityCart } from "../redux/cartSlice";

function Cart() {
  const { cart, total, subTotal, gst, count } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch();
  }, []);
  const quantityHandler = (c, action) => {
    const qtyData = { c, action };
    dispatch(quantityCart(qtyData));
  };
  return (
    <React.Fragment>
      <div style={{ maxWidth: "1400px", align: "center", margin: "0 auto" }}>
        <div className="" style={{ marginTop: "50px", textAlign: "center" }}>
          {cart.length != 0 ? <h5>My Cart</h5> : <h2>Your Cart is Empty</h2>}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flexWrap: "wrap", minWidth: "1000px" }}>
            {cart.length != 0 ? (
              cart.map((c) => {
                return (
                  <div
                    className="row mb-2 border-bottom"
                    style={{ height: "100px" }}
                  >
                    <div className="col-2 img-container p-1">
                      <img
                        className="img align-middle mb-2"
                        style={{
                          width: "100%",
                          height: "90px",
                          objectFit: "contain",
                        }}
                        src={window.location.origin + "/" + c.img}
                      />
                    </div>
                    <div
                      className="col-8 p-0"
                      style={{ objectFit: "contain", margin: "0" }}
                    >
                      <h5 style={{ margin: "0px" }}>{c.title}</h5>
                      <p style={{ margin: "0px" }}>Company : {c.company}</p>
                      <p style={{ margin: "0px" }}>
                        Quantity :
                        <i
                          className="fas fa-plus-square"
                          onClick={(e) => quantityHandler(c, "plus")}
                          style={{ cursor: "pointer" }}
                        ></i>
                        <span> {c.qty} </span>
                        <i
                          className="fas fa-minus-square"
                          onClick={(e) => quantityHandler(c, "minus")}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </p>
                      <p style={{ margin: "0px" }}>&#8377;{c.price}</p>
                    </div>
                    <div
                      className="col-2"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          float: "right",
                          marginLeft: "10px",
                          width: "100",
                          marginRight: "30px",
                        }}
                      >
                        <i
                          className="fas fa-trash-alt"
                          style={{
                            float: "right",
                            color: "red",
                            cursor: "pointer",
                          }}
                          onClick={(e) => quantityHandler(c, "delete")}
                        ></i>
                      </span>
                      <span
                        style={{
                          float: "right",
                          marginLeft: "10px",
                          width: "100",
                          marginRight: "30px",
                        }}
                      >
                        <h5
                          style={{
                            float: "right",
                          }}
                        >
                          &#8377;{c.subTotal}
                        </h5>
                      </span>
                    </div>
                    {/* <hr /> */}
                  </div>
                );
              })
            ) : (
              <h3></h3>
            )}
          </div>

          <div
            className="border p-3"
            style={{
              marginLeft: "50px",
              right: "0",
              top: "0",
              background: "white",
              width: "100%",
              maxWidth: "300px",
              maxHeight: "170px",
            }}
          >
            Total Items:<span style={{ float: "right" }}>{count}</span>
            <br />
            Sub-Total:
            <span style={{ float: "right" }}>&#8377;{subTotal}</span>
            <br />
            GST: <span style={{ float: "right" }}>&#8377;{gst}</span>
            <hr />
            <h5>
              Total:<span style={{ float: "right" }}>&#8377;{total}</span>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
