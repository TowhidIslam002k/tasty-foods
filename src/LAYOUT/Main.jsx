import { Outlet } from 'react-router-dom';
import Footer from '../SHARED/Footer/Footer';
import Header from '../SHARED/Header/Header';

const Main = () => {
    
    return (
        <div className='w-10/12 mx-auto my-2'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;