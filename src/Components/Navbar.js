function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a style={{fontWeight: 'bold'}} className="nav-link active" aria-current="page" href="#">MamiMevi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="cart" style={{height: '30px', width: '30px'}} />Cart</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User Info
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Personal settings</a></li>
                            <li><a className="dropdown-item" href="#">Purchase history</a></li>
                            <li><a className="dropdown-item" href="#">Wishlist</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Log out</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </header>
    )
}
  
export default Navbar
