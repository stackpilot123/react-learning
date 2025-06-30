import React from "react";

const Card = ({title="rim shah",description="he is bad boy"}) => {
  return (
    <>
      <div className="max-w-xs h-[500px] p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/32603451/pexels-photo-32603451.jpeg?_gl=1*1c96knf*_ga*NTI2ODM0MzQ1LjE3NDUxNTc4MjI.*_ga_8JE65Q40S6*czE3NTEwNDU1NDckbzIkZzEkdDE3NTEwNDU5NDgkajMxJGwwJGgw"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </>
  );
};

export default Card;
