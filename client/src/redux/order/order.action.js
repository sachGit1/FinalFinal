import axios from "axios";
import {
  orderRequest,
  orderFail,
  addOrderSuccess,
  orderSuccess,
  userOrderSuccess,
  updateOrderSuccess,
  updateUserOrderSuccess,
} from "./order.reducer";
import { userRequest, userSuccess, userFail, userLogout } from "../../../src/redux/user/user.reducer";

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch(orderRequest());
    const orders = await axios({
      method: "GET",
      url: `http://localhost:4000/api/v1/order/provider`,
    });
    dispatch(orderSuccess(orders.data));
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
export const getUserOrders = () => async (dispatch) => {
  try {
    // Dispatch user request action
    dispatch(userRequest());

    // Get user details
    const userData = await axios({
      method: "GET",
      url: "http://localhost:4000/api/v1/user/me",
    });

    // Dispatch user success action with user data
    dispatch(userSuccess(userData.data.user));

    // Get user orders using user data
    const user = userData.data.user;
    const orders = await axios({
      method: "GET",
      url: "http://localhost:4000/api/v1/order/user",
      data: {
        user: user, // Include user ID in the request body
      },
    });

    // Dispatch order success action with orders data
    dispatch(userOrderSuccess(orders.data));
  } catch (error) {
    // Dispatch user fail action if user details request fails
    dispatch(userFail(error.response.data.message));

    // Dispatch order fail action if order request fails
    dispatch(orderFail(error.response.data.message));
  }
};
export const addOrder = (data) => async (dispatch) => {
  try {
    dispatch(orderRequest());
    const order = await axios({
      method: "POST",
      url: `http://localhost:4000/api/v1/order`,
      data,
    });
    dispatch(addOrderSuccess(order.data));
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
export const updateOrder = (data) => async (dispatch) => {
  try {
    dispatch(orderRequest());
    const order = await axios({
      method: "PUT",
      url: `http://localhost:4000/api/v1/order/updateStatus`,
      data,
    });
    dispatch(updateOrderSuccess(order.data));
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
export const updateUserOrder = (data) => async (dispatch) => {
  try {
    dispatch(orderRequest());
    const order = await axios({
      method: "POST",
      url: `http://localhost:4000/api/v1/order/updateStatus`,
      data,
    });
    dispatch(updateUserOrderSuccess(order.data));
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
export const deleteOrder = (data) => async (dispatch) => {
  try {
    dispatch(orderRequest());
    await axios({
      method: "DELETE",
      url: `http://localhost:4000/api/v1/order/${data.order._id}`,
    });
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
