import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

const getArt = () => {
  const articPage = Math.floor((Math.random() * 538));
  return axios.get(
    `https://api.artic.edu/api/v1/artworks?page=${articPage}&limit=10&fields=title,image_id`
  )
    .then(res => {
      const baseURL = res.data.config.iiif_url;
      const artList = [ ...res.data.data ];
      return artList.map(elem => {
        return {
          ...elem,
          imgURL: `${baseURL}/${elem.image_id}/full/400,/0/default.jpg`
        };
      });
    })
    .catch(err => {
      return err;
    });
};

export const dispatchList = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    getArt()
      .then(res => {
        dispatch(fetchSuccess(res));
      })
      .catch(err => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const fetchSuccess = (artList) => {
  return {
    type: FETCH_SUCCESS,
    payload: artList
  };
};

export const fetchFail = (errors) => {
  return {
    type: FETCH_FAIL,
    payload: errors
  };
};
