import React from 'react';
import {shallow} from 'enzyme';
import {Router, Route} from "react-router-dom";

import App from '../App';
import Header from '../../components/shared/Header';

import history from '../../history';


describe('App Component test', () => {

    let wrapped;
    beforeEach(() => {
        wrapped = shallow(<App/>);
        history.replace('/');
    });

    it('shows the Header Component', () => {
        expect(wrapped.find(Header).length).toEqual(1);
    });

    it('have a Router Component', () => {
        expect(wrapped.find(Router).length).toEqual(1);
    });

    it('have a Router Component with only one child', () => {
        expect(wrapped.find(Router).children).toHaveLength(1);
    });


    it('have a three Routers Component', () => {
        expect(wrapped.find(Route).length).toEqual(3);
    });

    it('inside a Router the nodes are only Route', () => {
        wrapped.find(Router).childAt(0).forEach(node => {
            expect(node.type()).toBe(Route)
        })
    });

    it('pass only one prop to Header Component', () => {
        const props = wrapped.find(Header).props();
        expect(Object.keys(props)).toHaveLength(1);
    });

    it('pass a prop name onSearchFormSubmit to Header Component', () => {
        const props = wrapped.find(Header).props();
        expect(props.onSearchFormSubmit).toBeTruthy();
    });

    it('pass a prop of type function to Header Component', () => {
        const props = wrapped.find(Header).props();
        expect(props.onSearchFormSubmit).toEqual(expect.any(Function));
    });

    it('pass a prop name history to Router Component', () => {
        const props = wrapped.find(Router).props();
        expect(props.history).toBeTruthy();
    });
    describe('App submit function', () => {
        it('have a history with pathname /items and search with the query param the first onSearchFormSubmit is called', () => {
            wrapped.instance().onSearchFormSubmit('iphone');
            const {pathname, search} = history.location;
            expect(pathname).toEqual('/items');
            expect(search).toEqual('?search=iphone');
        });

        it('call a window location replace if the previous pathname if /items ', () => {
            window.location.replace = jest.fn();
            wrapped.instance().onSearchFormSubmit('iphone');
            wrapped.instance().onSearchFormSubmit('samsung');
            expect(window.location.replace).toHaveBeenCalledWith('/items?search=samsung');
        });
    });
});