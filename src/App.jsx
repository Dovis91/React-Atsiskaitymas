import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUserLoggedIn(true);
      navigate('/');
    }
  }, []);

  return (
    <>
      <Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setUserLoggedIn={setUserLoggedIn} />}
        />
        <Route path="/add" element={<Add />} />
        <Route
          path="/"
          element={
            <Home
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={setUserLoggedIn}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
