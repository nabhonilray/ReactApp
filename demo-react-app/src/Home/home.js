
import '@progress/kendo-theme-default/dist/all.css';
import Header from "../Header/header";
import Assets from "../AssetsPage/assets";
import Units from '../UnitsPage/units';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./home.css"
import {sidebarData} from "../assets/sidebarData"

function Home() {
    let main = [];
    let sub = [];
    sidebarData.forEach((element, index) => {
        if (index < 7) {
            main.push(
                <MenuItem icon={<i class={element.itemIcon} aria-hidden="true"></i>} component={<Link to={element.itemRoute} className="link" />}>
                {/* // <MenuItem active={window.location.pathname === element.itemRoute} icon={<i class={element.itemIcon} aria-hidden="true"></i>}> */}
                    {element.itemName}
                    <Link to={element.itemRoute} className="link" />
                </MenuItem>
            )
        }
        else {
            sub.push(
                <MenuItem icon={<i class={element.itemIcon} aria-hidden="true"></i>} component={<Link to={element.itemRoute} className="link" />}>
                    {element.itemName}
                </MenuItem>)
        }
    })

    return (
        <>
            <div className='header'>
                <Header></Header>
            </div>
            <div className='home-body'>
                <div>
                    <div className='sidebar'>
                        <Sidebar width="250px" defaultCollapsed={true}>
                            <Menu>
                                {main}
                                <SubMenu label="Apps" icon={<i class="fa fa-th-large" aria-hidden="true"></i>}>
                                {sub}
                                </SubMenu>
                            </Menu>
                        </Sidebar>
                    </div>
                </div>
                <div className='content'>
                    {/* <Assets></Assets> */}
                    {/* <Routes>
                        <Route exact path="/" element={<Assets />} />
                        <Route path="/assets" element={<Assets />} />
                        <Route path="/units" element={<Units />} />
                    </Routes> */}
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default Home;