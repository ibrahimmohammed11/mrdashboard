import React, { Component, Fragment } from 'react';
import Table from "ant-responsive-table";
import StarRatings from 'react-star-ratings';
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
    Details: "Product",
    Category: "woman bags",
    Options: "colors",
    Price: "$100",
    Quantity: "30",
    Code: "AB0001",
    Rate: "Star",
    Actions: "",
  },
  {
    key: "2",
    Details: "Product",
    Category: "woman bags",
    Options: "colors",
    Price: "$100",
    Quantity: "30",
    Code: "AB0001",
    Rate: "Star",
    Actions: "dots",
  }
];
const columns = [
  {
    title: "Product Details",
    dataIndex: "Details",
    key: "Details",
    showOnResponse: true,
    showOnDesktop: true,
    render: () => (
      <div className="d-flex  align-items-center flex-wrap">
        <img src={img1} alt=".." className={`${Styles.smImg}`} />
        <div className="d-flex flex-column">
          <span className="font-weight-bold">Lady Biage</span>
          <div className={`${Styles.nameDesc}`}>Woman Trendy Accessories</div>
        </div>
      </div>

    ),
  },
  {
    title: "Category",
    dataIndex: "Category",
    key: "Category",
    showOnResponse: true,
    showOnDesktop: true,
    render: () => (
      <div>
        <span className={`${Styles.catStyle} mr-1`}>Woman</span>
        <span className={Styles.catStyle}>Bags</span>
      </div>

    ),
  },
  {
    title: "Options",
    dataIndex: "Options",
    key: "Options",
    showOnResponse: true,
    showOnDesktop: true,
    render: () => (
      <ul className={Styles.colorList}>
        <li className={Styles.Color1}></li>
        <li className={Styles.Color2}></li>
        <li className={Styles.Color3}></li>
      </ul>
    ),
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
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
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Rate",
    dataIndex: "Rate",
    key: "Rate",
    showOnResponse: true,
    showOnDesktop: true,
    render: () => (
      <div className={`${Styles.rating}`}>
        <StarRatings
          rating={3}
          starRatedColor="#f83600"
          changeRating={null}
          numberOfStars={5}
          starDimension="15px"
          starSpacing="0px"
          name="rating"
        />
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
        <i className={`${Styles.orangeSt} fas fa-ellipsis-h`}></i>
      </Dropdown>

    ),
  }
];

class Products extends Component {


  render() {

    return (
      <Fragment>
        <div className={`${Styles.CardStyle} my-2`}>
          <div className="d-flex flex-column">
            <span className={Styles.orangeColor}>Products</span>
            <Link to="/vendor/addproduct" className={Styles.addProduct}><i className="fas fa-plus"></i>&nbsp;	Add New Product</Link>
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


export default Products;