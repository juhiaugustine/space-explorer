import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/Email_Feature/email_feature';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
