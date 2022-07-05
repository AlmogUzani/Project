import React from "react";

function ProductDetails() {
        return (
        <div className="full">
            <header className="App-header">
            <h3>Product page</h3>
            </header>
            <main>
            <div id="itemPicture" style={{backgroundColor: 'brown'}}>
                <span>item name</span>
                <div>
                <img src="images/Groceries.jpg" alt="pic" className="img example" />
                </div>
                <div id="underItemPicture">
                <img className="iconL" src="images/icons/5stars.jpg" alt="rating" />
                <span>stars from x users</span>
                <img className="iconR" src="images/icons/likes.jpg" alt="likes" />
                </div>
            </div>
            <div id="itemDescription">
                <h3>Item short description</h3>
                xxxxxxxxxxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxxxxxxx<br />
                xxxxxxxxxxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxxxxxxx<br />
                <ul>
                <li>Size</li>
                <li>Shape</li>
                <li>Color</li>
                <li>etc</li>
                </ul>
                <div id="quantity">
                <span>Quantity: (154 pieces in stock)<br /><br /><br /><br /></span>
                <img className="iconL" src="images/icons/plus.png" alt="plus" />
                <span id="quantityOf">x</span>
                <img className="iconR" src="images/icons/minus.png" alt="minus" />
                </div>
                <div id="addToCart">
                <span>Add to cart</span>
                <img className="iconR " src="images/icons/cart.png" alt="cart" />
                </div>
            </div>
            </main>
            <footer>
            </footer>
        </div>
        );
    }

export default ProductDetails