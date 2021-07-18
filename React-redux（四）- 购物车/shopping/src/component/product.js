/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../store/actions/product.action';
import * as cartActions from '../store/actions/cart.action';
class Product extends Component {
  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }

  render() {
    const { products, addProductToCart } = this.props;

    return <>
      <section className="container content-section">
        <h2 className="section-header">商品列表</h2>
        <div className="shop-items">
          {
            products.map(item => (
              <div className="shop-item" key={item.id}>
                <img className="shop-item-image" src={`http://localhost:3005${item.thumbnail}`} />
                <span className="shop-item-title">{item.title}</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">￥{item.price}</span>
                  <button className="btn btn-primary shop-item-button" type="button"
                    onClick={() => addProductToCart(item.id)}
                  >加入购物车</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  }
}

const mapStatetoProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productActions, dispatch),
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Product);