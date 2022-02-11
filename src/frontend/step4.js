import React,{useState , useEffect } from 'react';
import axios from 'axios';
import {  useNavigate  } from "react-router-dom";
import '../newapp/css/ques.css';
import '../newapp/css/main.css';


function Step4() {
    const navigate = useNavigate();
    let TOKEN  = localStorage.getItem('token');
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

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ symptomes: [] });
    const [symptomsdata, setsymptoms] = useState({ symptoms: [] });
    
    
   
 
    const baseURL = "https://onlinemjcard.com/omcapp/api/wGetSymptomes";
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);
    
    
    let [account,setAccount] = useState({
        cbd_product :''
    });
    let handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      account[name] = value;
      setAccount(account);
    } 
    
    const [isSave, setIsSave] = useState([]);
    
    const handler = (value) => {
        //console.log(value);
        isSave.push(value);
        //setIsSave(value);
        
    };
    let SubmitProfile = (e) => {
        e.preventDefault();
        if(isSave.length < 1){
            alert('SYMPTOMS field required');
        }else{
            //console.log(isSave.length);
            const userdaTa = {
                token:TOKEN,
                symptomes: isSave,
                othersymptomes:account.othersymptomes,
                allergies:account.allergies,
                medicalcondition:account.medical_condition,
                cbdproduct:account.cbd_product,
            };
        //console.log(userdaTa);
            axios.post('https://onlinemjcard.com/omcapp/api/wSaveSymoptomes', { userdaTa })
            .then(res => {
                //console.log(res.data);   
                if(res.data.StatusCode === '200'){
                    //alert(res.data.message);
                    navigate('/uploadDoc');
                }else{
                    alert(res.data.message);
                }
            })
        }
    }
  
  return (
     <>
		<section className="container h-100">
            <div className="row d-flex align-items-center justify-content-center m-0 h-100">
                <div className="w-100 ma_in_questions">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src="img/logo.png" alt=""/>
                            </a>
                        </nav>
                    </header>
                    <form className="row m-0 ques" method="POST" onSubmit={SubmitProfile} >
                        <div className="col-lg-12">
                            <h2 className="heading">QUALIFYING CONDITIONS</h2>
                            <small className="mb-4 mt-4 d-block">Please indicate if you have had any of the following symptoms consistently</small>
                        </div>
                     
                        
                        <div className="col-lg-12">
                            <div className="box_out row m-0">
                            {isLoading ? (
                                <div>Loading ...</div>
                            ) : (                                                                                                                                  
                            <>
                            {data.symptomes.map(item => (
                            <div className="col-6 col-md-4 col-lg-4" key={item.objectID}>
                                <div className="form-group">
                                    <label className="control control--checkbox">{item.qualify_condition}
                                   
                                        <input type="checkbox" onChange={(ev) => handler(ev.target.value)} value={item.qualify_condition} />
                                        <div className="control__indicator"></div>
                                    </label>
                                </div>
                            </div>
                            ))}</>
                            )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <small className="mb-4 mt-5 d-block">Answer the listed question i am sure it will help you while consulting</small>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <div className="box_out row m-0 mb-3">
                                <div className="col-lg-12">
                                    <div className="form-group ques_text">
                                        <label>other symptoms (if any)</label>
                                        <input type="text" className="w-100 input_ad" name="othersymptomes" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="box_out row m-0 mb-3">
                                <div className="col-lg-12">
                                    <div className="form-group ques_text">
                                        <label>What are your allergies? (If any)</label>
                                        <input type="text" className="w-100 input_ad" name="allergies" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="box_out row m-0 mb-3">
                                <div className="col-lg-12">
                                    <div className="form-group ques_text">
                                        <label>What medical condition you want to use cannabis for?</label>
                                        <input type="text" className="w-100 input_ad" name="medical_condition" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="box_out cb_d row m-0 mb-3 rad_io">
                                <img src="img/cbd.png" className="img-fluid" alt=""/>
                                <label className="mb-2 mt-2 lbl">Are you interested in CBD Products?</label>
                                <div className="yes_n">
                                    <input id='yes' type="radio" name='cbd_product' value="yes" onChange={handleChange} defaultChecked required  />
                                    <label htmlFor="yes">Yes</label>
                                    <input id='no' type="radio" name='cbd_product' value="no" onChange={handleChange} />
                                    <label htmlFor="no">No</label>
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
export default Step4;