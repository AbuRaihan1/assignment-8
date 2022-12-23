import React, { useEffect, useState } from "react";
import navLogo from "../../gymLogo.png";
import logo from "../../logo.svg";
import Gym from "./Gym/Gym";
import "./home.css";
const Home = () => {
  const [gyms, setGym] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setGym(data));
  }, []);

  return (
    <div>
      <div className="title-area">
        <img src={navLogo} className="navLogo" alt="" /> <h2>Gymmy boody</h2>
      </div>
      <h3 style={{ marginLeft: "30px" }}>Select today exercise</h3>

      {/*main content start from here */}
      <div className="home-container">
        <div className="gym-container">
          {gyms.map((gym) => (
            <Gym gym={gym} key={gym._id}></Gym>
          ))}
        </div>
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

          <h2 style={{ marginBottom: "5px", marginTop: "35px" }}>
            Add A Break
          </h2>
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
    </div>
  );
};

export default Home;
