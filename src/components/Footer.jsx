import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        {/* ----Left section */}
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            repellendus dicta libero non, ab quaerat accusantium numquam aut.
            Voluptatem at doloribus blanditiis earum vero reiciendis similique
            minus voluptatum iure?
          </p>
        </div>

        {/* ----Center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>

            <li>About us</li>

            <li>Contact us</li>

            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----Right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 123456789</li>
            <li>narsingdev@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ----Copyright Text */}
      <div>
        <hr className="border-gray-400" />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 Narsing - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
