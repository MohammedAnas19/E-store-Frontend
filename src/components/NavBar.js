import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { logout } from "../redux/userSlice";
import { ButtonContainer } from "./Button";
function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      {/* <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link> */}
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Estore
          </Link>
        </li>
      </ul>
      <div className="ml-auto d-flex">
        <Link to="/cart" className="mr-4 ">
          <i class="fas fa-shopping-cart" style={{ color: "white" }}></i>
        </Link>

        {user._id ? (
          <Link to="#" className="mr-4 " onClick={logoutHandler}>
            <i class="fa fa-user" style={{ color: "yellow" }}></i>
          </Link>
        ) : (
          <Link to="/login" className="mr-4 ">
            <i class="fa fa-user" style={{ color: "white" }}></i>
          </Link>
        )}
      </div>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size:1.3rem;
      text-transform:capitalize;
    }
    @media (max-width: 576px) {
      .navbar-nav {
        flex-direction: row !important;
  `;

const DropDownContainer = styled("div")`
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  color: white;
  background: transparent;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: var(--mainBlue);
  box-sizing: border-box;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  color:white;
  margin-bottom: 0.8em;
  &:hover {
    background: white
    color:var(--mainBlue);
  }
`;
