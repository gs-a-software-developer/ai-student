// contentReducer.js
import {
  FETCH_CONTENT_REQUEST,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILURE,
  DELETE_CONTENT_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  content: {},
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
    case DELETE_CONTENT_SUCCESS:
      const { moduleName, fileId } = action.payload;
      return {
        ...state,
        content: {
          ...state.content,
          [moduleName]: state.content[moduleName].filter(
            (item) => item.id !== fileId
          ),
        },
      };
    case FETCH_CONTENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default contentReducer;
