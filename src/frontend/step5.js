import React,{useState} from 'react';
import axios from 'axios';
import {  useNavigate  } from "react-router-dom";
import '../newapp/css/upload.css';
import '../newapp/css/main.css';
function Step5() {
    const navigate = useNavigate();
    let TOKEN  = localStorage.getItem('token');
    let LsPatientEmail  = localStorage.getItem('email');
    //console.log(TOKEN);
    if(TOKEN === null){
        navigate('/error');
    }
    const user = {
        token: TOKEN
    };
   
    axios.post('https://onlinemjcard.com/omcapp/api/wGetToken', { user })
    .then(res => {
        //console.log(res.data);
        if(res.data.token !== TOKEN){
            navigate('/error');
        }else{
            
        }
    }) 
    
   
  return (
     <>
		<section className="container h-100">
            <div className="row d-flex align-items-center justify-content-center m-0 h-100">
                <div className="w-100 upload_ma_in">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src="img/logo.png" alt=""/>
                            </a>
                        </nav>
                    </header>
                    <form className="row m-0 upl" action="pricing-plan.html">
                        <div className="col-lg-12">
                            <h2 className="heading">UPLOAD DOCUMENTS</h2>
                            <small className="mb-4 mt-4 d-block">Please upload your document mentioned below</small>
                        </div>
                        <div className="col-lg-12">
                            <div className="box_out row m-0">
                                <div className="file-upload">
                                    <div className="image-upload-wrap">
                                        <input className="file-upload-input" type='file'  onChange={this.onChange} />
                                        <div className="drag-text">
                                            <h3>DRAG HERE TO UPLOAD DRIVER'S LIC. OR STATE ID</h3>
                                        </div>
                                    </div>
                                    <div className="file-upload-content">
                                        <img className="file-upload-image" src="#" alt="your image" />
                                        <div className="image-title-wrap">
                                            <button type="button"  className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <small className="mb-4 mt-5 d-block">I give my consent to telemedicine.</small>

                            <div className="box_out row m-0 mb-3">
                                <div className="col-lg-12">
                                    <p>(Telehealth means the mode of delivering health care services and public health via information and communication technologies to facilitate the diagnosis, consultation, treatment, education, care management, and self-management of a patient's health care.)</p>
                                    <p>Additionally, you are also aware that your recommendation may be revoked at any time if you misrepresented yourself on this form.</p>
                                    <p>I declare the following to be true:</p>
                                </div>
                                <div className="col-lg-12">
                                    <hr/>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="control control--checkbox">I am over the age of 18
                                            <input type="checkbox" />
                                            <div className="control__indicator"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="control control--checkbox">I am a California resident
                                            <input type="checkbox" />
                                            <div className="control__indicator"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="control control--checkbox">I don't have schizophrenia and I don't have hallucinations
                                            <input type="checkbox" />
                                            <div className="control__indicator"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="control control--checkbox">(For females only) I am not pregnant
                                            <input type="checkbox" />
                                            <div className="control__indicator"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <small className="mb-4 mt-5 d-block">PATIENT'S SIGNATURE</small>

                            <div className="box_out cb_d row m-0 mb-3 signature">
                                <p>By electronically signing this document, you declare that the information on this form is true and correct.</p>
                                <note>Use your mouse, finger or stylus to add your signature.</note>
                                <img src="img/sign.png" className="sig" alt=""/>
                                <canvas id="signature-pad" className="signature-pad" ></canvas>
                            </div>
                        </div>
                       
                        <div className="col-lg-12">
                            <div className="box_out cb_d m-0 mb-3">
                                <div className="col-lg-12">
                                    <div className="form-group mb-4 w-100">
                                        <div className="form-group">
                                            <label className="control control--checkbox"> I agree to the <a href="#">terms and conditions</a>
                                                <input type="checkbox" />
                                                <div className="control__indicator"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group mb-4 w-100">
                                <button className="btn btn-theme">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
     </>
  );
}
export default Step5;