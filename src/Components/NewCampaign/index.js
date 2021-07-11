import React, { Fragment } from 'react';
import { Menu, Dropdown, Calendar } from 'antd';
import Styles from "./style.module.css";

function onPanelChange(value, mode) {
    console.log(value, mode);
}
const { SubMenu } = Menu;
const menu = (
    <Menu >
        <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    </Menu>
);

function NewCampaign() {

    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div>
                    <div >
                        <span className={Styles.orangeColor}>New Campaign</span>
                    </div>
                    <div >
                        <span className="text-muted"><span className={Styles.orangerColor}>Campaign /</span> Add New Campaign </span>
                    </div>
                </div>
                <div>
                    <button type="button" className={`${Styles.btnStyle1} btn mr-3 shadow`}>Preview</button>
                    <button type="button" className={`${Styles.btnStyle2} btn shadow`}>Publish</button>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-6">
                    <div className={Styles.CardStyle}>
                        <h5>Describe Your Campaign </h5>
                        <div className="my-3">
                            <label className={Styles.grayColor}>Ad Name*</label>
                            <input type="text" className={`${Styles.text} form-control`} />
                        </div>
                        <div>
                            <label className={Styles.grayColor}>Ad Title*</label>
                            <input type="text" className={`${Styles.text} form-control`} />
                        </div>
                        <div className="my-3">
                            <label className={Styles.grayColor}>Description*</label>
                            <textarea rows="6" className={`${Styles.text} form-control`} />
                        </div>
                        <div>
                            <label className={Styles.grayColor}>Tags*</label>
                            <textarea rows="2" className={`${Styles.text} form-control`} />
                        </div>
                        <div className="row my-3" >
                            <div className="col-md-6">
                                <label className={Styles.grayColor}>Set Daily Budget*</label>
                                <input type="text" className={`${Styles.text} form-control`} />
                            </div>
                            <div className="col-md-6">
                                <label className={Styles.grayColor}>Total Budget*</label>
                                <input type="text" className={`${Styles.text} form-control`} />
                            </div>
                            <div className="col-md-6 mt-3">
                                <button type="button" className={`${Styles.numberBtn} btn mr-2`}>$200</button>
                                <button type="button" className={`${Styles.numberBtn} btn  mr-2`}>$500</button>
                                <button type="button" className={`${Styles.numberBtn} btn  mr-2`}>$1000</button>
                                <button type="button" className={`${Styles.numberBtn} btn  mr-2`}>$2000</button>
                                <button type="button" className={`${Styles.numberBtn} btn  mr-2`}>$2500</button>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="progress">
                                    <div className={`${Styles.Prog} progress-bar`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className={Styles.grayColor}>Date Start</label>
                                <div className="input-group mb-3">
                                    <input type="text" className={`${Styles.text} form-control`} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className={`${Styles.startDate} input-group-text`} id="basic-addon2">
                                            <Dropdown overlay={menu}>
                                                <i className={` far fa-calendar-alt`}></i>
                                            </Dropdown>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6  mt-3">
                                <label className={Styles.grayColor}>Date End</label>
                                <div className="input-group mb-3">
                                    <input type="text" className={`${Styles.text} form-control`} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className={`${Styles.startDate} input-group-text`} id="basic-addon2">
                                            <Dropdown overlay={menu}>
                                                <i className={` far fa-calendar-alt`}></i>
                                            </Dropdown>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={Styles.CardStyle}>
                        <div className="d-flex align-items-center justify-content-between my-3">
                            <span>Images </span>
                            <span>+Upload </span>
                        </div>
                        <div className="mb-2">
                            <textarea rows="2" placeholder="Write the images description…" className={`${Styles.text} form-control`} />
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2">
                                <div className={Styles.addImg}>
                                    <i className={`${Styles.addCircle} fas fa-plus-circle fa-3x`}></i>
                                    <span className={`${Styles.addImgFont}  font-weight-bold`}>Add Image</span>
                                    <span className={Styles.addImgFont}>Adding Images Make Selling Easer</span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className={Styles.addImg1}>
                                    <i className={`${Styles.addCircle} fas fa-plus-circle fa-lg`}></i>
                                    <span className={`${Styles.addImgFont1}  font-weight-bold my-2`}>Add Image</span>
                                    <span className={Styles.addImgFont1}>Adding Images Make Selling Easer</span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className={Styles.addImg1}>
                                    <i className={`${Styles.addCircle} fas fa-plus-circle fa-lg`}></i>
                                    <span className={`${Styles.addImgFont1}  font-weight-bold  my-2`}>Add Image</span>
                                    <span className={Styles.addImgFont1}>Adding Images Make Selling Easer</span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className={Styles.addImg1}>
                                    <i className={`${Styles.addCircle} fas fa-plus-circle fa-lg`}></i>
                                    <span className={`${Styles.addImgFont1}  font-weight-bold  my-2`}>Add Image</span>
                                    <span className={Styles.addImgFont1}>Adding Images Make Selling Easer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.CardStyle} mt-3`}>
                        <h5 className="mb-4 text-muted">Choose Ad Goal*</h5>
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Choose Ad Goal" className={`${Styles.text} form-control`} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className={`${Styles.dropMen} input-group-text`} id="basic-addon2">
                                    <div className="dropdown dropleft">
                                        <button className={Styles.dropMen} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-caret-down"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#g">Click</a>
                                            <a className="dropdown-item" href="#g">Conversion</a>
                                            <a className="dropdown-item" href="#g">Booking</a>
                                            <a className="dropdown-item" href="#g">Engagement</a>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}



export default NewCampaign;