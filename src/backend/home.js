import React from 'react';
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import axios from 'axios';
import '../newapp/dashboard/assets/plugins/bootstrap/css/bootstrap.min.css';
import '../newapp/dashboard/assets/plugins/font-awesome/css/all.min.css';
import '../newapp/dashboard/assets/plugins/icomoon/style.css';
import '../newapp/dashboard/assets/plugins/switchery/switchery.min.css'; 
import '../newapp/dashboard/assets/css/concept.min.css';
import '../newapp/dashboard/assets/css/admin2.css';
import '../newapp/dashboard/assets/css/custom.css';

import {  useNavigate  } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    let TOKEN  = localStorage.getItem('token');
    
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
<div className="page-container">
    <div className="settings-sidebar">
        <div className="settings-sidebar-content">
            <div className="settings-sidebar-header">
                <span>Settings</span>
                <a href="javascript: void(0);" className="settings-menu-close"><i className="icon-close"></i></a>
            </div>
            <div className="right-sidebar-settings">
                <span className="settings-title">General Settings</span>
                <ul className="sidebar-setting-list list-unstyled">
                <li>
                    <span className="settings-option">Notifications</span><input type="checkbox" className="js-switch" defaultChecked />
                </li>
                <li>
                    <span className="settings-option">Activity log</span><input type="checkbox" className="js-switch" defaultChecked />
                </li>
                <li>
                    <span className="settings-option">Automatic updates</span><input type="checkbox" className="js-switch" />
                </li>
                <li>
                    <span className="settings-option">Allow backups</span><input type="checkbox" className="js-switch" />
                </li>
                </ul>
                <span className="settings-title">Account Settings</span>
                <ul className="sidebar-setting-list list-unstyled">
                <li>
                    <span className="settings-option">Chat</span><input type="checkbox" className="js-switch" defaultChecked />
                </li>
                <li>
                    <span className="settings-option">Incognito mode</span><input type="checkbox" className="js-switch" />
                </li>
                <li>
                    <span className="settings-option">Public profile</span><input type="checkbox" className="js-switch" />
                </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="settings-overlay"></div>
    <div className="page-content">
        <Sidebar />
        <Header/>
        <div className="page-inner no-page-title">
            <div id="main-wrapper">
                <div className="content-header">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-style-1">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <h1 className="page-title">Dashboard</h1>
                </div>
                <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="ds-stat">
                                    <span className="ds-stat-name">Earnings</span>
                                    <h3 className="ds-stat-number">$67,856<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>23%</span></h3>
                                    <div className="progress" style={{height: '3px'}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ds-stat">
                            <span className="ds-stat-name">Visitors</span>
                            <h3 className="ds-stat-number">104,679<span className="ds-stat-percent"><i className="fas fa-caret-down"></i>7%</span></h3>
                            <div className="progress" style={{height: '3px'}}>
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '34%'}} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="ds-stat">
                        <span className="ds-stat-name">Support Questions</span>
                        <h3 className="ds-stat-number">457<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>31%</span></h3>
                        <div className="progress" style={{height: '3px'}}>
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="ds-stat">
                <span className="ds-stat-name">Net Revenue</span>
                <h3 className="ds-stat-number">$53,980<span className="ds-stat-percent"><i className="fas fa-caret-up"></i>16%</span></h3>
                <div className="progress" style={{height: '3px'}}>
                <div className="progress-bar bg-info" role="progressbar" style={{width: '57%'}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="row">
        <div className="col-lg-8">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Monthly Earnings</h5>
                    <div id="apex1"></div>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Popular Products</h5>
                    <div className="popular-products">
                    <canvas id="chartjs1">Your browser does not support the canvas element.</canvas>
                    <div className="popular-product-list">
                        <ul className="list-unstyled">
                            <li id="popular-product1">
                                <span>Alpha - Material Design</span>
                                <span className="product-color">59%</span>
                            </li>
                            <li id="popular-product2">
                                <span>Space - Light Theme</span>
                                <span className="product-color">15%</span>
                            </li>
                            <li id="popular-product3">
                                <span>Modern - Admin Dashboard</span>
                                <span className="product-color">26%</span>
                            </li>
                        </ul>
                        <div className="alert alert-info" role="alert">
                            Based on last week's earnings.
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12">
            <div className="alert alert-warning alert-dismissible fade show m-b-md" role="alert">
                Activity reports have been updated 2 days ago. <a href="#" className="alert-link">Click here</a> to see the old data.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-sm">
            <div className="card">
                <div className="card-body">
                    <div className="info-card">
                    <h4 className="info-title">Sales This Month<span className="info-stats">45.6k</span></h4>
                    <div className="progress" style={{height: '3px'}}>
                    <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm">
            <div className="card">
                <div className="card-body">
                    <div className="info-card">
                        <h4 className="info-title">Unique Visitors<span className="info-stats">1.2k</span></h4>
                        <div className="progress" style={{height: '3px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm">
            <div className="card">
                <div className="card-body">
                    <div className="info-card">
                        <h4 className="info-title">Memory Usage<span className="info-stats">82.6GB</span></h4>
                        <div className="progress" style={{height: '3px'}}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Last Orders</h5>
                            <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">07809</th>
                                        <td>Alpha - Angular 8</td>
                                        <td>Chritopher Palmer</td>
                                        <td>Dec 15, 2019</td>
                                        <td><span className="badge badge-info">In Progress</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">07068</th>
                                        <td>Modern - PSD</td>
                                        <td>Stuart Woodley</td>
                                        <td>Nov 29, 2019</td>
                                        <td><span className="badge badge-info">In Progress</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">08392</th>
                                        <td>Mobile App Theme</td>
                                        <td>Murphy Cartwright</td>
                                        <td>Nov 12, 2019</td>
                                        <td><span className="badge badge-success">Finished</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">09415</th>
                                        <td>CRM Application</td>
                                        <td>Gurpreet Holder</td>
                                        <td>Jul 8, 2019</td>
                                        <td><span className="badge badge-danger">Canceled</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">08678</th>
                                        <td>Crypto Exchange</td>
                                        <td>Marshall Wheeler</td>
                                        <td>Feb 17, 2019</td>
                                        <td><span className="badge badge-danger">Canceled</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">08446</th>
                                        <td>Alpha - Bootstrap Version</td>
                                        <td>Nikki Blanchard</td>
                                        <td>Dec 26, 2018</td>
                                        <td><span className="badge badge-success">Finished</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        <div className="page-right-sidebar" id="main-right-sidebar">
            <div className="page-right-sidebar-inner">
                <div className="right-sidebar-top">
                    <span className="chat-header">Chat</span>
                    <a href="javascript:void(0)" className="right-sidebar-toggle right-sidebar-close" data-sidebar-id="main-right-sidebar"><i className="icon-close"></i></a>
                </div>
                <div className="right-sidebar-content">
                    <div className="chat-list">
                        <span className="chat-title">Recent</span>
                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item unread" data-sidebar-id="chat-right-sidebar">
                        <div className="user-avatar">
                            <img src="/dashboard/images/avatars/avatar1.png" alt=""/>
                        </div>
                        <div className="chat-info">
                            <span className="chat-author">David</span>
                            <span className="chat-text">Hello there!</span>
                            <span className="chat-time">16:20</span>
                        </div>
                        </a>
                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item unread active-user" data-sidebar-id="chat-right-sidebar">
                        <div className="user-avatar">
                            <img src="/dashboard/images/avatars/avatar2.png" alt=""/>
                        </div>
                        <div className="chat-info">
                            <span className="chat-author">Bob</span>
                            <span className="chat-text">Hello there!</span>
                            <span className="chat-time">11:34</span>
                        </div>
                        </a>
                    </div>
                    <div className="chat-list">
                        <span className="chat-title">Older</span>
                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item" data-sidebar-id="chat-right-sidebar">
                        <div className="user-avatar">
                            <img src="/dashboard/images/avatars/avatar3.png" alt=""/>
                        </div>
                        <div className="chat-info">
                            <span className="chat-author">Tom</span>
                            <span className="chat-text">Hello there!</span>
                            <span className="chat-time">2d</span>
                        </div>
                        </a>
                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item active-user" data-sidebar-id="chat-right-sidebar">
                        <div className="user-avatar">
                            <img src="/dashboard/images/avatars/avatar4.png" alt=""/>
                        </div>
                        <div className="chat-info">
                            <span className="chat-author">Anna</span>
                            <span className="chat-text">Hello there!</span>
                            <span className="chat-time">4d</span>
                        </div>
                        </a>
                        <a href="javascript:void(0);" className="right-sidebar-toggle chat-item active-user" data-sidebar-id="chat-right-sidebar">
                        <div className="user-avatar">
                            <img src="/dashboard/images/avatars/avatar5.png" alt=""/>
                        </div>
                        <div className="chat-info">
                            <span className="chat-author">Noah</span>
                            <span className="chat-text">Hello there!</span>
                            <span className="chat-time">&nbsp;</span>
                        </div>
                        </a>
                        <a href="javascript:void(0);" className="load-more-messages"  data-toggle="tooltip" data-placement="bottom" title="Load More">&bull;&bull;&bull;</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-right-sidebar" id="chat-right-sidebar">
            <div className="page-right-sidebar-inner">
                <div className="right-sidebar-top">
                    <div className="chat-top-info">
                        <span className="chat-name">Noah</span>
                        <span className="chat-state">2h ago</span>
                    </div>
                    <a href="javascript:void(0)" className="right-sidebar-toggle chat-sidebar-close float-right" data-sidebar-id="chat-right-sidebar"><i className="icon-keyboard_arrow_right"></i></a>
                </div>
                <div className="right-sidebar-content">
                    <div className="right-sidebar-chat slimscroll">
                        <div className="chat-bubbles">
                        <div className="chat-start-date">02/06/2017 5:58PM</div>
                        <div className="chat-bubble them">
                            <div className="chat-bubble-img-container">
                                <img src="/dashboard/images/avatars/avatar1.png" alt=""/>
                            </div>
                            <div className="chat-bubble-text-container">
                                <span className="chat-bubble-text">Hello</span>
                            </div>
                        </div>
                        <div className="chat-bubble me">
                            <div className="chat-bubble-text-container">
                                <span className="chat-bubble-text">Hello!</span>
                            </div>
                        </div>
                        <div className="chat-start-date">03/06/2017 4:22AM</div>
                        <div className="chat-bubble me">
                            <div className="chat-bubble-text-container">
                                <span className="chat-bubble-text">lorem</span>
                            </div>
                        </div>
                        <div className="chat-bubble them">
                            <div className="chat-bubble-img-container">
                                <img src="/dashboard/images/avatars/avatar1.png" alt=""/>
                            </div>
                            <div className="chat-bubble-text-container">
                                <span className="chat-bubble-text">ipsum dolor sit amet</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="chat-write">
                        <form className="form-horizontal" action="javascript:void(0);">
                        <input type="text" className="form-control" placeholder="Say something"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
     </>
  );
}
export default Home;