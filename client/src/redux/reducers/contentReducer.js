// contentReducer.js
import {
  FETCH_CONTENT_REQUEST,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  content: {}, // <-- Change this to an object
  error: null,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTENT_REQUEST:
      return { ...state, loading: true };
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        content: {
          ...state.content,
          [action.payload.moduleName]: action.payload.data,
        },
      };
    case FETCH_CONTENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default contentReducer;
