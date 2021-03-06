import { Link, useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ userLoggedIn, setUserLoggedIn }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setUserLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      {userLoggedIn ? (
        <ul className="ulList">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/World_Surf_League_Logo_2020.png"
            alt="soundCloud"
          />
          <Link to="/">
            <li className="listItem">Home</li>
          </Link>
          <Link to="add">
            <li className="listItem">Add</li>
          </Link>
          <Link to="/" onClick={() => logout()}>
            <li className="listItem">Logout</li>
          </Link>
        </ul>
      ) : (
        <ul className="ulList">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/World_Surf_League_Logo_2020.png"
            alt="soundCloud"
          />
          <Link to="/">
            <li className="listItem">Home</li>
          </Link>
          <Link to="register">
            <li className="listItem">Register</li>
          </Link>
          <Link to="login">
            <li className="listItem">Login</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
