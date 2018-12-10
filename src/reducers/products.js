import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    items: []
};
const fetchProducts = (state, action) => {
    return {
        ...state,
        items: action.payload.items
    }
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS: {
            return fetchProducts(state, action);
        }
        default:
            return state;
    }
};