import { useState } from "react";

const Food = () => {
    const [imgArr, setImgArr] = useState([
        {
          id: 0,
          src: '../img/food/0'
        },
        {
          id: 1,
          src: '../img/food/1'
        },
        {
          id: 2,
          src: '../img/food/2'
        },
        {
          id: 3,
          src: '../img/food/3'
        },
        {
          id: 4,
          src: '../img/food/4'
        },
        {
          id: 5,
          src: '../img/food/5'
        },
      ]);
    
      imgArr.sort(() => Math.random() - 0.5)

    return (
        <div className="Food">
            {imgArr.map(e => (
              <h6>{e.id}</h6>
            ))}
        </div>
    );
};

export default Food;