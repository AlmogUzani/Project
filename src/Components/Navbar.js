import { Link } from "react-router-dom";
import { Logout } from "../DAL/api";
import { useEffect, useState, useCallback } from "react";
import { getCategories } from "../DAL/api";
import { getCookie } from "./Cart";

function Navbar() {
  const [categories, setCategories] = useState([]);

  const getDataCallback = useCallback(getData, []);

  async function getData() {
    setCategories(await getCategories());
  }

  useEffect(() => {
    getDataCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createURL(category) {
    return "http://localhost:3000/category/" + category.categoryID;
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="/../images/icons/menu.png" alt="menu" className="iconL" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <h3>MamiMevi</h3>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="thing"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories.map((category) => (
                    <li key={category.categoryID}>
                      <a href={createURL(category)}>{category.categoryName}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>&nbsp;&nbsp;</li>
              {getCookie("id") === "" && (
                <li className="nav-item">
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
                </li>
              )}
              {getCookie("id") === "" && (
                <li className="nav-item">
                  <Link to="/registration">Register</Link>
                </li>
              )}
              {getCookie("id") !== "" && (
                <>
                  <li className="nav-item">
                    <Link to="/cart">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                        alt="cart"
                        style={{ height: "30px", width: "30px" }}
                      />
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="thing"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      User Info
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/userInfo">Personal information</Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a href="http://localhost:3000/" onClick={Logout}>
                          Log out
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
