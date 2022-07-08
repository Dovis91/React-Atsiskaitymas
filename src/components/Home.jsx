import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const url = 'https://autumn-delicate-wilderness.glitch.me/v1/content/skills';

const Home = ({ userLoggedIn }) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {userLoggedIn ? (
        <div className="blog-list">
          {posts.map(post => (
            <div className="blog-preview" key={post.id}>
              <h2>{post.title}</h2>
              <a>{post.description}</a>
            </div>
          ))}
          <div className="flap"></div>
        </div>
      ) : (
        <h1 className="logIn">You need to log in to see content 😎</h1>
      )}
    </div>
  );
};

export default Home;
