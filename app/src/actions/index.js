import axios from 'axios' //import axios

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getDog = () => {
    return (dispatch) => {
            //1. fetch_start
        dispatch({type:FETCH_START})
        //2. fetch data from api
        axios.get('https://dog.ceo/api/breeds/image/random')
         .then(res => {
           //3. if fetch is successful, Fetch_success with that data
           dispatch({type: FETCH_SUCCESS, payload: res.data.message})
         })
         .catch(err => {
           //4. If fetch fails, Fetch_fail with error message
           console.log('err', err)
        //    dispatch({type:FETCH_FAIL, payload: err})
         })

    }
}

export const fetchStart = () => {
    return ({type:FETCH_START})
}
export const fetchSuccess = (person) => {
    return ({type:FETCH_SUCCESS, payload: person})
}

export const fetchFail = (err) => {
    return ({type:FETCH_FAIL, payload: err})
}