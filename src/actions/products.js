import {FETCH_PRODUCTS} from "./actionTypes";
import apiStore from '../api/store';

export const fetchProducts = (title) => async dispatch => {
    const response = await apiStore.get('/products', {
        params: {title}
    });
    dispatch({
        type: FETCH_PRODUCTS,
        payload: {
            items: response.data
        }
    })
};
