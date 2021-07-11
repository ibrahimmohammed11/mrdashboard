import React, { Fragment, Component } from 'react';
import { Layout, Menu } from 'antd';
import logo from "../../images/mr1china_auth.a2016050.png";
import { NavLink, withRouter } from 'react-router-dom';

import Styles from "./style.module.css";

const { Sider } = Layout;
const { SubMenu } = Menu;


class SideBar extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {

        this.setState({ collapsed });
    };
    render() {
        const { collapsed } = this.state;
        return (
            <Fragment>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    {!collapsed && <div className="text-center" >
                        <img src={logo} alt="." className={Styles.logoStyle} />
                    </div>
                    }

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" title="E-commerce">
                            <Menu.Item key="2" >
                                <NavLink to="/vendor">
                                    Dashboard
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/vendor/Product">
                                    Products
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <NavLink to="/vendor/ProductDetails">
                                    Productsc Details
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Orders">
                            <Menu.Item key="5">
                                <NavLink to="/vendor/liveorders">
                                    Live Orders
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <NavLink to="/vendor/ordershistory">
                                    Orders History
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="Vendor Tools">
                            <Menu.Item key="7">
                                Chat
                            </Menu.Item>
                            <Menu.Item key="8">Calendar</Menu.Item>
                            <Menu.Item key="9">E-mail</Menu.Item>
                            <Menu.Item key="10">
                                <NavLink to="/vendor/customerlist">
                                    Customer List
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="11">To do List</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="Ads Manager">
                            <Menu.Item key="12">
                                <NavLink to="/vendor/adsdashboard">
                                    Ads Dashboard
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <NavLink to="/vendor/campaign">
                                    Campaigns List
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <NavLink to="/vendor/newcampaign">
                                    Add New Campaign
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="15">
                                <NavLink to="/vendor/spending">
                                    Spending
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title="Agent Activities">
                            <Menu.Item key="16">Dashboard</Menu.Item>
                            <Menu.Item key="17">Projects OverViews</Menu.Item>
                            <Menu.Item key="18">Projects</Menu.Item>
                            <Menu.Item key="19">Employee Performance</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Fragment>
        )
    }
}
export default withRouter(SideBar);