import React, { useEffect, useState } from "react";
import navLogo from "../../gymLogo.png";
import Cart from "../Cart/Cart";
import Gym from "./Gym/Gym";
import "./home.css";

const Home = () => {
  const [gyms, setGym] = useState([]);
  const [exTime, setExTime] = useState(0);
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
            <Gym
              gym={gym}
              key={gym._id}
              exTime={exTime}
              setExTime={setExTime}
            ></Gym>
          ))}
        </div>

        <div className="cart-here">
          <Cart exTime={exTime} setExTime={setExTime}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
