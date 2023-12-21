import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { BasketContext } from "../../Context/BasketContext";
import { WishlistContext } from "../../Context/WishlistContext/WishlsitContext";

function Navbar() {
  const [aside, setAside] = useState(false);
  const {basket} = useContext(BasketContext)
  const {wishlist} = useContext(WishlistContext)

  const toggleAside = () => {
    setAside(!aside);
  };



  return (
    <div>
      <div id="navbar">
        <div className="container">
          <h1>Exclusive</h1>
          <div className="aside_icon">
            <i onClick={toggleAside} className="fas fa-bars"></i>
          </div>
          <div className="pages">
            <ul>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Sign Up
              </NavLink>
            </ul>
          </div>
          <div className="icons">
            <div className="input">
              <input type="text" placeholder="What are you looking for" />
              <i className="fas fa-search"></i>
            </div>
            <Link to="/wishlist" className="fas fa-heart">
              <sup>{wishlist.length}</sup>
            </Link>
            <Link to="/basket" className="fa-solid fa-cart-shopping">
                <sup>{basket.length}</sup>
              </Link>
          </div>
        </div>
        {aside && (
            <div className="asidebar">
              <i onClick={toggleAside} className="fa-solid fa-x"></i>
              <div className="pages">
                <ul>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Sign Up
                  </NavLink>
                </ul>
              </div>
              <div className="icons">
                <div className="input">
                  <input type="text" placeholder="What are you looking for" />
                  <i className="fas fa-search"></i>
                </div>
                <Link to="/wishlist" className="fas fa-heart">
              <sup>{wishlist.length}</sup>
            </Link>
            <Link to="/basket" className="fa-solid fa-cart-shopping">
                <sup>{basket.length}</sup>
              </Link>
              </div>
            </div>
          )}

      </div>
    </div>
  );
}

export default Navbar;