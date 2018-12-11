import React from 'react';
import {shallow, mount} from 'enzyme';
import Root from '../../Root';


import ProductDetail from "../ProductDetail";

describe('ProductDetail Component test', () => {
    let wrapped;
    beforeEach(() => {
        wrapped = mount(
            <Root>
                <ProductDetail match={{params: 1}}/>
            </Root>
        );
    });
    it('shows a div with class product-detail', () => {
        expect(wrapped.find('div.product-detail')).toHaveLength(1);
    });
    it('shows a h1', () => {
        expect(wrapped.find('h1')).toHaveLength(1);
    });
});