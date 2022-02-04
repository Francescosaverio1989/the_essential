import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import photo from '../../assets/photo1.jpg';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-main-container">
        <img src={photo} alt="photo1" className="photo" />
        <p className="text">
          Mon objectif est de vous faire voyager au delà des frontieres...{' '}
          <br /> Vous accompagner dans ce voyage culinaire à la recherche d'une
          nouvelle cuisne <br />
          <Link to="/cart">
            <button>Plats</button>{' '}
          </Link>
          <Link to="/contact">
            <button>Contact</button>{' '}
          </Link>
          <Link to="/login">
            <button>Login</button>{' '}
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
