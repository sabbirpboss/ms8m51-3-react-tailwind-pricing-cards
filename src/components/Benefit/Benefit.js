import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Benefit = ({benefit}) => {
    const {benefits} = benefit;
  return (
    <p className="flex items-center mt-2">
      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3"></CheckCircleIcon>
      {benefit}
    </p>
  );
};

export default Benefit;
