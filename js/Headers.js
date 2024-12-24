function createHeaders() {
    return `
      <header class="top-header">
        <div class="announcement">Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%! 
            <a href="#">ShopNow</a>
        </div>
        <div class="language-dropdown">
            <span class="dropbtn">English<span class="arrow">&#9662;</span></span>
            <div class="dropdown-content">
                <a href="#">English</a>
                <a href="#">Arabic</a>
            </div>
        </div>
      </header>

      <!---Second Header------------------------------------------>

      <header class="Secoundheader">
        <a class="logo" href="./index.html">Exclusive</a>
        <nav>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./Contect.html">Contact</a></li>
                <li><a href="./About.html">About</a></li>
                <li class="SignUp"><a href="./SignUp.html">Sign Up</a></li>
            </ul>
        </nav>

        <div class="header-right">
            <div class="search-bar">
                <input type="search" placeholder="What are you looking for?">
            </div>
        </div>

        <div class="IconHeader">
            <a href="#"><img src="public/images/heart.png" alt="Favorite" /></a>
            <a href="./cart.html"><img src="public/images/shopping-cart.png" alt="Cart" /></a>
            <a href="#"><img src="public/images/user.png" alt="User" /></a>
        </div>
      </header>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const HeadersContainer = document.querySelector('#Header');
    HeadersContainer.innerHTML += createHeaders();
});
