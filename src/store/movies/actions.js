import { SET_POPULAR_MOVIES,SET_TOP_RATED_MOVIES,SET_UPCOMING_MOVIES, SET_SEARCH_MOVIES, SET_DETAILS_MOVIE } from "./types";

export const setPopularMovies = (payload) =>({
    type:SET_POPULAR_MOVIES,
    payload
});
export const setTopRatedMovies = (payload) =>({
    type:SET_TOP_RATED_MOVIES,
    payload
});
export const setUpcomingMovies = (payload) =>({
    type:SET_UPCOMING_MOVIES,
    payload
});
export const setSeacrhMovies = (payload) =>({
    type:SET_SEARCH_MOVIES,
    payload
});
export const setDetailsMovie = (payload) =>({
    type:SET_DETAILS_MOVIE,
    payload
});
