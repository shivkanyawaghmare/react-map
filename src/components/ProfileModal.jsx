import React from 'react';
import './card.css'
import Instagram from '../assets/Vector/Instagram.png';
import LinkedIn from '../assets/Vector/LinkedIn.png';

const ProfileModal = ({ profile, closeProfileModal, onUpdateProfile, onDeleteProfile }) => {
  const { id, name, age, location, occupation, interests, address, linkedin, instagram, image } = profile;
  const handleUpdateProfile = () => { 
    console.log('Updating profile:', profile);
    // onUpdateProfile()
    closeProfileModal();
  };
  const handleDeleteProfile = () => {
    // onDeleteProfile();
    closeProfileModal();
  };
  return (
    <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999, overflow: 'auto'}}>
      <div className="modal-content" style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '80%' }}>
        <span className="close" onClick={closeProfileModal} style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold', cursor: 'pointer', marginTop: '-20px', marginRight: '-20px' }}>&times;</span>
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>State: {location}</p>
            <p>Occupation: {occupation}</p>
            <p>Interests: {interests}</p>
            <p>Address: {address}</p>
            <div>
              <img src={LinkedIn} alt="LinkedIn" width="40" style={{ paddingRight: "0.5rem" }} />
              <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div>
              <img src={Instagram} alt="Instagram" width="40" style={{ paddingRight: "0.5rem" }} />
              <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleUpdateProfile}>Update Profile</button>
            <button className="btn btn-danger mt-3" onClick={handleDeleteProfile}>Delete Profile</button>
          </div>
          <div className="col-lg-5 p-4">
            <img src={image} alt="Profile" height="300px" style={{ borderRadius: '1rem', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
