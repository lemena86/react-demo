import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import apiStore from '../../api/store';

import {FETCH_PRODUCT} from "../actionTypes";
import {fetchProduct} from '../index';

export const mockStore = configureMockStore([thunk]);
apiStore.get = jest.fn(() => ({data: {id: 1, title: 'iphone'}}));

describe('fetchProduct', () => {

    it('has the correct type and payload', async () => {
        const store = mockStore();
        await store.dispatch(fetchProduct(1));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: FETCH_PRODUCT,
            payload: {
                item: {id: 1, title: 'iphone'}
            }
        });
    });


});