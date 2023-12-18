import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [aside, setAside] = useState(false);

  const toggleAside = () => {
    setAside(!aside);
  };

  const handleBasket = () => {
    document.querySelector(".basket").classList.toggle("aside")
}

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
            <i className="fas fa-heart"></i>
            <i onClick={handleBasket} className="fas fa-shopping-cart"></i>
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
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
          )}

      </div>
    </div>
  );
}

export default Navbar;