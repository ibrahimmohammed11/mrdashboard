import React, { Component, Fragment } from "react";
import { Formik, Form, Field } from 'formik';
import Styles from "./style.module.css";



class AddProduct extends Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };
  render() {
    return (
      <Fragment>
        <div className={`${Styles.pageStyle} p-4 mt-3 mb-5`}>
          <h6 className={Styles.newProd}>Add Product</h6>
          <div className={`${Styles.aboutStyle} my-2`}>
            <span><i className="fas fa-info-circle"></i>&nbsp;	<span className="font-weight-bold">About Category</span></span>
          </div>
          <Formik
            initialValues={{
              name: '',
              category: '',
              type: '',
              describtion: "",
              price: '',
              currency: "",
              main_image: "",
              into: '',
              additional_images: ''
            }}
          >
            <Form>
              <div className="row">
                <div className="col-md-6">
                  <label className={Styles.grayColor}>Product Name*</label>
                  <Field name="ProductName" className={`${Styles.text} form-control`} />
                </div>
                <div className="col-md-6">
                  <label className={Styles.grayColor}>SubTitle*</label>
                  <Field name="SubTitle" className={`${Styles.text} form-control`} />
                </div>
                <div className="col-md-6">
                  <label className={Styles.grayColor}>Product Category*</label>
                  <Field name="Category" className={`${Styles.text} form-control`} />
                </div>
                <div className="col-md-6">
                  <label className={Styles.grayColor}>Status*</label>
                  <Field name="Status" className={`${Styles.text} form-control`} />
                </div>
                <div className="col-md-6">
                  <label className={Styles.grayColor}>Price*</label>
                  <Field name="Price" className={`${Styles.text} form-control`} />
                </div>
                <div className="col-md-6">
                  <label className={Styles.grayColor}>Discount*</label>
                  <Field name="Discount" className={`${Styles.text} form-control`} />
                </div>
                <div className="col-md-12">
                  <label className={Styles.grayColor}>Product Description*</label>
                  <textarea rows="4" className={`${Styles.text} form-control`}></textarea>
                </div>
              </div>
              <div>
                <p className={`${Styles.aboutStyle} my-2`}><i className="fas fa-images"></i>&nbsp;	Upload Images</p>
                <div className="row">
                  <div className="col-xl-3  col-sm-6 mb-2">
                    <div className={Styles.addImg}>
                      <i className={`${Styles.grayColor} fas fa-plus-circle fa-2x`}></i>
                      <span className={Styles.addImgFont}>Add Image</span>
                      <span className={Styles.addImgFont}>Adding Images Make Selling Easer</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6  mb-2">
                    <div className={Styles.addImg}>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6  mb-2">
                    <div className={Styles.addImg}>

                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6  mb-2">
                    <div className={Styles.addImg}>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className={`${Styles.aboutStyle} my-2`}><i className="fas fa-info-circle"></i>&nbsp;	About Product</p>
                <div className="row">
                  <div className="col-md-6">
                    <label className={Styles.grayColor}>Brand Name*</label>
                    <Field name="Brand" className={`${Styles.text} form-control`} />
                  </div>
                  <div className="col-md-6">
                    <label className={Styles.grayColor}>Delivery Conditions*</label>
                    <Field name="Delivery" className={`${Styles.text} form-control`} />
                  </div>
                  <div className="col-md-6">
                    <label className={Styles.grayColor}>Condition*</label>
                    <Field name="Condition" className={`${Styles.text} form-control`} />
                  </div>
                  <div className="col-md-6">
                    <label className={Styles.grayColor}>Status*</label>
                    <Field name="Status" className={`${Styles.text} form-control`} />
                  </div>
                </div>
              </div>
              <div>
                <p className={`${Styles.aboutStyle} my-2`}><i className="fas fa-info-circle"></i>&nbsp;	Product Attributes</p>
                <div>
                  <div>
                    <p className={`${Styles.aboutStyle} my-2`}>Choose Colour</p>
                    <ul className={Styles.colorList}>
                      <li className={Styles.Color1}></li>
                      <li className={Styles.Color2}></li>
                      <li className={Styles.Color3}></li>
                      <li className={Styles.Color4}></li>
                      <li className={Styles.Color5}></li>
                      <li className={Styles.Color6}></li>
                    </ul>
                  </div>
                  <div>
                    <p className={`${Styles.aboutStyle} my-2`}>Choose Size</p>
                    <ul className={Styles.colorList}>
                      <li className={Styles.size1}>Small</li>
                      <li className={Styles.size2}>Medium</li>
                      <li className={Styles.size3}>Large</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`${Styles.aboutStyle} my-2`}>Select Quantity</p>
                    <div className="d-flex align-items-center flex-wrap">
                      <div aria-label="small outlined button group" className="mr-5 mb-2">
                        <button onClick={this.handleDecrement} className={Styles.btnLeft}>-</button>
                        <button disabled className={Styles.btnCenter}>{this.state.counter}</button>
                        <button onClick={this.handleIncrement} className={Styles.btnRight}>+ </button>
                      </div>
                      <div>
                        <button className={Styles.addMore}><i className="fas fa-plus"></i>&nbsp;Add More Product</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end flex-wrap my-5">
              <button className={Styles.cancelBtn}>Cancel</button>
                <button className={Styles.saveBtn}>Save</button>
              </div>
            </Form>
          </Formik>
        </div>
      </Fragment>
    )
  }

}

export default AddProduct;

