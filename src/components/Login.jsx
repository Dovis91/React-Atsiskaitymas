import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async e => {
    e.preventDefault();
    await axios
      .post('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
        email,
        password,
      })
      .then(response => {
        console.log('response', response);
        localStorage.setItem(
          'token',
          JSON.stringify({
            userLogin: true,
            token: response.data.token,
          })
        );
        setEmail('');
        setPassword('');
      });
    navigate('/');
  };
  return (
    <div>
      <h2 className="regH2">Login Page</h2>
      <form noValidate autoComplete="off" onSubmit={login}>
        <input
          name="email"
          type="email"
          className="feedback-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          name="password"
          type="password"
          className="feedback-input"
          placeholder="Password..."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="LOG IN" />
      </form>
      <p className="haveAccount">
        Don't have an account then please do
        <Link to="/register">Register</Link> yourself
      </p>
    </div>
  );
};

export default Login;
