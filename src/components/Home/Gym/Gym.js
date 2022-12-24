import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gymImageTwo from "../../../images/gym1.jpg";
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
    let x;
    for (let singleAddBtn of addBtns) {
      x = singleAddBtn;
      singleAddBtn.addEventListener("click", function () {
        this.classList.add("click-after-addtolist-btn");
        this.setAttribute("disabled", true);
        this.textContent = "Added";
      });
    }
    toast.success("Added This Item in Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <div className="gym-card">
        <img src={`${gymImageTwo}`} alt="" />
        <h3>{name}</h3>
        <article>{about ? about.slice(0, 150) : "lorem ispum dolor"}</article>
        <p>For Age : 20-25</p>
        <p>Time required : {timeRequired}s</p>
        <button className="add-tolist-btn" onClick={handleAddTolist}>
          Add To list
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Gym;
