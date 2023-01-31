import {
  ADD_INSURANCE,
  DELETE_INSURANCE,
  GET_INSURANCE,
  GET_INSURANCES,
  INSURANCE_ERROR,
  UPDATE_INSURANCE,
} from "../actions/types";
import { setAlert } from "./alert";
import axios from "axios";
import { HOST } from "..";

// Get all posts
export const getInsurances = () => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/insurances`);
    dispatch({
      type: GET_INSURANCES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: INSURANCE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete post
export const deleteInsurance = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${HOST}/api/insurances/${postId}`);
    dispatch({
      type: DELETE_INSURANCE,
      payload: postId,
    });

    dispatch(setAlert("Insurance removed", "success"));
  } catch (error) {
    dispatch({
      type: INSURANCE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add post
export const addInsurance = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`${HOST}/api/insurances`, formData, config);
    dispatch({
      type: ADD_INSURANCE,
      payload: res.data,
    });

    dispatch(setAlert("Insurance created", "success"));
    return res;
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: INSURANCE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get Post
export const getInsurance = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/api/insurances/${id}`);
    dispatch({
      type: GET_INSURANCE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: INSURANCE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Update Insurance
export const updateInsurance = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      `${HOST}/api/insurances/${id}`,
      formData,
      config
    );
    dispatch({
      type: UPDATE_INSURANCE,
      payload: res.data,
    });

    dispatch(setAlert("Insurance updated", "success"));
    return res;
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: INSURANCE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
