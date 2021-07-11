
import React, { Component, Fragment } from 'react';
import Table from "ant-responsive-table";
import img1 from "../../images/bag.jpg";

import { Menu, Dropdown } from 'antd';

import Styles from "./style.module.css";

const menu = (
    <Menu >
        <Menu.Item key="1" >
            Cancel
    </Menu.Item>
        <Menu.Item key="2" >
            Cancel Product
    </Menu.Item>
        <Menu.Item key="3" >
            Message
    </Menu.Item>
    </Menu>
);
const dataSource = [
    {
        key: "1",
        ID: "#0001",
        Name: "",
        Payment: "Cash",
        Created: "45 min Ago",
        Type: "Pick Up",
        Status: "On the Way",
        Total: "$49.99",
        Actions: "",
    },
    {
        key: "2",
        ID: "#0002",
        Name: "",
        Payment: "Mr1Pay",
        Created: "45 min Ago",
        Type: "Delivery",
        Status: "Completed",
        Total: "$49.99",
        Actions: "dots",
    }
];
const columns = [
    {
        title: "ID",
        dataIndex: "ID",
        key: "ID",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex  align-items-center flex-wrap">
                <img src={img1} alt=".." className={`${Styles.smImg}`} />
                <div className="d-flex flex-column">
                    <span className={Styles.nameSty}>Sam Smith</span>
                </div>
            </div>

        ),
    },
    {
        title: "Payment",
        dataIndex: "Payment",
        key: "Payment",
        showOnResponse: true,
        showOnDesktop: true,
    },
    {
        title: "Created Time",
        dataIndex: "Created",
        key: "Created",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Type",
        dataIndex: "Type",
        key: "Type",
        showOnResponse: true,
        showOnDesktop: true,
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        showOnResponse: true,
        showOnDesktop: true,
    },
    {
        title: "Total",
        dataIndex: "Total",
        key: "Total",
        showOnResponse: true,
        showOnDesktop: true,
    },
    {
        title: "Actions",
        dataIndex: "Options",
        key: "Options",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <Dropdown overlay={menu} placement="bottomRight" arrow>
                <i className={`${Styles.orangeSt} fas fa-ellipsis-v`}></i>
            </Dropdown>

        ),
    }
];

class LiveOrders extends Component {


    render() {

        return (
            <Fragment>
                <div>
                    <span className={Styles.orangeColor}>Live Orders</span>
                </div>
                <div className={`${Styles.CardStyle} my-2`}>
                    <div className="row">
                        <div className={`${Styles.rowMarg} col-xl-3 col-md-6`}>
                            <div className="d-flex align-items-center ">
                                <i className={`${Styles.iconStyle1} far fa-chart-bar mr-2`}></i>
                                <div className="d-flex flex-column">
                                    <span className={Styles.totalEarn}>Total Earning of Today</span>
                                    <span className={Styles.totalMoney}>$25,195.00</span>
                                    <span className={Styles.totalEarn}>250 + Orders From Last Month</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.rowMarg} col-xl-3 col-md-6`}>
                            <div className="d-flex align-items-center ">
                                <i className={`${Styles.iconStyle2} fas fa-box mr-2`}></i>
                                <div className="d-flex flex-column">
                                    <span className={Styles.totalEarn}>Today Total Orders</span>
                                    <span className={Styles.totalMoney}>50 Order</span>
                                    <span className={Styles.totalEarn}>3 + Orders From Yesterday</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.rowMarg} col-xl-3 col-md-6`}>
                            <div className="d-flex align-items-center ">
                                <i className={`${Styles.iconStyle3} fas fa-save mr-2`}></i>
                                <div className="d-flex flex-column">
                                    <span className={Styles.totalEarn}>Pending Orders</span>
                                    <span className={Styles.totalMoney}>20 Order</span>
                                    <span className={Styles.totalEarn}>Check Order to Confirm</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.rowMarg} col-xl-3 col-md-6`}>
                            <div className="d-flex align-items-center ">
                                <i className={`${Styles.iconStyle4} fas fa-users mr-2`}></i>
                                <div className="d-flex flex-column">
                                    <span className={Styles.totalEarn}>Total Customers per Month</span>
                                    <span className={Styles.totalMoney}>230k</span>
                                    <span className={Styles.totalEarn}>Check Mr1Ads Market to Increase Your Audience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.CardStyle} my-2`}>
                    <div>
                        <Table
                            antTableProps={{
                                showHeader: true,
                                columns,
                                dataSource,
                                pagination: true
                            }}
                            mobileBreakPoint={1015}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default LiveOrders;