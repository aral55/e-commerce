import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";


const ProductDisplay = (props) => {

  const { product } = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Discover comfort and style with our exquisite knitted pullover shirt
          collection. Crafted from premium yarns, our pullovers offer unrivaled
          softness and breathability, ensuring all-day comfort. With a range of
          timeless designs including crew neck, V-neck, and turtleneck, each
          piece exudes versatility and elegance. Perfect for casual outings or
          cozy evenings in, our knitted pullovers effortlessly elevate your
          wardrobe essentials. Explore our selection today and indulge in the
          luxurious warmth of knitwear.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div className="product-size-option">S</div>
            <div className="product-size-option">M</div>
            <div className="product-size-option">L</div>
            <div className="product-size-option">XL</div>
            <div className="product-size-option">XXL</div>
          </div>
        </div>
        <button on onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women , T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
