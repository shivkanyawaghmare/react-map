import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import ProfileModal from '../components/ProfileModal';
import CreateProfile from '../components/AddProfile';
import data from "../pages/Data.json";
import '../components/CreateProfile.css'


const Explore = () => {
  const [profileData, setProfileData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [newProfile, setNewProfile] = useState(true);

  useEffect(() => {
    setProfileData(data);
  }, []);

  const profileBtn=(newProfile)=>{
    setProfileData(data);
    setNewProfile(false)
  }

  const filteredProfileDetails = profileData.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openProfileModal = (profile) => {
    setSelectedProfile(profile);
  };

  const closeProfileModal = () => {
    setSelectedProfile(null);
  };

  const onDeleteProfile = (profileId) => {
    const updatedProfiles = profileData.filter(profile => profile.id !== profileId);
    setProfileData(updatedProfiles);
    // Update the data in local storage as well if needed
  };

 
  return (
    <section id='home'>
      <h1 className='d-flex justify-content-center'>Explore People here</h1>
      <div className='d-flex justify-content-center align-items-center m-5'>
        <input 
          type="search" 
          name="" 
          id="" 
          className='h-25 rounded-3 w-50 fs-6' 
          placeholder="Search people with their name" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center align-items-center m-lg-5'>
        {filteredProfileDetails.length > 0 ? (
          <div className="row">
            {filteredProfileDetails.map((profile, index) => (
              <div key={index} className="col-md-4 mb-4">
                <ProfileCard profile={profile} openProfileModal={openProfileModal} />
              </div>
            ))}
             <CreateProfile setProfileData={setProfileData} />
          </div>
        ) : (
          <p>No people found with name</p>
        )}
      </div>
      {selectedProfile && (
        <ProfileModal profile={selectedProfile} closeProfileModal={closeProfileModal} />
      )}
    </section>
  );
};
export default Explore;
