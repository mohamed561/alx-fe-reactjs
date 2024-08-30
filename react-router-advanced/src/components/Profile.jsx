import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const ProfileDetails = () => <h3>Profile Details</h3>;
const ProfileSettings = () => <h3>Profile Settings</h3>;

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <ul>
          <li><Link to="">Details</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;