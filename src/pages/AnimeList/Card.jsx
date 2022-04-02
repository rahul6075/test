import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
const Card = ({ item }) => {
  const [truncateText, setTruncateText] = useState(true);
  const trancate = () => {
    setTruncateText(!truncateText);
  };
  return (
    <>
      <div id="card" className="wrapper">
        <div className="main_card">
          <div className="card_left">
            <div className="card_datails">
              <h1>{item?.title}</h1>
              <div className="card_cat">
                <p className="PG">RS - {item?.rt_score}</p>
                <p className="year">{item?.release_date}</p>
                <p className="genre">Anime | Action & Adventure </p>
                <p className="time">
                  {parseInt(item?.running_time / 60)}h{' '}
                  {parseInt(item?.running_time % 60)}m
                </p>
              </div>
              <p
                className={
                  truncateText ? `desc truncateText-1` : `desc truncateText-2`
                }
              >
                {item?.description}
              </p>
              <Link to="" onClick={trancate}>
                Read More
              </Link>
              <div className="social-btn">
                <Link to={`/movie/${item.id}`}>
                  <button>Anime Result</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img src={item?.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
