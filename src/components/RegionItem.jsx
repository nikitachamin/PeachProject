import React from 'react';


const RegionItem = ({ region, isActive, onClick }) => {
    return (
        <span
            onClick={onClick}
            className={`map-menu__region ${isActive? 'active' : null}`}
        >
            {region}
        </span>
    );
};

export default RegionItem;