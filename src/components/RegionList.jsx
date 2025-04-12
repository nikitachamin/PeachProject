import React from 'react';
import RegionItem from './RegionItem';


const RegionList = ({ regions, activeRegion, onRegionClick, isOpen }) => {
    return (
        <div className={`map-menu ${isOpen ? "overlay-menu" : null}`}>
            {regions.map((region) => (
                <RegionItem
                    key={region}
                    region={region}
                    isActive={activeRegion === region}
                    onClick={() => onRegionClick(region)}
                />
            ))}
        </div>
    );
};

export default RegionList;