import React from "react";
// import recep from "./assests/recep.jpg-1.jpg";
import room1 from "./assests/room1.jpg-1.jpg";
import small from "./assests/small.jpg-1.jpg";
import "./room.css";

const Rooms = () => {
  return (
    <div className="rooms-container" id="Rooms"> 
      <div className="room-header">
        <h3>OUR LIVING ROOM_______</h3>
        <h1>The Most Memorable Rest Time Starts Here.</h1>
      </div>
      
      <div className="room-main">
        <div className="room-box">
          <img src={small} alt="Cozy Haven Room" />
          <h3>Cozy Haven Room</h3>
          <p>
            Escape to comfort in our Cozy Haven Room, a snug retreat designed
            for intimate relaxation.
          </p>
          <p>
            Starting from <b>Rs. 1000/night</b>
          </p>
          <div className="book-button">
            <button>
              <a href="https://api.whatsapp.com/send?phone=919007062180">
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
        <div className="room-box">
          <img src={room1} alt="Spacious Serenity Suite" />
          <h3>Spacious Serenity Suite</h3>
          <p>
            Indulge in luxury and ample space in our Spacious Serenity Suite,
            where tranquility meets roomy elegance.
          </p>
          <p>
            Starting from <b>Rs. 1500/night</b>
          </p>
          <div className="book-button">
            <button>
              <a href="https://api.whatsapp.com/send?phone=919007062180">
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
