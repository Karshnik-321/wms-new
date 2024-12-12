import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Header from './components/Features/Header';
import ChatTag from './components/Features/ChatTag';
import Horoscope from './components/Products/Astrology/Horoscope';
import Campaigns from './components/Services/Notification/Campaigns';
import Listing from './components/AiHub/Webstories/Listing';
import Registrations from './components/CDP/Registrations/Registrations';
import ProgressBar from './components/Global/ProgressBar';
import Demographics from './components/CDP/Registrations/Demographics';
import Login from './pages/Login';
import Anonymous from './components/CDP/Anonymous/Anonymous';
import Categories from './components/CDP/Anonymous/Categories';
import Registered from './components/CDP/Anonymous/Registered';
import Authors from './components/CDP/Anonymous/Authors';


const RouteChangeLoader = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
      setLoading(true); // Start loading on route change

      const timer = setTimeout(() => setLoading(false), 100); // Stop loading after delay
      return () => clearTimeout(timer); // Clean up the timer
  }, [location, setLoading]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Add the classes to the <html> element
    document.documentElement.classList.add('h-full', 'bg-white');
    document.body.classList.add('h-full');

    // Cleanup function to remove classes if the component is unmounted
    return () => {
      document.documentElement.classList.remove('h-full', 'bg-white');
      document.body.classList.remove('h-full');
    };
  }, []);
  return (
    <Router>
        <ProgressBar isLoading={isLoading} />
        <RouteChangeLoader setLoading={setIsLoading} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features/header" element={<Header />} />
          <Route path="/features/chat-tag" element={<ChatTag />} />
          <Route path="/products/astrology/horoscope" element={<Horoscope />} />
          <Route path="/services/notification/campaigns" element={<Campaigns />} />
          <Route path="/ai-hub/webstories/listing" element={<Listing />} />
          <Route path="/cdp/registrations" element={<Registrations />} />
          <Route path="/cdp/registrations/demographics" element={<Demographics />} />
          <Route path="/cdp/anonymous" element={<Anonymous />} />
          <Route path="/cdp/anonymous/registered" element={<Registered />} />
          <Route path="/cdp/anonymous/cricket" element={<Categories />} />
          <Route path="/cdp/anonymous/pragya-bharati" element={<Authors />} />
        </Routes>
    </Router>
  );
}

export default App;
