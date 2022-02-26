import React from "react";
import Product from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612247512_114-p-skachat-fioletovo-rozovii-fon-137.jpg"
          alt="card-img"
          height="550px"
        />
        <div className="card-img-overlay d-flex  flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <Product />

    </div>
  );
}
