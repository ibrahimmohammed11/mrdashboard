import React, { Component, Fragment } from 'react';
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import StarRatings from 'react-star-ratings';

import Styles from "./style.module.css";

class SingleProduct extends Component {

    state = { counter: 0 };

    handleIncrement = () => {
        this.setState((state) => ({ counter: state.counter + 1 }));
    };

    handleDecrement = () => {
        this.setState((state) => ({ counter: state.counter - 1 }));
    };
    render() {

        return (
            <Fragment>
                <div className={`${Styles.CardStyle} mb-2`}>
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={img1} alt=".." className={Styles.bigImg} />
                            <div className="row">
                                <img src={img2} alt=".." className={`${Styles.smImg} col-md-4`} />
                                <img src={img3} alt=".." className={`${Styles.smImg} col-md-4`} />
                                <img src={img1} alt=".." className={`${Styles.smImg} col-md-4`} />
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div>
                                <StarRatings
                                    rating={2.403}
                                    starRatedColor="#f83600"
                                    changeRating={null}
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing="0px"
                                    name="rating"
                                />
                                <span className={Styles.reviews}> ( 12 Reviews )</span>
                            </div>
                            <span className={Styles.classify}>Women</span>
                            <span className={Styles.nameStyle}>Beige Metal hoop tote bag</span>
                            <span className={Styles.price}>$75.00 - $80.00</span>
                            <p className={Styles.desc}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet</p>
                            <p className={Styles.chooseColor}>Choose Your Color</p>
                            <ul className={Styles.colorList}>
                                <li className={Styles.Color1}></li>
                                <li className={Styles.Color2}></li>
                                <li className={Styles.Color3}></li>
                                <li className={Styles.Color4}></li>
                            </ul>
                            <div aria-label="small outlined button group">
                                <button onClick={this.handleDecrement} className={Styles.btnLeft}>-</button>
                                <button disabled className={Styles.btnCenter}>{this.state.counter}</button>
                                <button onClick={this.handleIncrement} className={Styles.btnRight}>+ </button>
                            </div>
                            <div className={Styles.tabsStyle}>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="Description-tab" data-toggle="tab" href="#Description" role="tab" aria-controls="Description" aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Additional-tab" data-toggle="tab" href="#Additional" role="tab" aria-controls="Additional" aria-selected="false">Additional Information</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="Reviews-tab" data-toggle="tab" href="#Reviews" role="tab" aria-controls="Reviews" aria-selected="false">Reviews</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                                    </div>
                                    <div className="tab-pane fade" id="Additional" role="tabpanel" aria-labelledby="Additional-tab">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    </div>
                                    <div className="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}


export default SingleProduct;