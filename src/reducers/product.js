import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    item: []
};
const fetchProduct = (state, action) => {
    return {
        ...state,
        item: action.payload.item
    }
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT: {
            return fetchProduct(state, action);
        }
        default:
            return state;
    }
};