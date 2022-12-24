import React from "react";
import logo from "../../logo.svg";
import './cart.css'

const Cart = () => {
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
          <button>
            <span>10</span>s
          </button>
          <button>
            <span>20</span>s
          </button>
          <button>
            <span>30</span>s
          </button>
          <button>
            <span>40</span>s
          </button>
          <button>
            <span>50</span>s
          </button>
        </div>

        <h2 style={{ marginBottom: "-10px", marginTop: "35px" }}>
          Exercise Details
        </h2>
        <div className="exercise">
          <div className="exercise-time">
            <p> Exercise time </p>
            <span>200 seconds</span>
          </div>

          <div className="break-time">
            <p> Break time </p>
            <span>200 seconds</span>
          </div>
        </div>
        <button className="complete-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Cart;
