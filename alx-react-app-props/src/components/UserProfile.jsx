import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Ensure the path is correct

const UserProfile = () => {
    const { name, age, bio } = useContext(UserContext);

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
};

export default UserProfile;
