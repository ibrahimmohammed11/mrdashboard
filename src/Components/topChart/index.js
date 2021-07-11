import React, { Fragment, Component } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Styles from "./style.module.css";

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];



class TopChart extends Component {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <Fragment>
                <div className="d-flex align-items-center justify-content-between flex-wrap" >

                    <PieChart width={260} height={250}>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={40} fill="#49A347" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#F8B222" label />

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
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default TopChart;