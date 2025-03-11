// chatActions.js
import {
  FETCH_CHATS_REQUEST,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
} from "../types";
import messagesData from "../../data/messages.json";

// Fetch all chats
export const fetchChats = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CHATS_REQUEST });

    // Simulate an API call with a delay
    setTimeout(() => {
      dispatch({ type: FETCH_CHATS_SUCCESS, payload: messagesData });
    }, 1000);
  } catch (error) {
    dispatch({ type: FETCH_CHATS_FAILURE, payload: error.message });
  }
};

// Fetch messages for a specific chat
export const fetchMessages = (chatId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MESSAGES_REQUEST });

    // Find the chat by ID
    const chat = messagesData.find((item) => item.id === parseInt(chatId));

    if (chat) {
      dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: chat.messages });
    } else {
      dispatch({ type: FETCH_MESSAGES_FAILURE, payload: "Chat not found" });
    }
  } catch (error) {
    dispatch({ type: FETCH_MESSAGES_FAILURE, payload: error.message });
  }
};
