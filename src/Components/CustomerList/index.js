
import React, { Component, Fragment } from 'react';
import Table from "ant-responsive-table";
import img1 from "../../images/bag.jpg";

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
        Name: "",
        Info: "",
        Details: "N/A",
        Joined: "",
        Order: "",
        Actions: "",
    },
    {
        key: "2",
        Name: "",
        Info: "",
        Details: "N/A",
        Joined: "",
        Order: "",
        Actions: "dots",
    }
];
const columns = [
    {
        title: "Name and Type",
        dataIndex: "Name",
        key: "Name",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex  align-items-center flex-wrap">
                <img src={img1} alt=".." className={`${Styles.smImg}`} />
                <div className="d-flex flex-column">
                    <span className={Styles.nameSty}>Frank Williams</span>
                    <div className={`${Styles.nameDesc}`}>Guest</div>
                </div>
            </div>

        ),
    },
    {
        title: "Info",
        dataIndex: "Info",
        key: "Info",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex  align-items-center flex-wrap">
                <div className="d-flex flex-column">
                    <span className={Styles.emailSty}>Frank Williams@Yahoo.com</span>
                    <div className={`${Styles.nameDesc}`}>0123456789</div>
                </div>
            </div>

        ),
    },
    {
        title: "Details",
        dataIndex: "Details",
        key: "Details",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Joined",
        dataIndex: "Joined",
        key: "Joined",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (

            <div className="d-flex flex-column align-items-center">
                <span className={Styles.txtSt1}>Didn’t Join The Store yet</span>
                <div className={`${Styles.txtSt2}`}>Invite him now</div>
                <button className={Styles.invite}>View Details</button>
            </div>

        ),
    },
    {
        title: "Last Order",
        dataIndex: "Order",
        key: "Order",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex  align-items-center flex-wrap">
                <div className="d-flex flex-column">
                    <span className={Styles.dateTxt}>3/31/2019</span>
                    <div className={`${Styles.nameDesc}`}>4:40 Pm</div>
                </div>
            </div>

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
                <i className={`${Styles.orangeSt} fas fa-ellipsis-v`}></i>
            </Dropdown>

        ),
    }
];

class CustomerList extends Component {


    render() {

        return (
            <Fragment>
                <div className={`${Styles.CardStyle} my-2`}>
                    <div className="d-flex flex-column">
                        <span className={Styles.orangeColor}>Customer List</span>
                    </div>
                    <div>
                        <Table
                            antTableProps={{
                                showHeader: true,
                                columns,
                                dataSource,
                                pagination: true
                            }}
                            mobileBreakPoint={1215}
                        />
                    </div>

                </div>
            </Fragment>
        );
    }
}


export default CustomerList;