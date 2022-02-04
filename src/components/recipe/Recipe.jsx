import axios from 'axios';
import { useState, useEffect } from 'react';
import './Recipe.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const callRecipeApi = () => {
    axios.get(`http://localhost:8000/recipes`).then(({ data }) => {
      setRecipes(data);
    });
  };
  useEffect(callRecipeApi, []);
  return (
    <div className="wrapper">
      {recipes.map(({ title, picture, description }) => (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <img src={picture} alt="principale" className="picture" />
            <button className="card-button">View more</button>
            <p className="card-description">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
