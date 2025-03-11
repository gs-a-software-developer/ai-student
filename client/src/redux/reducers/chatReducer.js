// chatReducer.js
import {
  FETCH_CHATS_REQUEST,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
} from "../types";

const initialState = {
  chats: [],
  messages: [],
  loading: false,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_REQUEST:
    case FETCH_MESSAGES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CHATS_SUCCESS:
      return { ...state, loading: false, chats: action.payload };
    case FETCH_CHATS_FAILURE:
    case FETCH_MESSAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_MESSAGES_SUCCESS:
      return { ...state, loading: false, messages: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
