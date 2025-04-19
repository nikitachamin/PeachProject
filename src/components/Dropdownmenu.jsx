import React, { useState, useEffect } from "react";
import "../styles/dropdown.scss";
import RegionList from "./RegionList";

const regions = {
  Все: "All",
  Москва: "Moscow",
  Центр: "Centr",
  "Северо-Запад": "North-West",
  Юг: "South",
  Волга: "Volga",
  Урал: "Ural",
  Сибирь: "Siberia",
  "Дальний Восток": "The Far East",
};

const regionsList = {
  Москва: [""],
  Центр: ["Воронеж", "Ярославль", "Белгород"],
  "Северо-Запад": ["Санкт-Петербург", "Калининград"],
  Юг: ["Ростов-на-Дону", "Краснодар", "Волгоград"],
  Волга: ["Казань", "Самара", "Уфа", "Оренбург", "Нижний Новгород"],
  Урал: ["Екатеринбург", "Челябинск", "Пермь", "Сургут", "Тюмень", "Ижевск"],
  Сибирь: ["Новосибирск", "Омск", "Томск", "Красноярск", "Иркутск"],
  "Дальний Восток": ["Хабаровск", "Владивосток"],
};

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("Все");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleRegionClick = (region) => {
    setActiveRegion(region);
  };
  const handleOutsideClick = (event) => {
    if (isOpen && !event.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  };
  const [openRegions, setOpenRegions] = useState(() => {
    // Проверка ширины экрана при первой инициализации
    const initialOpenState = window.innerWidth > 720;
    const initialRegions = Object.keys(regions).reduce((acc, region) => {
      acc[region] = initialOpenState;
      return acc;
    }, {});
    return initialRegions;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setOpenRegions((prev) => {
          const newRegions = {};
          Object.keys(prev).forEach((region) => {
            newRegions[region] = true;
          });
          return newRegions;
        });
      } else {

        setOpenRegions((prev) => {
          const newRegions = {};
          Object.keys(prev).forEach((region) => {
            newRegions[region] = false; 
          });
          return newRegions;
        });
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const toggleRegion = (region) => {
    if (window.innerWidth <= 720) {
      setOpenRegions((prevOpenRegions) => ({
        ...prevOpenRegions,
        [region]: !prevOpenRegions[region],
      }));
    }
  };

  return (
    <div className="map">
      <div className="map-top">
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-button">
            Офисы Softline
            <img
              className={`arrow ${isOpen ? "up" : "down"}`}
              src={`${process.env.PUBLIC_URL}/img/Pointer.svg`}
              alt="Pointer"
            />
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <ul className="dropdown-menu__colums">
                {Object.entries(regionsList).map(([region, cities]) => (
                  <li key={region}>
                    
                    <div
                      className="dropdown-menu__colums_region"
                      onClick={() => toggleRegion(region)}
                    >
                      {region}
                      <img
              className={`arrow arrow_mini ${openRegions[region] ? "up" : "down"}`}
              src={`${process.env.PUBLIC_URL}/img/Mini-Pointer.svg`}
              alt="Mini-Pointer"
            />
                    </div>
                    
                    {openRegions[region] && (
                      <ul className="cities-column">
                        {cities.map((city) => (
                          <li key={city}>
                            <a
                              className="dropdown-menu__colums_city"
                              href={`#${city}`}
                            >
                              {city}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <RegionList
          regions={Object.keys(regions)}
          activeRegion={activeRegion}
          onRegionClick={handleRegionClick}
          isOpen={isOpen}
        />
      </div>
      {activeRegion && (
        <div className="map-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/img/maps/${regions[activeRegion]}.svg`}
            alt={`Карта ${activeRegion}`}
            className={`map-img ${isOpen ? "overlay-img" : null}`}
          />
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
