import axios from "axios";
import {
  productRequest,
  productSuccess,
  productFail,
  getProductByIdSuccess,
  addProductSuccess,
  deleteProductSuccess,
} from "./product.reducer";

export const getAllProduct = (_id) => async (dispatch) => {
  try {
    dispatch(productRequest());
    const productData = await axios({
      method: "GET",
      url: `https://localhost:4000/api/v1/product/provider/${_id}`,
    });
    return dispatch(productSuccess(productData.data));
  } catch (error) {
    return dispatch(productFail(error.response.data.message));
  }
};
export const getProductById = (_id) => async (dispatch) => {
  try {
    dispatch(productRequest());
    const product = await axios({
      method: "GET",
      url: ` https://localhost:4000/api/v1/product/${_id}`,
    });
    return dispatch(getProductByIdSuccess(product.data));
  } catch (error) {
    return dispatch(productFail(error.response.data.message));
  }
};
export const addProduct = (data) => async (dispatch) => {
  try {
    dispatch(productRequest());
    const product = await axios({
      method: "POST",
      url: "https://localhost:4000/api/v1/product",
      data,
    });
    return dispatch(addProductSuccess(product.data));
  } catch (error) {
    return dispatch(productFail(error.response.data.message));
  }
};
export const deleteProduct = (_id) => async (dispatch) => {
  try {
    dispatch(productRequest());
    await axios({
      method: "DELETE",
      url: `https://localhost:4000/api/v1/product/${_id}`,
    });
    dispatch(deleteProductSuccess(_id));
  } catch (error) {
    return dispatch(productFail(error.response.data.message));
  }
};
