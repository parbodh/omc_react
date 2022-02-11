import React from 'react';

import {  useNavigate  } from "react-router-dom";
import '../newapp/css/pricing.css';
import '../newapp/css/main.css';
function Step6() {
    const navigate = useNavigate();
    
  const navigateTo = () => navigate('/dashboard');

  return (
     <>
		<section className="container h-100">
        <div className="row d-flex align-items-center justify-content-center m-0 h-100">
            <div className="w-100 ma_in_payment">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="img/logo.png" alt="" />
                        </a>
                    </nav>
                </header>
                <div className="pricing">
                    <div className="row m-0 pricing">
                        <div className="col-lg-12">
                            <h2 className="heading">Pricing Plans</h2>
                            <small className="mb-4 mt-4 d-block">Please indicate if you have had any of the following symptoms
                                consistently</small>
                        </div>
                     </div>
                     <form action="video.html" method="get"> 
                    <div className="row pricing-bx">

                    <div className="col-md-4 pricing-plan-bx pl-0">
                        <div className="price-logo">
                            <img src="img/logo.png" alt="logo" />
                        </div>
                        <ul className="p_ulist">

                            <li className="p_list"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#55bd91" className="bi bi-check-lg"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                                <p>Forever free</p>
                            </li>
                            <li className="p_list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#55bd91" className="bi bi-check-lg"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                                <p>No credit card required</p>
                            </li>

                            <li className="p_list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#55bd91" className="bi bi-check-lg"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                                <p>10,000 Records</p>
                            </li>

                            <li className="p_list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#55bd91" className="bi bi-check-lg"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                                <p>10,000 Search requests/mo</p>
                            </li>
                            <li className="p_list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#55bd91" className="bi bi-check-lg"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                                <p>10,000 Recommend requests/mo
</p>
                            </li>

                        </ul>
                    </div>

                    <div className="col-md-4 pricing-plan-bx">
                        <input type="radio" value="Renewal" name="pricing" />
                        <div className="pricing_wrapper"> 
                            <h2> Renewal</h2>
                            <p>Powerful, hosted search API to create fast and relevant search & navigation.</p>
                            <div className="d-flex price-dollar">
                                <p className="p-big"> $ </p>
                                <p className="p-small"> 45.99</p>
                            </div>
                            <p className="color-grey-800"> per 1,000 requests/mo <br/> +1,000 records </p>
                            
                            
                        </div>
                        
                    </div>

                    <div className="col-md-4 pricing-plan-bx">
                        <input type="radio" value="New Patient" name="pricing" />
                        <div className="pricing_wrapper"> 
                            <h2> New Patient</h2>
                            <p>Powerful, hosted search API to create fast and relevant search & navigation.</p>
                            <div className="d-flex price-dollar">
                                <p className="p-big"> $ </p>
                                <p className="p-small"> 49.99</p>
                            </div>
                            <p className="color-grey-800"> per 1,000 requests/mo <br/> +1,000 records </p>
                        </div>
                    </div>

                    <div className="col-md-4 pricing-plan-bx">
                        <input type="radio" value="New Patient" name="pricing" />
                        <div className="pricing_wrapper"> 
                            <h2> New Patient</h2>
                            <p>Powerful, hosted search API to create fast and relevant search & navigation.</p>
                            <div className="d-flex price-dollar">
                                <p className="p-big"> $ </p>
                                <p className="p-small"> 39.99</p>
                            </div>
                            <p className="color-grey-800"> per 1,000 requests/mo <br/> +1,000 records </p>
                        </div>
                    </div>

                    <div className="col-md-4 pricing-plan-bx">
                        <input type="radio" value="Halloween Package" name="pricing" />
                        <div className="pricing_wrapper"> 
                            <h2> Halloween Package</h2>
                            <p>Powerful, hosted search API to create fast and relevant search & navigation.</p>
                            <div className="d-flex price-dollar">
                                <p className="p-big"> $ </p>
                                <p className="p-small"> 59</p>
                            </div>
                            <p className="color-grey-800"> per 1,000 requests/mo <br/> +1,000 records </p>
                        </div>
                    </div>

                    <div className="col-md-4 pricing-plan-bx">
                        <input type="radio" value="Grower License" name="pricing" />
                        <div className="pricing_wrapper"> 
                            <h2> Grower License</h2>
                            <p>Powerful, hosted search API to create fast and relevant search & navigation.</p>
                            <div className="d-flex price-dollar">
                                <p className="p-big"> $ </p>
                                <p className="p-small"> 199.99</p>
                            </div>
                            <p className="color-grey-800"> per 1,000 requests/mo <br/> +1,000 records </p>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div className="form-group mb-0 w-100">
                            <button  onClick={navigateTo} className="btn btn-theme">Submit</button>
                        </div>
                    </div>
                    </div>
            
                    </form>
                </div>
    
            </div>
        </div>
    </section>
     </>
  );
}
export default Step6;