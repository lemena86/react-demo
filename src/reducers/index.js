import {combineReducers} from 'redux';
import productsReducers from '../reducers/products';
import productsReducer from '../reducers/product';

export default combineReducers({
    products: productsReducers,
    product: productsReducer,
});