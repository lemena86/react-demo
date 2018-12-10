import React, {Component} from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';


import ProductItem from "../components/listings/ProductItem";

import * as actions from '../actions';

import './css/ProductList.css';

class ProductList extends Component {

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        let term = queryParams.search !== void 0 ? queryParams.search : '';
        this.props.onFetchProducts(term);
    }


    renderProducts = () => {
        return this.props.products.map(product => (
            <ProductItem key={product.id} {...product}/>
        ));
    };

    render() {
        return (
            <div className="product-list">
                {this.renderProducts()}
            </div>
        );
    }
}

ProductList.defaultProps = {
    products: []
};

const mapStateToProps = state => {
    return {
        products: state.products.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: (title) => dispatch(actions.fetchProducts(title))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);