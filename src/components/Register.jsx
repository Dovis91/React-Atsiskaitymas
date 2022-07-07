import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = async e => {
    e.preventDefault();
    await axios
      .post('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
        email,
        password,
      })
      .then(response => {
        console.log('response', response);
        setError('');
        setEmail('');
        setPassword('');
        navigate('/login');
      })
      .catch(error => setError(error.response.data.message));
  };

  return (
    <div className="registerDiv">
      <h2 className="regH2">Register Page</h2>
      <form noValidate autoComplete="off" onSubmit={register}>
        <input
          name="email"
          type="email"
          className="feedback-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          name="password"
          type="password"
          className="feedback-input"
          placeholder="Password..."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
      <p className="haveAccount">
        Already have an account then please <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
