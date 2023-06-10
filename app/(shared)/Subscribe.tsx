import React from "react";

const Subscribe = () => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">Stay up to date</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Leave us your email and receive radio astronomy news daily
      </p>
      <input
        type="text"
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter email address"
      />
      <button className="bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;