import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            atque ratione vel expedita delectus placeat nemo harum architecto?
            Natus exercitationem voluptatem sunt, maxime molestiae dolores
            assumenda amet dignissimos nisi commodi.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">Get in Touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 1236547890</li>
                <li>contact@wearwave.com</li>
            </ul>
        </div>


      </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">
                Copyright 2024@ WareWave.com- All Right Reserved
            </p>
        </div>


    </div>
  );
};

export default Footer;
