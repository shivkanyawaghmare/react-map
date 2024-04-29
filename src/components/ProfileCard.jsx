import React from 'react';
import './card.css'

const ProfileCard = ({ profile, openProfileModal }) => {
  const { name, occupation, address, image } = profile;

  const handleViewOnMap = () => {
    const formattedAddress = encodeURIComponent(address.trim()); // Ensure no leading/trailing spaces
    const mapsURL = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(mapsURL, '_blank');
  };

  return (
    <div className="user-card">
      <img src={image} alt="Profile" />
      <div className="card-body">
        <h2>{name}</h2>
        <p>Name:{name} </p>
        <p>Occupation: {occupation}</p>
        <p>Address: {address}</p>
       <div className='button'>
         <div className='view-map'><button className="btn" onClick={() => openProfileModal(profile)}>View Profile</button></div>
        <div className='view-map'><button className='btn' onClick={handleViewOnMap}>View on Map</button></div>
      </div>
      </div>
    </div>
  );
}

export default ProfileCard;
