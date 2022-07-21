import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
//import Home from '../Home'
import './index.scss';


const Layout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Layout