import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/userSlice";
import { Redirect } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName,
      password: password,
      lastName: lastName,
      email: email,
      gender: gender,
    };
    dispatch(registerUser(newUser));
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
                <h3 className="text-center mb-4">Haven't an account?</h3>
                <form onSubmit={submitHandler} className="login-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="First Name"
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="Last Name"
                      required
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="Gender"
                      required
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                      Get Started
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
