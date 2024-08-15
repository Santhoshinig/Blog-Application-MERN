import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vector2 from "./vector2.png";
import "./SignUp.scss";
import { axiosInstance } from "../../config";

const SignUp = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrors(null);

    const enteredName = userRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const res = await axiosInstance.post("auth/register", {
        username: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log(res);
      res.data && navigate("/signin", { replace: true });
    } catch (err) {
      if (err.response && err.response.data) {
        const msg = err.response.data.msg;
        setErrors(msg);
      } else {
        console.error("An unexpected error occurred:", err.message);
        setErrors("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="signupPage">
      <div className="signup">
        <div className="signup1">
          <h3 className="signup1__text">Welcome to BLOG NEUTRAZ</h3>
          <p className="signup1__para">
            Your Thoughts Deserve to Be Heard – Register Today!
          </p>
          <img src={vector2} alt="" className="signup1__vector" />
        </div>
        <div className="signup2">
          <form onSubmit={submitHandler}>
            <h3 className="signup2__text">Sign Up</h3>
            {errors && <p className="signup2__error">{errors}</p>}
            <input
              ref={userRef}
              className="signup2__box"
              type="text"
              required
              placeholder="Username"
            />
            <input
              ref={emailRef}
              className="signup2__box"
              type="email"
              required
              placeholder="Email"
            />
            <input
              minLength="8"
              maxLength="20"
              ref={passwordRef}
              className="signup2__box"
              type="password"
              required
              placeholder="Password"
            />
            <button className="signup2__submit">Sign Up</button>
          </form>
          <p className="signup2__para">
            Already Registered? <Link to="/signin">Log in now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
