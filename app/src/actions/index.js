import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getList = () => {
  return (dispatch) => {
    debugger;
    dispatch(fetchStart());
    const articPage = Math.floor((Math.random() * 11484)) + 1;
    axios.get(`https://api.artic.edu/api/v1/artworks?page=${articPage}&limit=10`);
  };
};

export const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const fetchSuccess = (list) => {
  return {
    type: FETCH_SUCCESS,
    payload: list
  };
};

export const fetchFail = (errors) => {
  return {
    type: FETCH_FAIL,
    payload: errors
  };
};
