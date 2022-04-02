import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAnime } from '../../redux/actions/anime';
import "./Details.css"
const Details = () => {
      const {id} = useParams();
      const dispatch = useDispatch();

      const { item } = useSelector((state) => state.anime);
      useEffect(() => {
        dispatch(getAnime(id));
      }, [dispatch, id]);
  return (
    <div id="details" className="conatiner">
        <h1 className="title">Movie Details</h1>
        <div className="top">
            <div className="left">
                 <img src={item?.movie_banner}  alt="banner"  className="banner"/>
            </div>
            <div className="right">
                <h3 className="details">
                   {item?.title}
                </h3>
                <div className="row">
                    <span className="genre">Anime | Action & Adventure</span>
                </div>
                <div className="data">
                <span className="duration">Rating Score: {item?.rt_score}</span>
                    <span className="duration">Duration: {parseInt(item?.running_time / 60)}h{' '}
                  {parseInt(item?.running_time % 60)}m</span>
                    <span className="release">Release Date: {item?.release_date}</span>
                </div>
                <div className="data essential">
                    <span className="producer">Producer:<span className="esse">{item?.producer}</span> </span>
                    <span className="director">Director: <span className="esse">{item?.director}</span> </span>
                </div>
                <div className="data">
                <h3 className="genre">Description</h3>
                <p className="text">{item?.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details