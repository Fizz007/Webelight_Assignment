import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating({ rating, style, onClick }) {
  return (
    <>
      {[
        ...Array(5)].map((ele, index) => (
          <span key={index} onClick={() => onClick(index)} style={style}>
            {rating > index ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        ))
      }
    </>
  );
}

export default Rating;
