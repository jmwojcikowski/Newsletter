// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './MainPage';
import ThankYou from './ThankYou';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/ThankYou" element={<ThankYou />}/>
      </Routes>
    </Router>
  );
};

export default App;