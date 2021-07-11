import React, { Component, Fragment } from 'react';
import Table from "ant-responsive-table";
import img1 from "../../images/bag.jpg";
import img2 from "../../images/2.jpg";
import { Link } from 'react-router-dom';

import { Menu, Dropdown } from 'antd';

import Styles from "./style.module.css";

const menu = (
    <Menu >
        <Menu.Item key="1" >
            Delete
    </Menu.Item>
        <Menu.Item key="2" >
            Edit Product
    </Menu.Item>
        <Menu.Item key="3" >
            View Product as User
    </Menu.Item>
    </Menu>
);
const dataSource = [
    {
        key: "1",
        ID: "#001",
        Name: "",
        Photo: "",
        Product: "Zara Perfume",
        Quantity: "13",
        Date: "09-10-2021",
        Status: "Pending",
        Actions: "",
    },
    {
        key: "2",
        ID: "#002",
        Name: "",
        Photo: "",
        Product: "COCO perfume",
        Quantity: "3",
        Date: "09-10-2021",
        Status: "Done",
        Actions: "dots",
    }
];
const columns = [
    {
        title: "ID",
        dataIndex: "ID",
        key: "ID",
        showOnResponse: true,
        showOnDesktop: true,
    },
    {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex align-items-center flex-wrap">
                <img src={img2} alt=".." className={`${Styles.smImg}`} />
                <span className="font-weight-bold">Sam Smith</span>
            </div>

        ),
    },
    {
        title: "Photo",
        dataIndex: "Photo",
        key: "Photo",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <Link to="/vendor/ordernumber">
                <img src={img1} alt=".." className={`${Styles.prodImg}`} />
            </Link>
        ),
    },
    {
        title: "Product Name",
        dataIndex: "Product",
        key: "Product",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Quantity",
        dataIndex: "Quantity",
        key: "Quantity",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        showOnResponse: true,
        showOnDesktop: true
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

class OrdersHistory extends Component {


    render() {

        return (
            <Fragment>
                <div className={`${Styles.CardStyle} my-2`}>
                    <div className="d-flex flex-column">
                        <span className={Styles.orangeColor}>Orders History</span>
                    </div>
                    <div>
                        <Table
                            antTableProps={{
                                showHeader: true,
                                columns,
                                dataSource,
                                pagination: true
                            }}
                            mobileBreakPoint={1084}
                        />
                    </div>

                </div>
            </Fragment>
        );
    }
}


export default OrdersHistory;

