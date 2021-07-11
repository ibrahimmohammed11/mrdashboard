import React, { Fragment, Component } from 'react';
import StarRatings from 'react-star-ratings';

import Styles from "./style.module.css";





class Review extends Component {
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }
    render() {
        return (
            <Fragment>
                <div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
                    <div className={Styles.revStyle}>
                        <div className={Styles.revCom}>
                            <div>
                                <span className={Styles.bySty}>By</span>&nbsp;	
                                <span className={Styles.userName}>Sam Smith</span>&nbsp;&nbsp;	&nbsp;		
                                <span className={Styles.timeAgo}>11 min ago</span>&nbsp;	
                            </div>
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
                            </div>
                        </div>
                        <div className={`${Styles.rev} py-2 pl-2`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</div>

                    </div>

                </div>
            </Fragment>
        )
    }
}
export default Review;