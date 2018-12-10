import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import './css/ProductItem.css';
import ic_shiping from '../../containers/images/ic_shipping.png';

class ProductItem extends PureComponent {
    render() {
        const {id, thumbnail, title, seller, description, price, shiping} = this.props;
        return (
            <Link to={`/items/${id}`}>
                <div className="product-item">
                    <div className="col-image">
                        <img alt={title} src={thumbnail}/>
                    </div>
                    <div className="col-details">
                        <div className="col-price-location">
                            <div className="price-shipping">
                                <span>{`$ ${price}`}</span>
                                {shiping ? <img alt="shiping" src={ic_shiping}/> : null}
                            </div>
                            <div className="location">
                                {seller.name}
                            </div>
                        </div>
                        <div className="col-title-desc">
                            <p className="title">{title}</p>
                            <p className="desc">{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ProductItem;