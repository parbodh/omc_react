import React,{useState} from 'react';
import axios from 'axios';
import {  useNavigate  } from "react-router-dom";
import '../newapp/css/profile.css';
import '../newapp/css/main.css';
function Step3() {
    const navigate = useNavigate();
    let TOKEN  = localStorage.getItem('token');
    let LsPatientName  = localStorage.getItem('name');
    let LsPatientMobile  = localStorage.getItem('mobileno');
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
    let [account,setAccount] = useState({
        
    });
    let handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      account[name] = value;
      setAccount(account);
   
    }
   
    const onChangePicture = e => {
        let images = e.target.files
        let fd = new FormData()
        fd.append("images", images);
        
    };
   
   let SubmitProfile = (e) => {
        e.preventDefault();
        const userdaTa = {
            token:TOKEN,
            license: account.license,
            gender:account.gender,
            dob:account.dob,
            refferedby:account.refferedby,
            apartment:account.apartment,
            city:account.city,
            state:account.state,
            zipcode:account.zipcode,
            country:account.country,
        };
       

        axios.post('https://onlinemjcard.com/omcapp/api/wSaveProfile', { userdaTa })
        .then(res => {
           // console.log(res.data);   
            if(res.data.StatusCode === '200'){
                //alert(res.data.message);
                navigate('/questions'); 
            }else{
                alert(res.data.message);
            }
        })
       

    }
  return (
     <>
         <section className="container h-100">
            <div className="row d-flex align-items-center justify-content-center m-0 h-100">
                <div className="w-100 ma_in_profile">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html">
                                 <img src="img/logo.png" alt=""/>
                            </a>
                        </nav>
                    </header>

                    <form className="row m-0 pr_ofile"  method="POST" onSubmit={SubmitProfile}  encType="multipart/form-data">
                        <input type="hidden" name='token' value={TOKEN} />
                        <div className="col-md-4 col-lg-4 bg_pro">
                            <div className="up_pro">
                                <div className="profile_picture"></div>
                                <div className="upload">
                                    <input type="file" id="image"  name="image" accept="image/*" onChange={onChangePicture}  />
                                    <label className="btn-upload" htmlFor="input-file" role="button">
                                        <img src="/img/camera.png" className="camera" alt=""/>
                                    </label>
                                </div>
                            </div>
                            <br/>
                            {/* <div className="fields t_op side">    
                                <small className="mb-4 mt-2 d-block">Important Information</small>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">*Height</label>
                                    <input type="text" placeholder="*Height" className="input_ad"  />
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">*Weight</label>
                                    <input type="text" placeholder="*Weight LBS" className="input_ad"  />
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-8 col-lg-8">
                            <div className="fields t_op">    
                                <div className="form-group w-100">
                                    <input type="text" placeholder="Full Name" defaultValue={LsPatientName} className="name"   />
                                </div>
                                <hr/>
                                <small className="mb-4 mt-2 d-block">Basic Information</small>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">Phone No :</label>
                                    <input type="text" placeholder="Phone No" defaultValue={LsPatientMobile} className="phone" disabled />
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">Email :</label>
                                    <input type="email" placeholder="Email" defaultValue={LsPatientEmail} className="email"   disabled/>
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">Lic. or State ID</label>
                                    <input type="text" name='license' placeholder="Enter your Driver's Lic. or State ID" className="input_ad" onChange={handleChange}  />
                                </div>
                                <div className="form-group mb-4 w-100 gender">
                                    <label className="mb-0 gen" >Gender</label>
                                    <input id='male' type="radio" name='gender' value="male" onChange={handleChange} />
                                    <label htmlFor="male">Male</label>
                                    <input id='female' type="radio" name='gender' value="female" onChange={handleChange}/>
                                    <label htmlFor="female">Female</label>
                                    <input id='other' type="radio" name='gender' value="other" onChange={handleChange}/>
                                    <label htmlFor="other">Other</label>
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">Date of Birth</label>
                                    <input type="date" name='dob' className="input_ad" onChange={handleChange} />
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">Referred By</label>
                                    <input type="text" name='refferedby' placeholder="Enter Reffered By" className="input_ad" onChange={handleChange} />
                                </div>
                                <hr/>
                                <small className="mb-4 mt-2 d-block">Contact Information</small>
                                {/* <div className="form-group mb-4 w-100">
                                    <label className="mb-0">*Address</label>
                                    <input type="text" placeholder="*Address" className="input_ad"  />
                                </div> */}
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">Unit or Apt#</label>
                                    <input type="text" placeholder="Enter Unit or Apt#" name='apartment' className="input_ad" onChange={handleChange} />
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">*City</label>
                                    <input type="text" placeholder="Enter City" name='city' className="input_ad" onChange={handleChange} />
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">*State</label>
                                    <input type="text" placeholder="Enter State" name='state' className="input_ad" onChange={handleChange} />
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">*Zip</label>
                                    <input type="text" placeholder="Enter Zipcode" name='zipcode' className="input_ad" onChange={handleChange} />
                                </div>
                                <div className="form-group mb-4 w-100">
                                    <label className="mb-0">*Country</label>
                                    <input type="text" placeholder="Enter Country" name='country' className="input_ad" onChange={handleChange} />
                                </div>
                                <hr/>
                                <div className="form-group mb-4 w-100">
                                    <button  className="btn btn-theme">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
       
     </>

  );
}
export default Step3;