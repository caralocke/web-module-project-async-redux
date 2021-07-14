import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions/dogActions";

const initialState = {
    dog: {
        image: ''
    },
    isFetching: false,
    error: ''
}

export const dogReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return ({
                ...state,
                isFetching: true
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                isFetching: false,
                dog: action.payload
            })
        case FETCH_FAIL:
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return state      
    }
}