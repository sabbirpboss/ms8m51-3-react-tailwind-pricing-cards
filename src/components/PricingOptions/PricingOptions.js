import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOptions = ({ pricingOption }) => {
  const { name, price, benefits } = pricingOption;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold text-white">
        {name}
      </h2>
      <p className="mt-3">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div className="mt-5">
        <h3 className="text-indigo-500 text-left text-xl">Benefits:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-500 flex justify-center items-center w-full py-2 font-bold rounded mt-5 text-white hover:text-green-700 duration-200">
        Buy Now
        <ArrowRightIcon className="w-4 h-4 ml-2"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOptions;
