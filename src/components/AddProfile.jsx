// CreateProfile.jsx

import React, { useState } from 'react';
import './CreateProfile.css'; // Import CSS file for styling
import data from '../pages/Data.json'
const CreateProfile = ({setProfileData}) => {
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
    console.log('Submitting new profile:',newProfile);
    alert('Profile created succsessfully')
    // Update the profile data in memory (you can replace this with your own logic)
    const updatedData = [...data, newProfile];
    setProfileData(updatedData);
    // Save the updated data to local storage
    localStorage.setItem('profileData', JSON.stringify(updatedData));

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
//   const exportToJSON = () => {
//     // Assuming your profile data is stored in state variable profileData
//     const profileDataJSON = JSON.stringify(profileData);
//     // Use FileSaver.js or any other method to save the JSON data to Data.json
//     // For example, using FileSaver.js:
//     // import { saveAs } from 'file-saver';
//     // const blob = new Blob([profileDataJSON], { type: 'application/json' });
//     // saveAs(blob, 'Data.json');
//   };


  return (
    <div className='createpro' >
        <div className="create-profile-container pr-name">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group pr">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}required />
        </div>
        <div className="form-group pr input">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={newProfile.age} onChange={(e) => setNewProfile({ ...newProfile, age: e.target.value })}required />
        </div>
        <div className="form-group pr">
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" value={newProfile.occupation} onChange={(e) => setNewProfile({ ...newProfile, occupation: e.target.value })}/>
        </div>
        <div className="form-group pr">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={newProfile.address} onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}required/>
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
        <button type="submit" className="btn btn-primary">Save Profile</button>
      </form>
    </div>
    </div>
  );
};

export default CreateProfile;
