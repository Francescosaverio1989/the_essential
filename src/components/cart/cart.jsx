import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import './Cart.css';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: var(--primary-light-color);
  & img {
    border-radius: 5px;
    margin: 10px;
    width: 300px;
  }
`;

const CardText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    margin: 10px;
  }
`;

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorite')) ?? []
  );

  const [showFavorites, setShowFavorites] = useState(false);
  useEffect(async () => {
    const { data } = await axios.get(`http://localhost:8000/recipes`);
    setRecipes(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Link to="/">
        <button>Home</button>{' '}
      </Link>
      <button onClick={() => setShowFavorites(!showFavorites)} type="button">
        {showFavorites ? 'all' : 'show favorite'}
      </button>
      <Container>
        {recipes
          .filter((recipe) => !showFavorites || favorites.includes(recipe.id))
          .map((recipe) => (
            <Card key={recipe.id}>
              <h2 className="title">{recipe.title}</h2>
              <img
                width="200"
                src={
                  recipe.picture.includes('http')
                    ? recipe.picture
                    : `${process.env.REACT_APP_API_URL}/${recipe.picture}`
                }
                alt={recipe.name}
              />
              <CardText>
                {favorites.includes(recipe.id) ? (
                  <FaHeart onClick={() => handleFavorite(recipe.id)} />
                ) : (
                  <FaRegHeart onClick={() => handleFavorite(recipe.id)} />
                )}
                <button>Recipe</button>
              </CardText>
            </Card>
          ))}
      </Container>
    </>
  );
};

export default RecipesList;
