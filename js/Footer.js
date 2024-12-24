function createFooter() {
    return `
    <footer class="footer">
        <div class="footer-container">
            <!-- ÞÓã Exclusive -->
            <div class="footer-section">
                <h3>Exclusive</h3>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div class="subscribe">
                    <input type="email" placeholder="Enter your email">
                </div>
            </div>

            <!-- ÞÓã Support -->
            <div class="footer-section">
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>

            <!-- ÞÓã Account -->
            <div class="footer-section">
                <h3>Account</h3>
                <ul>
                    <li><a href="./MyAccount.html">My Account</a></li>
                    <li><a href="./LogIn.html">Login / Register</a></li>
                    <li><a href="./cart.html">Cart</a></li>
                    <li><a href="./WishList.html">Wishlist</a></li>
                    <li><a href="./Checkout.html">Check out</a></li>
                </ul>
            </div>

            <!-- ÞÓã Quick Link -->
            <div class="footer-section">
                <h3>Quick Link</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <!-- ÞÓã Download App -->
            <div class="footer-section">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div class="app-links">
                    <div class="qr-code"><img src="public/images/QrCode.jpg" alt="QR Code" /></div> <!-- ÖÚ ÕæÑÉ ÑãÒ QR åäÇ -->
                    <div class="store-links">
                        <p>Get it on Google Play</p>
                        <p>Download on the App Store</p>
                    </div>
                </div>
                <div class="social-icons">
                    <a href="https://www.facebook.com/"><img src="public/images/facebook.png" alt="Facebook" /></a> <!-- ÃíÞæäÉ ÝíÓÈæß -->
                    <a href="https://www.x.com/"><img src="public/images/twitter.png" alt="Twitter" /></a> <!-- ÃíÞæäÉ ÊæíÊÑ -->
                    <a href="https://www.instagram.com/"><img src="public/images/instagram.png" alt="Instagram" /></a> <!-- ÃíÞæäÉ ÇäÓÊÌÑÇã -->
                    <a href="https://www.linkedin.com/"><img src="public/images/Linkedin.png" alt="LinkedIn" /></a> <!-- ÃíÞæäÉ áíäßÏÅä -->
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; Copyright Rimel 2022. All rights reserved</p>
        </div>
    </footer>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.querySelector('#footer'); 
    footerContainer.innerHTML += createFooter(); 
});