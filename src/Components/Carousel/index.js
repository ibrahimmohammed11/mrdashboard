import React, { Fragment, Component } from 'react';
import { Carousel } from 'antd';
import Rectangle1 from "../../images/2.jpg";
import Styles from "./style.module.css";

const contentStyle = {
    height: '300px',
    color: 'black',
    textAlign: 'center',
    background: 'white',
};



class CarouselCard extends Component {

    render() {
        return (
            <Fragment>
                <Carousel autoplay >
                    
                    <div>
                        <div style={contentStyle} className="d-flex flex-column align-items-center mt-3">
                            <img src={Rectangle1} alt="." className={Styles.imgStyle} />
                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</span>
                            <span className={Styles.orangColor}>Mark Davie</span>
                            <span className={Styles.orangColor}>Team Memeber</span>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle} className="d-flex flex-column align-items-center mt-3">
                            <img src={Rectangle1} alt="." className={Styles.imgStyle} />
                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</span>
                            <span className={Styles.orangColor}>Mark Davie</span>
                            <span className={Styles.orangColor}>Team Memeber</span>
                        </div>
                    </div>
                    <div>
                    <div style={contentStyle} className="d-flex flex-column align-items-center mt-3">
                            <img src={Rectangle1} alt="." className={Styles.imgStyle} />
                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</span>
                            <span className={Styles.orangColor}>Mark Davie</span>
                            <span className={Styles.orangColor}>Team Memeber</span>
                        </div>
                    </div>
                    
                </Carousel>

            </Fragment>
        )
    }
}
export default CarouselCard;