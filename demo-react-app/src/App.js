
import '@progress/kendo-theme-default/dist/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Home/home';
import Login from './Login/login';
import SignUp from './SignUp/signup';
import Assets from "./AssetsPage/assets";
import Units from './UnitsPage/units';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <>
      <ProSidebarProvider>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/home" element={<Home />} >
            <Route path={"/home"} element={<Assets />} />
            <Route path={"/home/assets"} element={<Assets />} />
            <Route path={"/home/units"} element={<Units />} />
          </Route>
        </Routes>
      </ProSidebarProvider>
    </>
  );
}

export default App;
