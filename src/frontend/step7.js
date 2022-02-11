import React from 'react';

import {  useNavigate  } from "react-router-dom";
import '../newapp/css/pricing.css';
import '../newapp/css/main.css';
function Step7() {
    const navigate = useNavigate();
    
  const navigateTo = () => navigate('/dashboard');

  return (
     <>
		<h1>Dashboard</h1>
     </>
  );
}
export default Step7;