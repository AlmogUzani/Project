import { Link } from "react-router-dom";
import { Logout } from "../DAL/api";
//let loggedIn = false;
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("id");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
function Navbar() {
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
              <li>&nbsp;&nbsp;</li>
              {getCookie("id") === "" && (
                <li className="nav-item">
                  <Link to="/login">Login</Link>
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
                        <a href="" onClick={Logout}>
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
