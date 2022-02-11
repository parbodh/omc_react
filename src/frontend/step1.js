import React, { useState } from 'react';
import axios from 'axios';
import '../newapp/css/bootstrap.min.css';
import '../newapp/css/home_new.css';
import { useNavigate , Link } from "react-router-dom";
function Step1() {
    const navigate = useNavigate();
	//localStorage.clear();
	let TOKEN  = localStorage.getItem('token');
	console.log(TOKEN);
	const user = {
		token: TOKEN
	  };
	
	  axios.post('https://onlinemjcard.com/omcapp/api/wGetToken', { user })
	  .then(res => {
		  //console.log(res.data);
		  if(res.data.token === TOKEN){
			  navigate('/home');
		  }else{
			  
		  }
	  })  

    let [account,setAccount] = useState({
			name: '',
			email: '',
			mobile: '',
			password: '',
			cpassword: '',
			acceptterms: '',
      });
    
	  	const selectShortlistedApplicant = (e) => {
			const checked = e.target.checked;
			if (!checked) {
				alert('Terms & condition required.');
			} 
		}
      let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        account[name] = value;
        setAccount(account);
     
      }

	let SubmitPressed = (e) => {
        e.preventDefault();
    
      /*------------Start post request -----------*/
		
		if(account.password == account.cpassword){
			const user = {
				name: account.name,
				email: account.email,
				mobile: account.mobile,
				password: account.password,
				cpassword: account.cpassword,
				acceptterms: account.acceptterms
			};
			axios.post('https://onlinemjcard.com/omcapp/api/wUserRegister', { user })
				.then(res => {
				// console.log(res);
				// console.log(res.data);
				if(res.data.StatusCode === '200'){
					alert(res.data.message);
					localStorage.setItem('token', res.data.token);
					localStorage.setItem('mobileno', account.mobile);
					localStorage.setItem('name', account.name);
					localStorage.setItem('email', account.email);
					// console.log(TOKEN);
					navigate('/otp');
				}else{
					
					alert(res.data.message);
				}
			})
		}else{
			alert('Password not matched');
		}
	}
  return (
    <div className="App">   
	<section id="top_bar">
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<ul>
						<li><span>hours.</span> mon-thu 9:00am - 7:00pm</li>
						<li>fri-sat 9:00am - 5:00pm</li>
						<li>sunday - closed</li>
					</ul>
				</div>
				<div className="col-md-4 text-lg-right">
					<ul>
						<li><span>phone.</span> 1.888.888.888</li>
						<li><Link to="/login" className="loginbutton">Login</Link></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section id="sec_01">
		<div className="container">
			<div className="logo"> <img src="/img/logo.png" alt="logo" /> </div>
			<div className="banner_img mt-4 mt-md-0">
				<div className="d-none d-md-block">
					<div className="banner_img_1"> <img className="img-fluid" src="/img/img-1.png" alt="" /> </div>
					<div className="banner_img_2"> <img src="/img/img-2.png" alt="" /> </div>
				</div>
				<div className="d-md-none">
					<div className="banner_img_mob"> <img className="img-fluid" src="/img/mobile-img.png" alt="" /> </div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-7">
					<div className="banner_text">
						<h1 className="h1">A clear, concise headline about your product or service.</h1>
						<p>A sentence or two with supporting benefits.</p>
					</div>
					<div className="form">
						<form method="POST" onSubmit={SubmitPressed}>
							<div className="form-group">
								<label>Name *</label>
								<input className="form-control" type="text"  name='name' onChange={handleChange} required/> </div>
							<div className="form-group">
								<label>Email *</label>
								<input className="form-control" type="email" onChange={handleChange} name='email' required/> </div>
							<div className="form-group">
								<label>Phone *</label>
								<input className="form-control" type="text" onChange={handleChange} maxLength={10} minLength={9} name='mobile'required /> </div>
							<div className="form-group">
								<label>Password *</label>
								<input className="form-control" type="text" onChange={handleChange} name='password' required/> </div>
							<div className="form-group">
								<label>Confirm Password *</label>
								<input className="form-control" type="text" onChange={handleChange} name='cpassword' required/> </div>
							<div >
							<input
								type="checkbox"
								className="checkbox disable-team team_values" 
								
								onClick={(e) => {
									selectShortlistedApplicant(e);
								}}
							required />
								<label>Accept term & conditions *</label></div>
							<div className="form-group btn_block">
								<input className="btn-box" type="submit"  value="Call to action"  /> </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="sec_02">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 m-auto text-center">
					<h2 className="h2">What's so great about your product/service?</h2>
					<p>How will a customer's life improve from using your product/service? If you can get anything above a 5% conversion rate in the health industry, you should ask for a raise.</p>
				</div>
				<div className="col-12 mt-5">
					<ul>
						<li>List a benefit of your offer or service.</li>
						<li>List a benefit of your offer or service.</li>
						<li>List a benefit of your offer or service.</li>
						<li>List a benefit of your offer or service.</li>
						<li>List a benefit of your offer or service.</li>
						<li>List a benefit of your offer or service.</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section id="sec_03">
		<div className="container">
			<div className="row align-items-end">
				<div className="col-6">
					<div className="text before">Before</div>
				</div>
				<div className="col-6 text-right">
					<div className="text after">After</div>
				</div>
			</div>
		</div>
	</section>
	<section id="sec_04">
		<div className="container">
			<h3 className="h3 text-center mb-5">OUR AWARD-WINNING PRACTICE HAS BEEN FEATURED IN</h3>
			<div className="img_boxes d-flex justify-content-center">
				<div className="img_box"> <img src="/img/client-1.png" alt="" /> </div>
				<div className="img_box"> <img src="/img/client-2.png" alt="" /> </div>
				<div className="img_box"> <img src="/img/client-3.png" alt="" /> </div>
				<div className="img_box"> <img src="/img/client-4.png" alt="" /> </div>
				<div className="img_box"> <img src="/img/client-5.png" alt="" /> </div>
				<div className="img_box"> <img src="/img/client-6.png" alt="" /> </div>
			</div>
		</div>
	</section>
	<section id="sec_05">
		<div className="container">
			<div className="row row-1">
				<div className="col-lg-7 m-auto text-center">
					<h2 className="h2 mb-4">What services do you offer to provide value to a customer?</h2>
					<p>How will a customer's life improve from using your product/service? If you can get anything above a 5% conversion rate in the Health industry, you should ask for a raise.</p>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-md-6 my-4 px-4">
					<div className="d-flex">
						<div className="icon_box"> <img src="/img/icon-1.png" alt="" /> </div>
						<div className="text">
							<h3 className="h3">COMPLEXITY OF LANGUAGE</h3>
							<p>Don't sweat the complexity of your language too much. We didn't see a lot of dependence in the Health industry on reading level.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 my-4 px-4">
					<div className="d-flex">
						<div className="icon_box"> <img src="/img/icon-2.png" alt="" /> </div>
						<div className="text">
							<h3 className="h3">LANGUAGE</h3>
							<p>For every additional percent of copy that used language evoking feelings of fear, we saw conversion rates that were 10% lower.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 my-4 px-4">
					<div className="d-flex">
						<div className="icon_box"> <img src="/img/icon-3.png" alt="" /> </div>
						<div className="text">
							<h3 className="h3">BE AS CONCISE AS YOU CAN</h3>
							<p>We saw a consistent negative trend in conversion rates with longer pages. On average, pages with 750 words converted 30% fewer visitors than pages with 500 words</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 my-4 px-4">
					<div className="d-flex">
						<div className="icon_box"> <img src="/img/icon-4.png" alt="" /> </div>
						<div className="text">
							<h3 className="h3">COMPLEXITY OF LANGUAGE</h3>
							<p>Associated with fear in health: pain, loss, disease, injury, hearing, weight, treat, worse, surgery, dentistry, confidence, emergency, medical, hospital, avoid, problem, cancer, procedure, diagnosis, change</p>
						</div>
					</div>
				</div>
			</div>
      </div>
	</section>
	<section id="sec_06"> </section>
	<section id="sec_07">
		<div className="container">
			<div className="row">
				<div className="col-md-7 col-lg-5 ml-auto">
					<h2 className="h2">Hours</h2>
					<ul>
						<li><span>Mon:</span> 9:00am - 7:00pm</li>
						<li><span>Tue:</span> 9:00am - 7:00pm</li>
						<li><span>Wed:</span> 9:00am - 7:00pm</li>
						<li><span>Thu:</span> 9:00am - 7:00pm</li>
						<li><span>Fr:</span> 9:00am - 5:00pm</li>
						<li><span>Sat:</span> 9:00am - 5:00pm</li>
						<li><span>Sun:</span> Closed</li>
					</ul>
				</div>
				<div className="col-md-4 col-lg-5 ml-auto mt-5 mt-md-0">
					<h2 className="h2">Location</h2>
					<p>245-700 Brocales Avenue
						<br/>New Westminster, BC V3M 0G3</p> <a href="#" className="map_btn">MAP</a> </div>
			</div>
		</div>
	</section>
	<section id="sec_08">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="d-none d-md-block">
						<div className="img_block"> <img className="img-fluid" src="/img/img-3.png" alt="" /> </div>
					</div>
					<div className="d-md-none">
						<div className="img_block"> <img className="img-fluid" src="/img/img-mob.png" alt="" /> </div>
					</div>
				</div>
				<div className="col-md-6 mt-5 mt-md-0">
					<h2 className="h2 mb-4">A closing reminder of your offer.</h2>
					<p>This is your last shot at converting someone. Make it good. (But not too pushy.)</p>
					<div className="btn_block"> <a className="btn-box" href="#" >Call to action</a> </div>
				</div>
			</div>
		</div>
	</section>
	<footer>
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					<div className="footer_logo"> <img src="/img/logo.png" alt="" /> </div>
				</div>
				<div className="col-lg-9 text-lg-right mt-3 mt-lg-0">
					<p>Address: 245-700 Brocales Avenue, New Westminster, BC V3M 0G3 <span>|</span> Call Us: 1.888.888.888</p>
				</div>
			</div>
		</div>
	</footer>
	</div>
  );
}

export default Step1;
