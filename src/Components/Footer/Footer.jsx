import React from "react";
import logoFooter from "../../assets/logoFooter.png";

const Footer = () => {
  return (
    <div className=" bg-black text-white pb-6 pt-80 z-10">
      <div className=" flex justify-center pt-7 pb-5">
        <img src={logoFooter} alt="" />
      </div>
      <div className=" grid grid-cols-3  gap-10 pb-12 mx-auto max-w-5xl">
        <div>
          <h1 className=" text-xl font-bold">About Us</h1>
          <p className=" mx-auto ">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div>
          <h1 className=" text-xl font-bold">Quick Links</h1>
          <nav>
            <li>
              {" "}
              <a href="">Home</a>
            </li>
            <li>
              {" "}
              <a href="">Service</a>
            </li>
            <li>
              {" "}
              <a href="">About</a>
            </li>
            <li>
              {" "}
              <a href="">Contact</a>
            </li>
          </nav>
        </div>

        <div>
          <h1 className=" text-xl font-bold">Subscribe</h1>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <div className="join my-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered join-item text-black bg-white rounded-l-lg p-2"
              required
            />
            <button className="btn bg-amber-300 join-item text-black rounded-r-lg p-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className=" py-6 flex justify-center">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
