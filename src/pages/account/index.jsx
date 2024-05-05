import React from 'react';
import './UserProfile.css';
import Header from '@/components/header'

const UserProfile = () => {
  return (
    <div>
      <Header />
      <div className="profile-header">
        <img src="https://via.placeholder.com/150" alt="User Avatar" />
        <h1>User Name</h1>
        <p>User Bio</p>
      </div>
      <div className="profile-details">
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Age: 30</p>
        <p>Address: 123 Main St, City, State</p>
      </div>
      <button>Edit Profile</button>
    </div>
  );
}

export default UserProfile;