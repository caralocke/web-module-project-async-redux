import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

const getArt = async () => {
  const articPage = Math.floor((Math.random() * 538));
  let {data} = await axios.get(
    `https://api.artic.edu/api/v1/artworks?page=${articPage}&limit=10&fields=title,image_id`
  );
  let baseUrl = await data.config.iiif_url;
  data = await data.data; // I feel so stupid right now
  data = await data.map(imgObj => {
    return {
      title: imgObj.title,
      imgURL: `${baseUrl}/${imgObj.image_id}/full/843,/0/default.jpg`
    };
  });
  return data;
};

console.log(getArt());

export const dispatchList = () => {
  return (dispatch) => {
    dispatch(fetchStart());
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
