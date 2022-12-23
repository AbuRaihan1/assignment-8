import React from "react";
import './gym.css'
const Gym = ({ gym }) => {
  const { _id, name, picture, timeRequired, about } = gym;
//   console.log(gym);
  console.log(picture);
  return (
    <div>
      <div className="gym-card">
        <img src={picture} alt="" />
        <h3>{name}</h3>
        <article>{about ?  about.slice(0,150) : 'lorem ispum dolor'}</article>
        <p>For Age : 20-25</p>
        <p>Time required : {timeRequired}</p>
        <button className="add-tolist-btn">Add To list</button>
      </div>
    </div>
  );
};

export default Gym;
