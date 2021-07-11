import React, { Fragment, Component } from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import SideBar from '../SideBar';
import HeaderSection from '../Header';
import ProductDetails from '../ProductDetails';
import MainPage from '../mainPage';
import Products from '../Product';
import AddProduct from '../AddProduct';
import OrdersHistory from '../OrdersHistory';
import OrderNumber from '../OrderNumber';
import CustomerList from '../CustomerList';
import LiveOrders from '../LiveOrders';
import AdsDashboard from '../AdsDashboard';
import Spending from '../Spending';
import Campaign from '../Campaign';
import NewCampaign from '../NewCampaign';


const { Content } = Layout;
class Dashboard extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {

        this.setState({ collapsed });
    };

    render() {



        return (
            <Fragment>
                <Layout style={{ minHeight: '100vh' }}>

                    <SideBar />

                    <Layout className="site-layout">

                        <HeaderSection />
                        <Content style={{ margin: '0 16px' }}>
                            <Switch>

                                <Route path="/vendor/ProductDetails" component={ProductDetails} />
                                <Route path="/vendor/Product" component={Products} />
                                <Route path="/vendor/addproduct" component={AddProduct} />
                                <Route path="/vendor/ordershistory" component={OrdersHistory} />
                                <Route path="/vendor/ordernumber" component={OrderNumber} />
                                <Route path="/vendor/customerlist" component={CustomerList} />
                                <Route path="/vendor/liveorders" component={LiveOrders} />
                                <Route path="/vendor/adsdashboard" component={AdsDashboard} />
                                <Route path="/vendor/spending" component={Spending} />
                                <Route path="/vendor/campaign" component={Campaign} />
                                <Route path="/vendor/newcampaign" component={NewCampaign} />
                                <Route path="/vendor" component={MainPage} />
                                <Redirect from="/" exact to="/vendor" />
                            </Switch>
                        </Content>

                    </Layout>
                </Layout>

            </Fragment>
        )
    }
}
export default Dashboard;