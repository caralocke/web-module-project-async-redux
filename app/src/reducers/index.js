import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from "../actions";
const initialState = {
  isFetching: true,
  artList: [],
  errors: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type){
  case(FETCH_START):
    return {
      ...state,
      isFetching: true
    };
  case(FETCH_SUCCESS):
    return {
      ...state,
      isFetching: false,
      artList: action.payload
    };
  case(FETCH_FAIL):
    return {
      ...state,
      isFetching: false,
      errors: action.payload
    };
  default:
    return state;
  }
};

export default reducer;
