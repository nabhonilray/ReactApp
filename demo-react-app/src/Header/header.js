import * as React from "react";
import "./header.css";
import {useProSidebar } from 'react-pro-sidebar';

function Header() {
    const { collapseSidebar } = useProSidebar();
    return (
        <div class="topnav">
            {/* <a class="active" href="#home"><i class="fa fa-bars" aria-hidden="true"></i></a> */}
            <a className="menu" href="#menu" onClick={() => {
                collapseSidebar();
            }}><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a>
            <a href="#home" style={{fontWeight:"600", fontSize: "larger"}}>Portfolio Management Portal</a>
            <div class="topnav-right">
                <a href="#notification"><i class="fa fa-bell-o fa-lg" aria-hidden="true"></i></a>
                <a href="#about"><i class="fa fa-info-circle fa-lg" aria-hidden="true"></i></a>
                <a href="#settings"><i class="fa fa-sliders fa-lg" aria-hidden="true"></i></a>
                <a data-initials="GC" className="account-icon"></a>
            </div>
        </div>
    )
}

export default Header;