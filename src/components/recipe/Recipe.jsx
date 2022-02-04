import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Recipe.css';

const RecipesDetails = () => {
  const { id } = useParams();
  const [detailsRecipes, setDetailsRecipes] = useState([]);
  const [title, setTitle] = useState();
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState();

  const fetchDataDetails = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/recipes/`
    );
    setDetailsRecipes(data);
  };
  useEffect(fetchDataDetails, []);

  const handleChange = () => {
    const values = {
      title,
      picture,
      description,
    };
    axios
      .put(`${process.env.REACT_APP_API_URL}/recipes/`, values)
      .then(({ data }) => {
        console.log({
          data,
        });
        fetchDataDetails();
      });
  };

  return (
    <div>
      <div className="body">
        <h2 className="h2">Recipes</h2>
        <Link to="/">
          <button>Home</button>{' '}
        </Link>
        <div>
          {!detailsRecipes
            ? ''
            : detailsRecipes.map((detailsRecipes) => (
                <div>
                  <h2>Title : {detailsRecipes.title}</h2>
                  <img
                    className="picture"
                    src={detailsRecipes.picture}
                    alt=""
                  />

                  <p>Description : {detailsRecipes.description}</p>
                  <p className="modifications">Modifications : {detailsRecipes.post}</p>
                  <form className="form-details">
                    <label htmlFor="post">
                      <input
                        id="post"
                        type="text"
                        placeholder="Modifier le titre"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <input
                        id="post"
                        type="text"
                        placeholder="Modifier la photo"
                        onChange={(e) => setPicture(e.target.value)}
                      />
                      <input
                        id="post"
                        type="text"
                        placeholder="Modifier la description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </label>
                    <button type="button" onClick={handleChange}>
                      Confirmé le changements
                    </button>
                  </form>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
