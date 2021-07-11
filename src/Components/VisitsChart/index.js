import React, { Fragment, Component } from 'react';
import { AreaChart, Area } from 'recharts';

import Styles from "./style.module.css";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];



class VisitsChart extends Component {
    static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';

    render() {
        return (
            <Fragment>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                        <span className={Styles.numStyle}>8000</span>
                        <div class="dropdown">
                            <a className={`${Styles.linkStyle} dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Visit
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>

                    
                    
        <AreaChart
          width={100}
          height={65}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="orangered" fill="orange" />
        </AreaChart>
      
                    


                </div>
            </Fragment>
        )
    }
}
export default VisitsChart;