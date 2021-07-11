import React, { Fragment, Component } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import Styles from "./style.module.css";

const data = [
    { name: 'Group A', value: 500 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#F8B222', '#49A347', '#E48B25', '#F9CE99'];



class ItemChart extends Component {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <Fragment>
                <div className="d-flex align-items-center" >
                    <PieChart width={250} height={240} onMouseEnter={this.onPieEnter}>
                        <Pie
                            data={data}
                            cx={120}
                            cy={150}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>

                    </PieChart>
                    <div>
                        <div className="d-flex align-items-center mb-2">
                            <div className={Styles.chartColor1}></div>&nbsp;	
                            <span>Bow Ties</span>
                        </div>
                        <div className="d-flex align-items-center mb-2 ">
                        <div className={Styles.chartColor2}></div>&nbsp;	
                            <span>Pants</span>
                        </div>
                        <div className="d-flex align-items-center  mb-2">
                        <div className={Styles.chartColor3}></div>&nbsp;	
                            <span>Necklaces</span>
                        </div>
                        <div className="d-flex align-items-center  mb-2">
                        <div className={Styles.chartColor4}></div>&nbsp;	
                            <span>shirts</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default ItemChart;