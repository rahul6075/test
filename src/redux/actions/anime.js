import axios from './axios';

import {
  GET_ANIMES_REQUEST,
  GET_ANIMES_SUCCESS,
  GET_ANIMES_FAILURE,
  GET_ANIME_SUCCESS,
  GET_ANIME_FAILURE,
  GET_ANIME_REQUEST
} from './types';


export const getAnimeList = () => async (dispatch) => {
     try {
           dispatch({ type: GET_ANIMES_REQUEST});
           const {data} = await axios.get('/films');
           var response = {
               msg: 'Data found',
               data: data,
               success:1
           }
           dispatch({
               type: GET_ANIMES_SUCCESS,
               payload: response,
           });
     } catch (e) {

        await dispatch({
            type: GET_ANIMES_FAILURE,
            payload:
              e.response && e.response.data.message ? e.response.data : e.message,
          }); 
         
     }
}

export const getAnime = (id) => async (dispatch) => {
  try {
        dispatch({ type: GET_ANIME_REQUEST});
        const {data} = await axios.get(`/films/${id}`);
        var response = {
            msg: 'Data found',
            data: data,
            success:1
        }
       
        dispatch({
            type: GET_ANIME_SUCCESS,
            payload: response,
        });

  } catch (e) {

     await dispatch({
         type: GET_ANIME_FAILURE,
         payload:
           e.response && e.response.data.message ? e.response.data : e.message,
       }); 
      
  }
}