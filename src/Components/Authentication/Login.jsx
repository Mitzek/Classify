import React, { useState, useEffect } from "react";
//import styles from './authStyles.module.css'
import styles from "./styles/authStyle.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { loginRoute } from "../../API/apiRoutes.js";
import { authRoute } from "./../../API/apiRoutes";
import App from "./../../App";

function Login() {
  const [user, setUser] = useState({
    email: "alireyhan2198@gmail.com",
    password: "123456",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    const { data } = await axios.post(loginRoute, {
      email,
      password,
    });

    if (data.status === false) {
      window.alert(data.msg);
      console.log("Error" + data.msg);
    } else {
      localStorage.setItem("classify-user", JSON.stringify(data.userCheck));
      localStorage.setItem("classify-user-token", data.token);
      setLoading(true);
      window.location.reload();
      navigate("/home");
    }
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <form action="POST" className={styles.regForm} onSubmit={handleSubmit}>
          <div className={styles.regLogo}>
            <h1>CLASSIFY</h1>
            <h3>Please Login to your account!</h3>
          </div>

          <input
            type="email"
            className={styles.regInput}
            placeholder="Enter your email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInputs}
          />
          <input
            type="password"
            className={styles.regInput}
            placeholder="Enter your password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInputs}
          />
          <button className={styles.regSubmit} type="submit">
            Log In
          </button>
          <span style={{ fontSize: "12px", color: "green" }}>
            For your convenience, the login inputs are already added, just hit
            login.
          </span>
          <p>
            Dont have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
                border: "1px solid black",
                padding: "5px",
                width: "20%",
                borderRadius: "5px",
              }}
              to="/register"
            >
              REGISTER
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
