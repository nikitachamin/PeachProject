import React, { useState } from "react";
import "../styles/BusinessItem.scss";

const BusinessItem = ({ item }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div
      className={`business-item ${isDescriptionVisible ? "visible" : ""}`} 
      
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/business/${item.image}.svg)` }}
    >
      <div onClick={toggleDescription} className={`p-wrapper ${isDescriptionVisible ? "visible" : ""} `}>
        <div style={{ display: 'flex', justifyContent: `flex-start`, alignItems: 'center', gap: '50px', marginTop: '20px', }}>
        <h2  className="business-key">
          {item.name}
        </h2>
        <img
              className={`arrow arrow_white ${isDescriptionVisible ? "up" : "down"}`}
              src={`${process.env.PUBLIC_URL}/img/White-pointer.svg`}
              alt="Pointer"
            />
            </div>
        {isDescriptionVisible && (
          <p className="business-description">{item.description}</p>
       
        )}
      </div>
    </div>
  );
};

export default BusinessItem;
