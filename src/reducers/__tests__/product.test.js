import productReducer from '../product';
import {FETCH_PRODUCT} from '../../actions/actionTypes';

it('handles actions of type FETCH_PRODUCT', () => {
    const action = {
        type: FETCH_PRODUCT,
        payload: {
            item: {id: 1, title: 'iphone'}
        }
    }
    const newState = productReducer([], action);
    expect(newState).toEqual({item: {id: 1, title: 'iphone'}})
})