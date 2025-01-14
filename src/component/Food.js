import { useState } from "react";
import WorldCup from "./WorldCup";
import * as foodImg from "./foodImgUpload";

const Food = () => {
  const foods = [
    {
      id: 0,
      name: "쌀국수",
      src: foodImg.food0,
    },
    {
      id: 1,
      name: "라면",
      src: foodImg.food1,
    },
    {
      id: 2,
      name: "삼겹살",
      src: foodImg.food2,
    },
    {
      id: 3,
      name: "부대찌개",
      src: foodImg.food3,
    },
    {
      id: 4,
      name: "피자",
      src: foodImg.food4,
    },
    {
      id: 5,
      name: "돈까스",
      src: foodImg.food5,
    },
  ]

  return (
    <div className="Food">
      <WorldCup arr={foods} />
    </div>
  );
};

export default Food;