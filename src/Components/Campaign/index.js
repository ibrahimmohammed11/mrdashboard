import React, { Fragment } from 'react';
import Table from "ant-responsive-table";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Styles from "./style.module.css";


const dataSource = [
    {
        key: "1",
        percentage: "",
        ID: "",
        Today: "",
        Total: "",
        Going: "",
        Play: "",
    },
    {
        key: "2",
        percentage: "",
        ID: "",
        Today: "",
        Total: "",
        Going: "",
        Play: "",
    }
];
const columns = [
    {

        dataIndex: "percentage",
        key: "percentage",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div style={{ width: 100, height: 100, }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`}
                    styles={{
                        path: {
                            stroke: `orange`
                        },
                        text: {
                            // Text color
                            fill: 'orange',
                        },
                    }}
                />
            </div>
        ),
    },
    {

        dataIndex: "ID",
        key: "ID",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex flex-column">
                <span className={Styles.orColor}>#AD0001</span>
                <div className="font-weight-bold">50% Off On Shirts and Get  bag Now!</div>
                <div className="text-muted">Published On 5 March 2020</div>
            </div>
        ),
    },
    {

        dataIndex: "Today",
        key: "Today",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex flex-column">
                <span className="font-weight-bold">$ 60.00</span>
                <div className="text-muted">Today Spends</div>
            </div>
        ),
    },
    {

        dataIndex: "Total",
        key: "Total",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex flex-column">
                <span className="font-weight-bold">$ 60.00</span>
                <div className="text-muted">Total Spends</div>
            </div>
        ),
    },
    {

        dataIndex: "Going",
        key: "Going",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div >
                <button type="button" className={`${Styles.onGoing} btn shadow`}>On Going</button>
            </div>
        ),
    },
    {

        dataIndex: "Play",
        key: "Play",
        showOnResponse: true,
        showOnDesktop: true,
        render: () => (
            <div className="d-flex align-items-center">
                <button type="button" className={`${Styles.playBtnStyle} btn mr-3 shadow`}><i className="fas fa-play"></i></button>
                <button type="button" className={`${Styles.pauseBtnStyle} btn mr-3 shadow`}><i className="fas fa-pause"></i></button>
                <button type="button" className={`${Styles.stopBtnStyle} btn mr-3 shadow`}><i className="fas fa-stop"></i></button>

            </div>
        ),
    },
];
const percentage = 71;





function Campaign() {

    return (
        <Fragment>
            <div className={`${Styles.CardStyle} my-2`}>
                <div className="mt-3">
                    <span className={Styles.orangeColor}>Campaign</span>
                </div>
                <div >
                    <span className="text-muted">Current Campaign list</span>
                </div>
                <div className="d-flex flex-start align-items-center  my-3">
                    <button type="button" className={`${Styles.btnStyle} btn mr-3 shadow`}><span className="text-muted"><i className="fas fa-bookmark"></i>&nbsp;	Bookmark</span></button>
                    <button type="button" className={`${Styles.btnStyle} btn mr-3 shadow`}><span className={Styles.start}><i className="fas fa-play"></i>&nbsp;	Start</span></button>
                    <button type="button" className={`${Styles.btnStyle} btn mr-3 shadow`}><span className="text-muted"><i className="fas fa-pause"></i>&nbsp;	Pause</span></button>
                    <button type="button" className={`${Styles.btnStyle} btn mr-3 shadow`}><span className={Styles.stop}><i className="fas fa-stop"></i>&nbsp;	Stop</span></button>

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



export default Campaign;


// render: (text) => <a>{text}</a>,