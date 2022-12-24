import React from "react";
import "./gym.css";
const Gym = ({ gym, exTime, setExTime }) => {
  const { _id, name, picture, timeRequired, about } = gym;

  const handleAddTolist = () => {
    let addtoTime = timeRequired;
    let setAddToTime = addtoTime + timeRequired;
    if (exTime) {
      setExTime(exTime + setAddToTime);
    } else {
      setExTime(addtoTime);
    }
  };

  return (
    <div>
      <div className="gym-card">
        <img src={picture} alt="" />
        <h3>{name}</h3>
        <article>{about ? about.slice(0, 150) : "lorem ispum dolor"}</article>
        <p>For Age : 20-25</p>
        <p>Time required : {timeRequired}s</p>
        <button className="add-tolist-btn" onClick={handleAddTolist}>
          Add To list
        </button>
      </div>
    </div>
  );
};

export default Gym;
