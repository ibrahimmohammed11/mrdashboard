import React, { Component } from 'react';
import MainChart from '../mainChart';
import ItemChart from '../ItemChart';
import TopKeywords from '../TopKeywords';
import CarouselCard from '../Carousel';
import ProductsChart from '../ProductsChart';
import BounceRate from '../BounceRate';
import VisitsChart from '../VisitsChart';
import TopChart from '../topChart';
import Review from '../Review';
import { Menu, Dropdown } from 'antd';
import Styles from "./style.module.css";

const { SubMenu } = Menu;
const menu = (
    <Menu >
        <Menu.Item key="1" >
            1st menu item
      </Menu.Item>
        <Menu.Item key="2" >
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3" >
            3rd menu item
      </Menu.Item>
    </Menu>
);

class MainPage extends Component {


  render() {

    return ( 
        
        

        <div className="row mt-3">
            <div className="col-md-8">
                <div className={Styles.salesAnaLy}>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className={Styles.orangeSt}>Sales Analytics</span>
                        <Dropdown overlay={menu}>
                            <i className={`${Styles.orangeSt} far fa-calendar-alt`}></i>
                        </Dropdown>

                    </div>
                    <hr />
                    <div>
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="d-flex flex-column">
                                <span className={Styles.headChart}>Traffic</span>
                                <span className={Styles.numChart}>360,200</span>
                                <span className={Styles.greenColor}><i className="fas fa-chevron-up"></i> 15%</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className={Styles.headChart}>Orders</span>
                                <span className={Styles.numChart}>360,200</span>
                                <span className={Styles.greenColor}><i className="fas fa-chevron-up"></i> 4%</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className={Styles.headChart}>Revenue</span>
                                <span className={Styles.numChart}>360,200</span>
                                <span className={Styles.redColor}><i className="fas fa-chevron-down"></i> 4%</span>
                            </div>
                        </div>
                        <div className={Styles.chartCont}>
                            <MainChart />

                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-xl-6 mb-3">
                        <div className={`${Styles.salesAnaLy} mt-3`}>
                            <span className={Styles.smHeader}>Earnings By Item Type</span>
                            <hr />
                            <ItemChart />
                        </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                        <div className={`${Styles.salesAnaLy} mt-3`}>
                            <ProductsChart />
                        </div>
                        <div className={`${Styles.salesAnaLy} mt-3`}>

                            <BounceRate />
                        </div>
                        <div className={`${Styles.salesAnaLy} mt-3`}>

                            <VisitsChart />
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xl-6 mb-3">
                        <div className={`${Styles.salesAnaLy}`}>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className={Styles.smHeader}>Top Keywords</span>
                                <i className={`${Styles.smHeader} fas fa-download`}></i>
                            </div>
                            <hr />
                            <TopKeywords />
                        </div>
                    </div>

                    <div className="col-xl-6 mb-3">
                        <div className={`${Styles.salesAnaLy}`}>
                            <CarouselCard />
                        </div>
                    </div>

                </div>
            </div>



            <div className="col-xl-4 mb-3">
                <div className={`${Styles.salesAnaLy}`}>
                    <span className={`${Styles.smHeader} font-weight-bold`}>Top 5 Products</span>
                    <hr />
                    <TopChart />
                </div>

                <div className={`${Styles.salesAnaLy} mt-5`}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <span className={`${Styles.smHeader} font-weight-bold`}>Recent Reviews</span>
                        <div class="dropdown dropleft">
                            <a className={`${Styles.linkStyle} dropdown-toggle `} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort by Newest
                        </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="##">Action</a>
                                <a className="dropdown-item" href="##">action</a>
                                <a className="dropdown-item" href="##">Something</a>
                            </div>
                        </div>
                    </div>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </div>
    
    
    );
  }
}


export default MainPage;