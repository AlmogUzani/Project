<header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li class="nav-item">
                        <a style="font-weight: bold;" class="nav-link active" aria-current="page" href="#">Home Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Log in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="cart" style="height:30px ;width:30px">Cart</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User Info
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Personal settings</a></li>
                        <li><a class="dropdown-item" href="#">Purchase history</a></li>
                        <li><a class="dropdown-item" href="#">Wishlist</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Log out</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
        </nav>
    </header>
    <main>
        <div style="--bs-gap: 1rem; ">
            <div class="row align-items-start">
                <div class="col-5" style="text-align: center;">
                    <div class="card-header"><h5>Item description</h5></div>
                    <div class="card text-bg-light mb-3" style=" height:100%">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src="https://fomantic-ui.com/images/wireframe/image.png" class="d-block w-100" alt="..." >
                              </div>
                              <div class="carousel-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" class="d-block w-100" alt="..." >
                              </div>
                              <div class="carousel-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png" class="d-block w-100" alt="..." >
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                <img src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg" class="card-img-top" alt="rating stars" style="height:30px;width: 70px;">
                                <span style="margin: 0px 8% 0px 8%">From 162 users</span>
                                <img src="data:image/png;base64,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" class="card-img-top" alt="heart/likes" style="height:30px;width: 30px;">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-7">
                    <div class="card text-bg-light mb-3">
                        <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Item short description</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                                                    Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                                                    Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                                                    Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content.
                              </p>
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">
                                <ul>
                                    <li>Size</li>
                                    <li>Shape</li>
                                    <li>Color</li>
                                    <li>etc</li>
                                </ul>
                              </li>
                            </ul>
                            <div class="card-body">
                                <div class="container" style="--bs-gap: 1rem">
                                    <div  style="display: flex;">
                                        <div class="col-6" style="text-align: left;">
                                            <p style="margin-top:13px">
                                                <button type="button" class="btn btn-primary btn-sm">+</button>
                                                <span style="align-items: center;margin:0 10px">X</span>
                                                <button type="button" class="btn btn-secondary btn-sm" style="margin-right:10px">-</button>
                                                Quantity: (154 pieces in stock)
                                            </p>
                                        </div>
                                        <div class="col-6" style="text-align: right;">
                                            <span><button type="button" class="btn btn-secondary">Add to cart <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="cart" style="height:50px ;width:50px"></button></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Review</button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Specifications</button>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content.</div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content.</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content,<br> Some quick example text to build on the card title and make up the bulk of the card's content,<br>
                Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </div>
    </main>
    <footer style="margin-top: 3%;">
        
    </footer>