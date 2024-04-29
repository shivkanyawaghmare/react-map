// CreateProfile.jsx

import React, { useState } from 'react';
import './CreateProfile.css'; // Import CSS file for styling

const CreateProfile = ({OnSaveProfile}) => {
  const [newProfile, setNewProfile] = useState({
    name: '',
    age: '',
    occupation: '',
    address: '',
    interests: '',
    location: '',
    instagram: '',
    linkedin: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(newProfile);
    OnSaveProfile(newProfile);
    // Clear form fields after submission
    setNewProfile({
      name: '',
      age: '',
      occupation: '',
      address: '',
      interests: '',
      location: '',
      instagram: '',
      linkedin: '',
      image: ''
    });
  };

  return (
    <div className='createpro' >
        <div className="create-profile-container pr-name">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group pr">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}placeholder="Name" required />
        </div>
        <div className="form-group pr input">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={newProfile.age} onChange={(e) => setNewProfile({ ...newProfile, age: e.target.value })}placeholder="Age" required />
        </div>
        <div className="form-group pr">
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" value={newProfile.occupation} onChange={(e) => setNewProfile({ ...newProfile, occupation: e.target.value })}placeholder="Occupation" />
        </div>
        <div className="form-group pr">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={newProfile.address} onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })} placeholder="Address" required/>
        </div>
        <div className="form-group pr">
          <label htmlFor="interests">Interests:</label>
          <input type="text" id="interests" value={newProfile.interests} onChange={(e) => setNewProfile({ ...newProfile, interests: e.target.value })} />
        </div>
        <div className="form-group pr">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={newProfile.location} onChange={(e) => setNewProfile({ ...newProfile, location: e.target.value })} />
        </div>
        <div className="form-group pr">
          <label htmlFor="instagram">Instagram:</label>
          <input type="text" id="instagram" value={newProfile.instagram} onChange={(e) => setNewProfile({ ...newProfile, instagram: e.target.value })} />
        </div>
        <div className="form-group pr">
          <label htmlFor="linkedin">Linkedin:</label>
          <input type="text" id="linkedin" value={newProfile.linkedin} onChange={(e) => setNewProfile({ ...newProfile, linkedin: e.target.value })} />
        </div>
        <div className="form-group pr">
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" value={newProfile.image} onChange={(e) => setNewProfile({ ...newProfile, image: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary">Create Profile</button>
      </form>
    </div>
    </div>
  );
};

export default CreateProfile;
