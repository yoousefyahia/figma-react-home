import "./Navbar.scss"
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
export default function Navbar() {
  return (
    <nav id="nv">
      <div className="navbar-a">
       <h1 className="head">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
       <button className="shop-btn">ShopNow</button>
      </div>
      <div className="navbar-b">
        <h1 className="fb" >Exclusive</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">signup</a></li>
        </ul>
        <div className="nav-actions">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <FaSearch className="icon-search" />
          </div>
          <CiHeart  className="icon-heart" />
          <IoCartOutline  className="icon-cart" />
        </div>
      </div>
    </nav>
  )
}