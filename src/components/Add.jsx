import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Add.css';

const Add = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    addPost(title, description);
  };

  const addPost = async (title, description) => {
    await axios
      .post(
        'https://autumn-delicate-wilderness.glitch.me/v1/content/skills',
        {
          title: title,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then(response => {
        setPosts([response.data, ...posts]);
        alert('Post Added!');
      });
    setTitle('');
    setDescription('');
    setIsPending(false);
    navigate('/');
  };

  return (
    <div className="create">
      <h2>Add a blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <label>Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Post</button>}
        {isPending && <button disabled>Adding post....</button>}
      </form>
    </div>
  );
};
export default Add;
