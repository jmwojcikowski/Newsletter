import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import SuccesImg from "../assets/images/icon-success.svg"
function ThankYou() {
  const location = useLocation();
  const { email } = location.state || {};

  const navigate = useNavigate();

  const handleGoBack = () => {
    // Nawiguj do głównej ścieżki
    navigate('/');
  };
  return (
    <div className="ThankYouPage">
   <div className="component componentThanks">
    
    <div><img src={SuccesImg} alt="description"/></div>
    <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
      <button className="emailButton dismissButton" type="button" onClick={handleGoBack}>
            Dismiss message
          </button>
   </div></div>
  );
}

export default ThankYou;