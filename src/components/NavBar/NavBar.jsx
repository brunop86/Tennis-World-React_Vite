import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" height="100px" />
            <div>
                <ul>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Strings</a></li>
                    <li><a href="#">Equipment</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar