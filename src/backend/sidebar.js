import React,{useState , useEffect } from 'react';
import axios from 'axios';

function Sidebar() {
    let TOKEN  = localStorage.getItem('token');
    const [udata, setUData] = useState({ userdetails: [] });
    useEffect(()=>{
    const userdaTa = {
        token:TOKEN,
    };
//console.log(userdaTa);
    axios.post('https://onlinemjcard.com/omcapp/api/wGetSignleUserDetails', { userdaTa })
    .then(res => {
        //console.log(res.data);   
        if(res.data.StatusCode === '200'){
            console.log(res.data.message);
            setUData(res.data.details);
        }else{
            alert(res.data.message);
        }
    })
}, []) 

  return (
     <>
		<div className="secondary-sidebar">
            <div className="secondary-sidebar-bar">
                <a href="#" className="logo-box">concept</a>
            </div>
            <div className="secondary-sidebar-profile">
                <a href="app-profile.html">
                <img src="/dashboard/images/avatars/avatar2.png"/>
                <p>John Doe</p>
                <i className="fas fa-angle-right"></i>
                </a>
                <ul className="secondary-sidebar-profile-menu list-unstyled d-flex">
                <li className="flex-fill"><a href="#"><i className="fas fa-rocket"></i></a></li>
                <li className="flex-fill"><a href="#"><i className="fas fa-globe-africa"></i></a></li>
                <li className="flex-fill"><a href="#"><i className="fas fa-inbox"></i></a></li>
                <li className="flex-fill"><a href="#"><i className="far fa-comments"></i></a></li>
                </ul>
            </div>
            <div className="secondary-sidebar-menu">
                <button className="btn btn-block btn-primary btn-settings-toggle settings-menu-link"><span>Settings</span><i className="fas fa-cogs"></i></button>
                <ul className="accordion-menu">
                <li className="active-page">
                    <a href="index.html">
                    <i className="menu-icon icon-home4"></i><span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                    <i className="menu-icon icon-apps"></i><span>Apps</span><i className="accordion-icon fas fa-angle-left"></i>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="app-mailbox.html">Mailbox</a></li>
                        <li><a href="app-todo.html">Todo</a></li>
                        <li><a href="app-contacts.html">Contacts</a></li>
                        <li><a href="app-profile.html">Profile</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                    <i className="menu-icon icon-layers"></i><span>Layouts</span><i className="accordion-icon fas fa-angle-left"></i>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="layout-blank.html">Blank Page</a></li>
                        <li><a href="layout-collapsed-sidebar.html">Collapsed Sidebar</a></li>
                        <li><a href="layout-fixed-header.html">Fixed Header</a></li>
                        <li><a href="layout-fixed-sidebar.html">Fixed Sidebar</a></li>
                        <li><a href="layout-fixed-sidebar-header.html">Fixed Sidebar &amp; Header</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                    <i className="menu-icon icon-brush"></i><span>Styles</span><i className="accordion-icon fas fa-angle-left"></i>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="style-typography.html">Typography</a></li>
                        <li><a href="style-code.html">Code</a></li>
                        <li><a href="style-tables.html">Tables</a></li>
                        <li><a href="style-icons.html">Icons</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                    <i className="menu-icon icon-flash_on"></i><span>Components</span><i className="accordion-icon fas fa-angle-left"></i>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="comp-alerts.html">Alerts</a></li>
                        <li><a href="comp-badge.html">Badge</a></li>
                        <li><a href="comp-breadcrumb.html">Breadcrumb</a></li>
                        <li><a href="comp-buttons.html">Buttons</a></li>
                        <li><a href="comp-btn-group.html">Button Group</a></li>
                        <li><a href="comp-card.html">Card</a></li>
                        <li><a href="comp-collapse.html">Collapse</a></li>
                        <li><a href="comp-dropdowns.html">Dropdowns</a></li>
                        <li><a href="comp-lists.html">List Group</a></li>
                        <li><a href="comp-media-object.html">Media Object</a></li>
                        <li><a href="comp-modal.html">Modal</a></li>
                        <li><a href="comp-navs.html">Navs</a></li>
                        <li><a href="comp-navbar.html">Navbar</a></li>
                        <li><a href="comp-pagination.html">Pagination</a></li>
                        <li><a href="comp-popovers.html">Popovers</a></li>
                        <li><a href="comp-progress.html">Progress</a></li>
                        <li><a href="comp-spinners.html">Spinners</a></li>
                        <li><a href="comp-toasts.html">Toasts</a></li>
                        <li><a href="comp-tooltips.html">Tooltips</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)">
                    <i className="menu-icon icon-code"></i><span>Forms</span><i className="accordion-icon fas fa-angle-left"></i>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="form-elements.html">Form Elements</a></li>
                        <li><a href="form-upload.html">File Upload</a></li>
                        <li><a href="form-image-crop.html">Image Crop</a></li>
                        <li><a href="form-image-zoom.html">Image Zoom</a></li>
                        <li><a href="form-select2.html">Select2</a></li>
                    </ul>
                </li>
                <li>
                    <a href="charts.html">
                    <i className="menu-icon icon-show_chart"></i><span>Charts</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                    <i className="menu-icon icon-star"></i><span>Pages</span><i className="accordion-icon fas fa-angle-left"></i>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="invoice.html">Invoice</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="500.html">500 Page</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                        <li><a href="help-center.html">Help Center</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="lockscreen.html">Lockscreen</a></li>
                        <li><a href="pricing-tables.html">Pricing Tables</a></li>
                    </ul>
                </li>
                <li className="menu-divider"></li>
                <li>
                    <a href="#">
                    <i className="menu-icon icon-help_outline"></i><span>Documentation</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="menu-icon icon-public"></i><span>Changelog</span><span className="badge badge-danger">1.0</span>
                    </a>
                </li>
                </ul>
            </div>
        </div>
     </>
  );
}
export default Sidebar;
