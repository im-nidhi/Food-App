import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      alert("Signed out successfully!");
      navigate('/');
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <button onClick={handleSignout}>Sign Out</button>
  );
};

export default Signout;
