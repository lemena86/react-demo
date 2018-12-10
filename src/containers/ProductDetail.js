import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from "../actions";

import './css/ProductList.css';

class ProductList extends Component {


    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.onFetchProduct(id);
    }


    render() {
        console.log(this.props.product);
        return (
            <div className="product-detail">
                {this.props.product.title}
            </div>
        );
    }
}

ProductList.defaultProps = {
    products: []
};

const mapStateToProps = state => {
    return {
        product: state.product.item
    };
};

const mapDispatchToProps = dispatch => ({
    onFetchProduct: (id) => dispatch(actions.fetchProduct(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);