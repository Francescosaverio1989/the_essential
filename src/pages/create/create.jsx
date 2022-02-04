import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './create.css';

const Create = () => {
  const navigator = useNavigate();
  const [error, setError] = useState();
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const values = {
      title,
      picture,
      description,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/recipes`, values)
      .then(() => {})
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => {
          setError(message);
        }
      );
    navigator('/cart');
  };
  return (
    <div className="main">
        <Link to="/">
        <button>Home</button>{' '}
      </Link>
      <img src={logo} alt="" className="logo" />
      <h2>Create your recipe</h2>
      <form className="form-create" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <p>Title : </p>
          <input
            id="title"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="picture">
          <p>Picture : </p>
          <input
            id="picture"
            type="text"
            placeholder="picture"
            onChange={(e) => setPicture(e.target.value)}
          />
        </label>
        <label htmlFor="description" className="description">
          <p>Description : </p>
          <input
            id="description"
            type="description"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button>Create your recipe</button>
      </form>
    </div>
  );
};

export default Create;
