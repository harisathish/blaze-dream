import React from 'react'
import { Link} from 'react-router-dom';
import Product from './product';


function Navigation() {
    return (
        <div>
            <nav class="navbar navbar-inverse navbar-expand-sm justify-content-center">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link class="navbar-brand">WebSiteName</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li class="active"><Link to='/'>Home</Link></li>
                            <li><Link to="/about">ABOUT US</Link></li>
                            <li><Link to="/products">PRODUCTS</Link></li>
                            <li><Link to="/voucher">VOUCHER</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><Link ><span class="glyphicon glyphicon-user"></span></Link></li>
                            {/* <li><a ><i class="fa fa-shopping-bag"> (0) </i></a></li> */}
                        </ul> 
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
