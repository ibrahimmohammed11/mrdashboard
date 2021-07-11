
import React, { Component, Fragment } from 'react';
import Table from "ant-responsive-table";
import img1 from "../../images/bag.jpg";
import dhl from "../../images/download.jfif";
import Styles from "./style.module.css";

const dataSource = [
    {
        key: "1",
        Summary: "",
        Quantity: "X1",
        Price: "$20",
        Total: "$20",
    },
    {
        key: "2",
        Summary: "",
        Quantity: "X2",
        Price: "$30",
        Total: "$80",
    }
];
const columns = [
    {
        title: "Items Summary",
        dataIndex: "Summary",
        key: "Summary",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex  align-items-center flex-wrap">
                <img src={img1} alt=".." className={`${Styles.smImg}`} />
                <div className="d-flex flex-column">
                    <span className="font-weight-bold">White Jacket</span>
                </div>
            </div>

        ),
    },
    {
        title: "Quantity",
        dataIndex: "Quantity",
        key: "Quantity",
        showOnResponse: true,
        showOnDesktop: true
    },
    {
        title: "Price",
        dataIndex: "Price",
        key: "Price",
        showOnResponse: true,
        showOnDesktop: true
    }, {
        title: "Total Price",
        dataIndex: "Total",
        key: "Total",
        showOnResponse: true,
        showOnDesktop: true
    },
];

class OrderNumber extends Component {


    render() {

        return (
            <Fragment>
                <div>
                    <div>
                        <span className={Styles.orderNumber}>Order Number</span>
                        <span className={Styles.numberStyle}> #0001</span>&nbsp;
                        <button to="/vendor/addproduct" className={Styles.addProduct}><i className="fas fa-comment-alt"></i>&nbsp;	Message Customer</button>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-7">
                            <div className={`${Styles.pageStyle} py-4`}>
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
                            <div className={`${Styles.pageStyle} my-3`}>
                                <span className={Styles.headStyle}>Customer and Order Details</span>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className={Styles.textColor}>Customer Name</p>
                                        <p className={Styles.textColor}>Phone Number</p>
                                        <p className={Styles.textColor}>Packing Options</p>
                                        <p className={Styles.textColor}>Type</p>
                                        <p className={Styles.textColor}>Note</p>
                                    </div>
                                    <div>
                                        <p className={Styles.textColor}>Sam Smith John</p>
                                        <p className={Styles.textColor}>0123456789</p>
                                        <p className={Styles.textColor}>Gift Wrapping</p>
                                        <p className={Styles.textColor}>Home Delivery</p>
                                        <p className={Styles.textColor}>N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className={Styles.pageStyle}>
                                <span className={Styles.headStyle}>Delivery Details</span>
                                <div className="d-flex  align-items-center justify-content-between flex-wrap mt-3">
                                    <div className="d-flex  align-items-center justify-content-between flex-wrap ">
                                        <img src={dhl} alt=".." className={`${Styles.smImg}`} />
                                        <div className="d-flex flex-column">
                                            <span className="font-weight-bold">DHL</span>
                                            <div className={`${Styles.nameDesc}`}>Expected Delivery Time</div>
                                            <div className={`${Styles.nameDesc}`}>3 Days To 6 Days</div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className={Styles.viewDe}>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Styles.pageStyle} mt-2`}>
                                <span className={Styles.headStyle}>Order Summary</span>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <p className={Styles.textColor}>Order Created</p>
                                        <p className={Styles.textColor}>Order Time</p>
                                        <p className={Styles.textColor}>Subtotal</p>
                                        <p className={Styles.textColor}>Delivery fees</p>
                                    </div>
                                    <div>
                                        <p className={Styles.textColor}>Sun, May 7,2021</p>
                                        <p className={Styles.textColor}>06:30 am</p>
                                        <p className={Styles.textColor}>$200.00</p>
                                        <p className={Styles.textColor}>Delivery fees</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Styles.pageStyle} mt-2`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className={Styles.headStyle}>Subtotal</span>
                                    <span className={Styles.headStyle}>$200.00</span>
                                </div>
                            </div>
                            <div className={`${Styles.pageStyle} mt-2`}>
                                <p className={Styles.headStyle}>Delivery Address</p>
                                <p className={Styles.textColor}><strong>Street: </strong>2a Cornish el nile</p>
                                <p className={Styles.textColor}><strong>building number / flat: </strong> 2A</p>
                                <p className={Styles.textColor}><strong>Street Name: </strong> Cournish el nile</p>
                                <p className={Styles.textColor}><strong>Postcode: </strong> 12511</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default OrderNumber;