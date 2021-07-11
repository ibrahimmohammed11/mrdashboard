import React, { Component, Fragment } from 'react';
import ProductCard from '../ProductCard';
import SingleProduct from '../SingleProduct';

import Styles from "./style.module.css";

class ProductDetails extends Component {


  render() {

    return (
      <Fragment>
        <div className="mb-3">
          <span className={Styles.orangeColor}>Product Details</span>

          <SingleProduct/>

          <span className={Styles.orangeColor}>View Other Products</span>
          <div className={`${Styles.grid_container} mt-2`}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Fragment>
    );
  }
}


export default ProductDetails;