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
      
      style={{ backgroundImage: `url(img/business/${item.image}.svg)` }}
    >
      <div onClick={toggleDescription} className={`p-wrapper ${isDescriptionVisible ? "visible" : ""} `}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '50px', marginTop: '20px', }}>
        <h2  className="business-key">
          {item.name}
        </h2>
        <img
              className={`arrow arrow_white ${isDescriptionVisible ? "up" : "down"}`}
              src={"img/White-pointer.svg"}
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
