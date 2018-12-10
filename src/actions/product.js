import {FETCH_PRODUCT} from "./actionTypes";
import apiStore from '../api/store';

export const fetchProduct = (id) => async dispatch => {
    const response = await apiStore.get(`/products/${id}`);
    dispatch({
        type: FETCH_PRODUCT,
        payload: {
            item: response.data
        }
    })
};
