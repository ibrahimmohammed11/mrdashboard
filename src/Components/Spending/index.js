import React, { Fragment } from 'react';
import Table from "ant-responsive-table";
import img1 from "../../images/bag.jpg";
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
        ID: "#Ads0001",
        Date: "26 March 2020 , 12:30 Am",
        Yesterday: "$4,530",
        Today: "$5000",
        Total: "$50,000",
        Remaining: "$63,300",
        charts: "",
        Actions: "",
    },
    {
        key: "2",
        ID: "#Ads0001",
        Date: "26 March 2020 , 12:30 Am",
        Yesterday: "$4,530",
        Today: "$5000",
        Total: "$50,000",
        Remaining: "$63,300",
        charts: "",
        Actions: "dots",
    }
];
const columns = [
    {
        title: "Ads ID",
        dataIndex: "ID",
        key: "ID",
        showOnResponse: true,
        showOnDesktop: true,

    },
    {
        title: "Date Published",
        dataIndex: "Date",
        key: "Date",
        showOnResponse: true,
        showOnDesktop: true,
    },
    {
        title: "Yesterday Spending",
        dataIndex: "Yesterday",
        key: "Yesterday",
        showOnResponse: true,
        showOnDesktop: true,
    },
    {
        title: "Today Spending",
        dataIndex: "Today",
        key: "Today",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Total Spending",
        dataIndex: "Total",
        key: "Total",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Remaining",
        dataIndex: "Remaining",
        key: "Remaining",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "",
        dataIndex: "charts",
        key: "charts",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <i className={`${Styles.orangeColor} fas fa-signal`}></i>

        ),
    },
    {
        title: "Actions",
        dataIndex: "Options",
        key: "Options",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <Dropdown overlay={menu} placement="bottomRight" arrow>
                <i className={`${Styles.orangeSt} fas fa-ellipsis-h`}></i>
            </Dropdown>

        ),
    }
];






function Spending() {

    return (
        <Fragment>
            <div className={`${Styles.CardStyle} my-2`}>
                <div className="my-3">
                    <span className={Styles.orangeColor}>Spendings</span>
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



export default Spending;


// render: (text) => <a>{text}</a>,