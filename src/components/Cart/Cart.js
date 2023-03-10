import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import logo from "../../logo.svg";
import "./cart.css";

const Cart = ({ exTime }) => {
  const [takeBreak, setTakeBreak] = useState(0);

  const breakHandler = (e) => {
    setTakeBreak(e.target.value);
    let isItStored = localStorage.getItem("break-time");
    let parseIsItStored = JSON.parse(isItStored);

    if (parseIsItStored) {
      localStorage.setItem("break-time", JSON.stringify(takeBreak));
    } else {
      localStorage.setItem("break-time", JSON.stringify(takeBreak));
    }
  };

  const completeActivity = () => {
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "wow! you've complete your activity",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    let updateSetCart;
    let isItStored = localStorage.getItem("break-time");
    let parseIsItStored = JSON.parse(isItStored);
    updateSetCart = parseIsItStored;
    setTakeBreak(updateSetCart);
  }, []);

  return (
    <div>
      <div className="cart-container">
        <div className="userArea">
          <img src={logo} alt="" />
          <div>
            <h4>Abu Raihan</h4>
            <span>Dhaka,Bangladesh</span>
          </div>
        </div>
        <div className="userBodyInfo">
          <div>
            <h4>
              75<small>kg</small>
            </h4>
            <span>weight</span>
          </div>
          <div>
            <h4>6.5</h4>
            <span>Height</span>
          </div>
          <div>
            <h4>
              25<small>yrs</small>
            </h4>
            <span>Age</span>
          </div>
        </div>

        <h2 style={{ marginBottom: "5px", marginTop: "35px" }}>Add A Break</h2>
        <div className="break-btns">
          <input type={"button"} value={10} onClick={breakHandler} />
          <input type={"button"} value={20} onClick={breakHandler} />
          <input type={"button"} value={30} onClick={breakHandler} />
          <input type={"button"} value={40} onClick={breakHandler} />
          <input type={"button"} value={50} onClick={breakHandler} />
        </div>

        <h2 style={{ marginBottom: "-10px", marginTop: "35px" }}>
          Exercise Details
        </h2>
        <div className="exercise">
          <div className="exercise-time">
            <p> Exercise time </p>
            <span>{exTime}s</span>
          </div>

          <div className="break-time">
            <p> Break time </p>
            <span>{takeBreak}s</span>
          </div>
        </div>
        <button className="complete-btn" onClick={completeActivity}>
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Cart;
