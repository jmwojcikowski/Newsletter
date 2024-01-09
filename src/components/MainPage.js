import React, { useState, useEffect} from 'react';
import SignUpMobile from "../assets/images/mobile.svg";
import SignUpDesktop from "../assets/images/desktop.svg"
import IconList from "../assets/images/icon-list.svg";
import { useNavigate } from 'react-router-dom';

const validateEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim());
};

function MainPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const submitEmail = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setEmailError("");
      console.log("send mail to server");
      // Assuming you want to navigate to '/my-component'
      navigate('/ThankYou', { state: { email } });
    } else {
      setEmailError("Valid email required");
    }
  };

  const setEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSrc = () => {
    return windowWidth < 900 ? SignUpMobile : SignUpDesktop;
  };

  return (
    <div className="App">
      <div className='container'>
      <div className="mainImg">
        <img src={getSrc()} alt="Responsive" />
      </div>
      <div className="component">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        
        <div className="element">
          <img src={IconList} alt="Description" />
          <p> Product discovery and building what matters</p>
        </div>

        <div className="element">
          <img src={IconList} alt="Description" />
          <p>Measuring to ensure updates are a success</p>
        </div>

        <div className="element">
          <img src={IconList} alt="Description" />
          <p>And much more!</p>
        </div>
       
        <div className='emailInfo'>
          <h5>Email address</h5>
          {emailError && <h5 className={"invalidEmail"}>{emailError}</h5>}
        </div>
  
        <form onSubmit={submitEmail}>
          <input
            className={`emailInput ${emailError ? 'invalidInput' : ''}`}
            onChange={setEmailValue}
            value={email} 
            placeholder="email@company.com"
          /> 
          <button className="emailButton" type="submit">
            Subscribe to monthly newsletter now
          </button>
        </form>
      </div>
    </div></div>
  );
}

export default MainPage;
