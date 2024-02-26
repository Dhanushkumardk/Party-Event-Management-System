import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import LoginPage from './Auth/Login'
import RegPage from './Auth/Register'
import AdminLogin from './Auth/AdminLogin';
import AdDashboard from './Admin/AdDashboard';
import AdEvents from './Admin/AdEvents';
import AdFeedback from './Admin/AdFeedback';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Feedback from './Pages/Feedback';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <Router>
        <Routes>
        
          <Route path="/"element={<LoginPage />}></Route>
          <Route path="/regPage" element={<RegPage />}></Route>
          <Route path="/adminLogin" element={<AdminLogin />}></Route>


          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>

          <Route path="/admin/dashboard" element={<AdDashboard />}></Route>
          <Route path="/admin/events" element={<AdEvents />}></Route>
          <Route path="/admin/feedback" element={<AdFeedback />}></Route>
          

        </Routes>
    </Router>

    </>
  )
}

export default App
