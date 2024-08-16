import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } 
from "../types";
import axios from 'axios'

export const createOrder = (order) => async (dispatch) => {
  await fetch("https://localhost:5001/api/1.0/Users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_CART });
    });
};
export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};

export const fetchOrders = () => async (dispatch) => {
  await axios.get("https://localhost:5001/api/1.0/Admin/Index")
    .then((res) => {
      dispatch({ type: FETCH_ORDERS, payload: res.data });
      console.log(res.data);  
    });
};

