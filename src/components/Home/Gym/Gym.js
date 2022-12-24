import React from "react";
import "./gym.css";
const Gym = ({ gym, exTime, setExTime }) => {
  const { name, picture, timeRequired, about } = gym;

  const handleAddTolist = () => {
    if (exTime) {
      setExTime(exTime + timeRequired);
    } else {
      setExTime(timeRequired);
    }
    
    let addBtns = document.querySelectorAll(".add-tolist-btn");
    let singleButton;
    for (let singleAddBtn of addBtns) {
      singleButton = singleAddBtn;
      singleButton.addEventListener("click", function () {
        this.classList.add("click-after-addtolist-btn");
        this.setAttribute("disabled", true);
        this.textContent = "Added";
      });
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
