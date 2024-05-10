
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/shared/Footer/Footer';
import NavBar from '../pages/Home/shared/Navbar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;