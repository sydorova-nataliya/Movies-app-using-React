import { SET_POPULAR_MOVIES,SET_TOP_RATED_MOVIES,SET_UPCOMING_MOVIES, SET_SEARCH_MOVIES, SET_DETAILS_MOVIE} from "./types";

const initialState={
    popular:[],
    topRated:[],
    upcoming:[],
    search:[],
    details:{},
};

const movies = (state = initialState, action)=>{
    switch (action.type){
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popular:action.payload
            }
        case SET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRated:action.payload
            }
        case SET_UPCOMING_MOVIES:
            return {
                ...state,
                upcoming:action.payload
            }
        case SET_SEARCH_MOVIES:
            return {
            ...state,
            search: action.payload
        }
        case SET_DETAILS_MOVIE:
            return {
            ...state,
            details: action.payload
        }
        default:
          return state;
    }
  }

  export default movies;