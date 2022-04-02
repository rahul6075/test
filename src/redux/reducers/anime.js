import {
  GET_ANIMES_REQUEST,
  GET_ANIMES_SUCCESS,
  GET_ANIMES_FAILURE,
  GET_ANIME_REQUEST,
  GET_ANIME_SUCCESS,
  GET_ANIME_FAILURE
} from '../actions/types';

const initState = {
     items: [],
     item: null
}
const anime = function (state=initState, action) {
     const {type, payload} = action;
     switch (type) {
         case GET_ANIMES_REQUEST:
             return {
                 ...state,
                 loading:true,
                 success:0,
             }
         case GET_ANIMES_SUCCESS:
             return {
                 ...state,
                 loading:false,
                 items: payload.data,
                 success: payload.success,
                 msg: payload.msg
             }
         case GET_ANIMES_FAILURE:
             return {
                 ...state,
                loading: false,
                success:0
             }
        case GET_ANIME_REQUEST:
             return {
                 ...state,
                 loading:true,
                 success:0,
             }
        case GET_ANIME_SUCCESS:
             return {
                 ...state,
                 item: payload.data,
                 loading:false,
                 success: payload.success,
                 msg: payload.msg
             }
             case GET_ANIME_FAILURE:
                return {
                    ...state,
                   loading: false,
                   success:0
                }
         default:
             return state;
     }
}

export default anime;