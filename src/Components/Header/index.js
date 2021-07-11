import React, { Fragment, Component } from 'react';
import { Layout,Dropdown,Menu } from 'antd';
import Rectangle1 from "../../images/2.jpg";

import Styles from "./style.module.css";

const { Header } = Layout;

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

class HeaderSection extends Component {

    render() {
        return (
            <Fragment>
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <div className="d-flex justify-content-around align-items-center">
                                <div className="input-group my-3 w-25">
                                    <input type="text" className={`${Styles.text} form-control`} placeholder="Search..." />
                                    <div className="input-group-append">
                                        <span className={`${Styles.searchIcon} input-group-text`} id="basic-addon2"><i className="fas fa-search"></i></span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Dropdown overlay={menu}>
                                        <i className="fas fa-cog "></i>
                                    </Dropdown>
                                    <Dropdown overlay={menu}>
                                        <i className="fas fa-ellipsis-v mx-3"></i>
                                    </Dropdown>
                                    <Dropdown overlay={menu}>
                                        <i className="fas fa-bell mr-3"></i>
                                    </Dropdown>
                                    <div>
                                        <img src={Rectangle1} alt="." className={Styles.imgStyle} />
                                    </div>
                                </div>
                            </div>
                        </Header>
            </Fragment>
        )
    }
}
export default HeaderSection;