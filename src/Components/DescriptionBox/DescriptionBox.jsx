import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform where businesses sell
          their products or services to customers over the internet. It serves
          as a virtual storefront where customers can browse through various
          items, make purchases, and complete transactions entirely online.
          E-commerce websites typically feature product catalogs, shopping
          carts, secure payment gateways, and often include functionalities such
          as user accounts, customer reviews, and order tracking. These websites
          can range from small, independently operated online stores to
          large-scale platforms with a wide variety of products from multiple
          vendors. The primary goal of an e-commerce website is to facilitate
          the buying and selling of goods and services in a convenient and
          secure manner for both businesses and customers.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed description, images, prices and any valiable variations (e.g
          sizes, colors). Each product usually has its own dedicated page with
          relevant information{" "}
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
