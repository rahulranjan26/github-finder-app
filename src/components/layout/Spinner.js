import React from "react";
import spinner from "./assets/spinner.gif";
function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        className="text-center mx-auto"
        alt="loading"
        width={180}
      />
    </div>
  );
}

export default Spinner;
