import React, { useState } from 'react';
import { useNavigate , Link } from "react-router-dom";
import '../newapp/dashboard/assets/plugins/bootstrap/css/bootstrap.min.css';
import '../newapp/dashboard/assets/plugins/font-awesome/css/all.min.css';
import '../newapp/dashboard/assets/plugins/icomoon/style.css';
import '../newapp/dashboard/assets/plugins/icomoon/style.css';
import '../newapp/dashboard/assets/plugins/switchery/switchery.min.css';
import '../newapp/dashboard/assets/css/concept.min.css';
import '../newapp/dashboard/assets/css/admin2.css';
import '../newapp/dashboard/assets/css/custom.css';

import axios from 'axios';
function Login() {
  const navigate = useNavigate();
	localStorage.clear();
    let [account,setAccount] = useState({
			email: '',
			password: '',
      });
      let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        account[name] = value;
        setAccount(account);
     
      }

	let SubmitPressed = (e) => {
        e.preventDefault();
    
      /*------------Start post request -----------*/
		
			const user = {
				email: account.email,
				password: account.password
			};
			axios.post('https://onlinemjcard.com/omcapp/api/wLogin', { user })
				.then(res => {
				if(res.data.statuscode === '200'){
					alert(res.data.message);
					localStorage.setItem('token', res.data.token);
					navigate('/home');
				}else{
					alert(res.data.message);
				}
			})
		
    }
  return (
     <>
     <div className="page-container">
            <div className="login">
                <div className="login-bg"></div>
                <div className="login-content">
                    <div className="login-box">
                        <div className="login-header">
                            <h3>Log In</h3>
                            <p>Welcome back! Please login to continue.</p>
                        </div>
                        <div className="login-body">
                            <form method="POST" onSubmit={SubmitPressed}>
                                <div className="form-group">
                                    <input name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password"  onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className="custom-control custom-checkbox form-group">
                                    <input type="checkbox" className="custom-control-input" id="exampleCheck1"/>
                                    <label className="custom-control-label" htmlFor="exampleCheck1">Remember password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <p className="m-t-sm"><a href="#">Forgot password?</a><br/><Link to="/">Create an account</Link></p>
                        </div>
                        <div className="login-footer">
                            <p>Copyright @Stacks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
  );
}
export default Login;