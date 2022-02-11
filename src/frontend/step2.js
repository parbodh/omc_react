import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate ,Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import '../newapp/css/otp.css';
import '../newapp/css/main.css';
function Step2() {
    const navigate = useNavigate();
    // const navigateTo = (`) => navigate('/profile');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let TOKEN  = localStorage.getItem('token');
    let MOBILENO  = localStorage.getItem('mobileno');
    let EMAILID  = localStorage.getItem('email');
    //console.log(MOBILENO);
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
    let [account,setAccount] = useState({
        otp: '',
       
      });
    
      let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        account[name] = value;
        setAccount(account);
     
      }
    let verifyOTP = (e) => {
        e.preventDefault();
        const user = {
            otp: account.otp,
            mobile:MOBILENO,
            email:EMAILID
          };
        axios.post('https://onlinemjcard.com/omcapp/api/wVerifyOtp', { user })
        .then(res => {
            if(res.data.StatusCode === '200'){
                localStorage.removeItem('token');
                localStorage.setItem('token', res.data.token);
                alert(res.data.message);
                navigate('/profile');
            }else{
                alert(res.data.message);
            }
        })
       // history.push("/profile");
    }
    let ResendOTP = (e) => {
        e.preventDefault();
        const user = {
            mobile:MOBILENO
          };
        axios.post('https://onlinemjcard.com/omcapp/api/wResentOtp', { user })
        .then(res => {
            //  console.log(res);
            // console.log(res.data);
            if(res.data.StatusCode === '200'){
                alert(res.data.message);
                //history.push("/profile");
            }else{
                alert(res.data.message);
            }
        })
    }
    let updateNo = (e) => {
        e.preventDefault();
        const user = {
            newmobile:account.mobile,
            oldmobile:MOBILENO,
            email:EMAILID
          };
        //alert(UpdateMob);
        axios.post('https://onlinemjcard.com/omcapp/api/wChangeNumber', { user })
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            if(res.data.StatusCode === '200'){
                localStorage.removeItem('mobileno');
                localStorage.setItem('mobileno', account.mobile);
                alert(res.data.message);
                navigate('/otp');
            }else{
                alert(res.data.message);
            }
        })
    }
  return (
     <>
         <section className="container h-100">
            <div className="row d-flex align-items-center justify-content-center m-0 h-100">
                <div className="col-md-6 col-lg-12 col-xl-12 ma_in">
                    <form className="digit-group h-100 row" autoComplete="off" >
                        <div className="col-lg-7 col-xl-7  d-flex align-items-center h-100">
                            <div className="col-lg-12">
                                <h1>Authentication</h1>
                                <h4>Check 6-digit code.</h4>
                                <p>If you don't receive a text message <Link to="#" onClick={ResendOTP}>Send Again</Link> or <br/>
                                <Link to="#" variant="primary" onClick={handleShow}>Change Phone No</Link></p>
                                
                                    <input type="text" name="otp" placeholder="******" minLength="6" maxLength="6" id="keyboard" onChange={handleChange} />
                                    <button className="verify" onClick={verifyOTP}>Verify</button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 d-flex in_put align-items-center h-100">
                            <div className="keyboard row justify-content-center">
                                <input type="submit" className="char" value="1"/>
                                <input type="submit" className="char" value="2"/>
                                <input type="submit" className="char" value="3"/>
                                <input type="submit" className="char" value="4"/>
                                <input type="submit" className="char" value="5"/>
                                <input type="submit" className="char" value="6"/>
                                <input type="submit" className="char" value="7"/>
                                <input type="submit" className="char" value="8"/>
                                <input type="submit" className="char" value="9"/>
                                <input type="submit" className="char" value="0"/>
                                <button type="reset" className="reset">
                                    <img src="img/backspace.png" alt="Reset"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <Modal size="sm" show={show} onHide={handleClose}>
                <div className="modal-content">
                    <img src="../../assets/img/ch_no.jpg" className="img-fluid w-100" alt=""/>
                    <form>
                        <div className="form-group text-center justify-content-center">
                            <label className="w-100">Change Phone No</label>
                            <small className="w-100">OTP is valid for 2 minutes please make sure that you have entered a right phone no</small>
                            <input type="text" placeholder="Enter Mobile no" name="mobile" maxLength="10" className="w-100" onChange={handleChange} />
                            <button onClick={updateNo}>Send OTP</button>
                        </div>
                    </form>
                </div>
        </Modal>
     </>




  );
}
export default Step2;