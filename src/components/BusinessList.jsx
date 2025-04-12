import React from 'react';
import BusinessItem from './BusinessItem';
import '../styles/BusinessList.scss';

const BusinessList = ({ businessLines }) => {
    return (
        <div className="business-list">
            {businessLines.map((item, index) => (
                <BusinessItem key={index} item={item} />
            ))}
        </div>
    );
};

export default BusinessList;