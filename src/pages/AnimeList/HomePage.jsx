import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimeList } from '../../redux/actions/anime';
import './Home.css';
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimeList());
  }, [dispatch]);
  const { items } = useSelector((state) => state.anime);

  return (
    <div id="home" className="home">
      <h1 className="heading">Anime List</h1>
      <div className="container">
        {items?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
