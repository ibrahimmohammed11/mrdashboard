import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Img from '../../images/Rectangle.png';
import Styles from "./style.module.css";

class ProductCard extends Component {


  render() {

    return (
      <Fragment>
        <div className={`${Styles.cardBrb} card shadow`}>
          <img src={Img} alt="product" className={`${Styles.imgStyle} w-100`} />
          <div>
            <div className="position-relative">
              <div>
              </div>
            </div>
          </div>
          <div className="pt-2 pb-3 px-3">
            <h3 className={`${Styles.title}`}>
              N°02 BERGAMOT AND LEATHER
              SPRITZ EDP 10 ML / 0.34 OZ
              </h3>
            <div className={`${Styles.rating}`}>
              <StarRatings
                rating={3}
                starRatedColor="#f83600"
                changeRating={null}
                numberOfStars={5}
                starDimension="15px"
                starSpacing="0px"
                name="rating"
              />
            </div>
            <span className={`${Styles.price} mb-5`}>200 EGP</span>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default ProductCard;