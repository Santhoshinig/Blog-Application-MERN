import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img12 from "./favicon-32x32.png";
import { authActions } from "../../store/auth-slice";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(authActions.logoutHandler());
    setOpen(false);
    navigate("/home");
  };

  return (
    <header className="header">
      <img src={img12} alt="Header logo" />
      <h1 className="header__logo">Neutronzz Blog</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "header__items headeractive" : "header__items"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/write"
            className={({ isActive }) =>
              isActive ? "header__items headeractive" : "header__items"
            }
          >
            Write
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "header__items headeractive" : "header__items"
            }
          >
            About us
          </NavLink>
        </ul>
      </nav>
      {!user && (
        <div className="header__authentication">
          <Link to="/signin" className="header__login">
            Log in
          </Link>
          <Link to="/signup" className="header__signup">
            Sign up
          </Link>
        </div>
      )}
      {user && (
        <div className="header__authentication">
          <div className="header__user">
            <span className="header__welcome">Welcome</span>
            <span className="header__welcomeuser">{user.username}</span>
          </div>
          <button onClick={logoutHandler} className="header__logout">
            Log out
          </button>
        </div>
      )}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className="hamburger__line" />
        <span className="hamburger__line" />
        <span className="hamburger__line" />
      </div>
      {open && (
        <ul className="hamburger__menu">
          {!user && (
            <div className="hamburger__authentication">
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="header__login"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="header__signup"
              >
                Sign up
              </Link>
            </div>
          )}
          {user && (
            <div className="hamburger__authentication">
              <div className="header__user">
                <span className="header__welcome">Welcome</span>
                <span className="header__welcomeuser">{user.username}</span>
              </div>
              <button onClick={logoutHandler} className="header__logout">
                Log out
              </button>
            </div>
          )}
          <NavLink
            to="/home"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "hamburger__items headeractive" : "hamburger__items"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/write"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "hamburger__items headeractive" : "hamburger__items"
            }
          >
            Write
          </NavLink>
          <NavLink
            to="/aboutus"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "hamburger__items headeractive" : "hamburger__items"
            }
          >
            About us
          </NavLink>
        </ul>
      )}
    </header>
  );
};

export default Header;
