// contentActions.js
import {
  FETCH_CONTENT_REQUEST,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILURE,
  DELETE_CONTENT_SUCCESS,
} from "../types";
import fileData from "../../data/filesData.json";

export const fetchContent = (moduleName) => (dispatch) => {
  try {
    dispatch({ type: FETCH_CONTENT_REQUEST });

    // Extract module-specific data from the imported fileData
    const data = fileData[moduleName] || [];

    dispatch({ type: FETCH_CONTENT_SUCCESS, payload: { moduleName, data } });
  } catch (error) {
    dispatch({ type: FETCH_CONTENT_FAILURE, payload: error.message });
  }
};

// Action to delete a file
export const deleteContent = (moduleName, fileId) => (dispatch) => {
  try {
    dispatch({
      type: DELETE_CONTENT_SUCCESS,
      payload: { moduleName, fileId },
    });
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};