import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import vector6 from "./vector6.png";
import "./LogIn.scss";
import { axiosInstance } from "../../config";

const LogIn = () => {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrors(null);

    const enteredMail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const res = await axiosInstance.post("auth/login", {
        email: enteredMail,
        password: enteredPassword,
      });
      res.data && navigate("/home", { replace: true });
      dispatch(
        authActions.loginHandler({
          username: res.data.username,
          email: res.data.email,
        })
      );
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      } else {
        console.error("An unexpected error occurred:", err.message);
        setErrors("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="signupPage">
      <div className="login">
        <div className="login1">
          <form onSubmit={submitHandler}>
            <h3 className="login1__text">Log in</h3>
            {errors && <p className="login1__error">{errors}</p>}
            <input
              ref={emailRef}
              className="login1__box"
              type="email"
              required
              placeholder="Email"
            />
            <input
              ref={passwordRef}
              className="login1__box"
              type="password"
              required
              placeholder="Password"
            />
            <button className="login1__submit">Login</button>
          </form>
          <p className="login1__para">
            New user? <Link to="/signup">Register now</Link>
          </p>
        </div>
        <div className="login2">
          <h3 className="login2__text">Welcome</h3>
          <h3 className="login2__text2">Start writing your blogs</h3>
          <img src={vector6} alt="" className="login2__vector" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
