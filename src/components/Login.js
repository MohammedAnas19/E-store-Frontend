import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userSlice";

function Login() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const logUser = {
      email: email,
      password: password,
    };
    dispatch(loginUser(logUser));
  };

  if (user.authenticated) {
    return <Redirect to={`/`} />;
  }

  return (
    <React.Fragment>
      <section className="ftco-section" style={{ padding: "7em 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section"></h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i class="fa fa-user" style={{ color: "white" }}></i>
                </div>
                <h3 className="text-center mb-4">Have an account?</h3>
                <form onSubmit={submitHandler} className="login-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex">
                    <input
                      type="password"
                      className="form-control rounded-left"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50">
                      <label className="checkbox-wrap checkbox-primary">
                        Remember Me<span> </span>
                        <input type="checkbox" checked />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a style={{ color: "var(--mainBlue)" }} href="#">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn rounded submit p-3 px-5"
                      style={{
                        width: "100%",
                        background: "var(--mainBlue)",
                        color: "white",
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Login;
