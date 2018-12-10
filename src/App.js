import React, {Component} from 'react';
import {Router, Route} from "react-router-dom";

import Header from "./components/shared/Header";
import Home from "./containers/Home";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import history from './history';

import './App.css';

class App extends Component {

    onSearchFormSubmit = (term) => {
        console.log(history);
        const previous = history.location.pathname;
        if (previous === '/items') {
            window.location.replace(`/items?search=${term}`);
        } else {
            history.push(`/items?search=${term}`);
        }
    };

    render() {
        return (
            <>
                <Header onSearchFormSubmit={this.onSearchFormSubmit}/>
                <Router history={history}>
                    <>
                        <Route path="/" exact component={Home}/>
                        <Route path="/items/:id" exact component={ProductDetail}/>
                        <Route path="/items" exact component={ProductList}/>
                    </>
                </Router>
            </>
        );
    }
}

export default App;