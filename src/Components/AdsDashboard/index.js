import React, { Component, Fragment } from 'react';
import logo from "../../images/mr1china_auth.a2016050.png";
import SecChart from '../SecChart';
import { Menu, Dropdown } from 'antd';
import TotalCampChart from '../TotalCampChart';
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

class AdsDashboard extends Component {


    render() {

        return (

            <Fragment>
                <div>
                    <span className={Styles.headColor}>Welcome Mr1Taher</span>
                    <div className={Styles.headColor1}>To Mr1China Ads Manager Dashboard</div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="row mb-3">
                            <div className="col-md-6 mb-2">
                                <div className={Styles.smallChart}>
                                    <div className="d-flex justify-content-between  align-items-center flex-wrap">
                                        <div className="d-flex flex-column">
                                            <span className={Styles.totalStyle}>Total Campaigns</span>
                                            <div className={Styles.numSt}>670</div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <TotalCampChart />
                                            <span className={Styles.underChart}>+15% From Last Week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className={Styles.smallChart}>
                                    <div className="d-flex justify-content-between  align-items-center flex-wrap">
                                        <div className="d-flex flex-column">
                                            <span className={Styles.totalStyle}>Total Audience</span>
                                            <div className={Styles.numSt}>412,530</div>
                                        </div>
                                        <div className={Styles.arrowTop}>
                                            <i className="fas fa-caret-up"></i>&nbsp;
                                            <span>25%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pr-0 mb-2 mt-3">
                                <div className={Styles.SpendsToday1}>
                                    <div className={Styles.increseStyle1}>
                                        <i className="fas fa-caret-up"></i>&nbsp;
                                        <span>25%</span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className={Styles.Spends}>Spends Today</span>
                                        <div className={Styles.moneySt}>$ 5,245</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pl-0 mb-2  mt-3">
                                <div className={Styles.SpendsToday2}>
                                    <div className="d-flex flex-column">
                                        <span className={Styles.Spends}>Spends YesterDay</span>
                                        <div className={Styles.moneySt}>$ 4,560</div>
                                    </div>
                                    <div className={Styles.increseStyle2}>
                                        <i className="fas fa-caret-down"></i>&nbsp;
                                        <span>-5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.salesAnaLy}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className={Styles.orangeSt}>OverView</span>
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
                                    <SecChart />
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="col-xl-4 mb-3">
                        <div className={`${Styles.salesAnaLy} mb-3`}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className={`${Styles.smHeader} font-weight-bold`}>Campaigns Network Stats</span>
                                <div class="dropdown dropleft">
                                    <a className={`${Styles.linkStyle}  `} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="##">Action</a>
                                        <a className="dropdown-item" href="##">action</a>
                                        <a className="dropdown-item" href="##">Something</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="d-flex  align-items-center flex-wrap mb-3">
                                    <div className={Styles.divStyle}></div>
                                    <div className="d-flex flex-column">
                                        <span className={Styles.nameSty}>TradeTube</span>
                                        <div className="progress">
                                            <div className={`${Styles.firstProg1} progress-bar`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex  align-items-center flex-wrap  mb-3">
                                    <img src={logo} alt="." className={Styles.logoStyle} />
                                    <div className="d-flex flex-column">
                                        <span className={Styles.nameSty}>Mr1China</span>
                                        <div className="progress">
                                            <div className={`${Styles.firstProg2} progress-bar`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex  align-items-center flex-wrap  mb-3">
                                    <img src={logo} alt="." className={Styles.logoStyle} />
                                    <div className="d-flex flex-column">
                                        <span className={Styles.nameSty}>Mr1Play</span>
                                        <div className="progress">
                                            <div className={`${Styles.firstProg3} progress-bar`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className={Styles.nameSty}>Show More</span>
                                </div>
                            </div>
                        </div>

                        <div className={`${Styles.salesAnaLy}`}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className={`${Styles.smHeader} font-weight-bold`}>Summary Goal</span>
                                <div class="dropdown dropleft">
                                    <a className={`${Styles.linkStyle}  `} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="##">Action</a>
                                        <a className="dropdown-item" href="##">action</a>
                                        <a className="dropdown-item" href="##">Something</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="d-flex  align-items-center flex-wrap my-3">
                                <img src={logo} alt="." className={Styles.logoStyle1} />
                                    <div className="d-flex flex-column">
                                        <span className={Styles.nameSty}>Mr1Play</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className={Styles.textColor}>Ad Campaign Spending</p>
                                        <p className={Styles.textColor}>Comments</p>
                                        <p className={Styles.textColor}>Likes</p>
                                    </div>
                                    <div>
                                        <p className={Styles.textColor}>4500/5000</p>
                                        <p className={Styles.textColor}>450/800</p>
                                        <p className={Styles.textColor}>100/150</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div>
                                <div className="d-flex  align-items-center flex-wrap my-3">
                                <div className={Styles.divStyle1}></div>
                                    <div className="d-flex flex-column">
                                        <span className={Styles.nameSty}>Tradetube</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className={Styles.textColor}>Ad Campaign Spending</p>
                                        <p className={Styles.textColor}>Comments</p>
                                        <p className={Styles.textColor}>Likes</p>
                                    </div>
                                    <div>
                                        <p className={Styles.textColor}>4500/5000</p>
                                        <p className={Styles.textColor}>450/800</p>
                                        <p className={Styles.textColor}>100/150</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div>
                                <div className="d-flex  align-items-center flex-wrap my-3">
                                <img src={logo} alt="." className={Styles.logoStyle1} />
                                    <div className="d-flex flex-column">
                                        <span className={Styles.nameSty}>Mr1China</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className={Styles.textColor}>Ad Campaign Spending</p>
                                        <p className={Styles.textColor}>Comments</p>
                                        <p className={Styles.textColor}>Likes</p>
                                    </div>
                                    <div>
                                        <p className={Styles.textColor}>4500/5000</p>
                                        <p className={Styles.textColor}>450/800</p>
                                        <p className={Styles.textColor}>100/150</p>
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


export default AdsDashboard;