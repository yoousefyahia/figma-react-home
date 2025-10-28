import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
export default function SidebarWithSlider() {
  return (
    <div className="sws">

      {/* Sidebar */}
      <Sidebar className="left-side">
        <Menu>
          <SubMenu label="Woman’s Fashion">
            <MenuItem>Sub item 1</MenuItem>
            <MenuItem>Sub item 2</MenuItem>
          </SubMenu>
          <SubMenu label="Men’s Fashion">
            <MenuItem>Sub item 1</MenuItem>
            <MenuItem>Sub item 2</MenuItem>
          </SubMenu>
          <MenuItem>Electronics</MenuItem>
          <MenuItem>Home & Lifestyle</MenuItem>
          <MenuItem>Medicine</MenuItem>
          <MenuItem>Sports & Outdoor</MenuItem>
          <MenuItem>Baby’s & Toys</MenuItem>
          <MenuItem>Groceries & Pets</MenuItem>
          <MenuItem>Health & Beauty</MenuItem>
        </Menu>
      </Sidebar>

      {/* Slider */}
      <div className="right-side">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {/* Slide 1 */}
          <div className="slider-containt">
            <div className="slider-text">
              <div className="product-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
                  alt="Apple Logo"
                  className="product-icon"
                />
                <p>iPhone 14 Series</p>
              </div>
              <h2 >Up to 10% off Voucher</h2>
              <button>Shop Now →</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop&crop=center"
              alt="iPhone 14 Series"
              className="product-image"
            />
          </div>

          {/* Slide 2  */}
          <div className="slider-containt">
            <div className="slider-text">
              <div className="product-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
                  alt="Samsung Logo"
                  className="product-icon"
                />
                <p>Samsung Galaxy S23</p>
              </div>
              <h2 >Up to 15% off Voucher</h2>
              <button>Shop Now →</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&crop=center"
              alt="Samsung Galaxy S23"
              className="product-image"
            />
          </div>

          {/* Slide 3 */}
          <div className="slider-containt">
            <div className="slider-text">
              <div className="product-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
                  alt="Apple Logo"
                  className="product-icon"
                />
                <p>MacBook Pro</p>
              </div>
              <h2 >Up to 20% off Voucher</h2>
              <button>Shop Now →</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop&crop=center"
              alt="MacBook Pro"
              className="product-image"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
