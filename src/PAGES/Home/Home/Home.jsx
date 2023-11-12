import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../AuthContext/AuthContext';
import ScrollToTop from '../../../SHARED/ScrollToTop/ScrollToTop';
import Carousel from '../Carousel/Carousel';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    const recepiData = useLoaderData();
    const { user } = useContext(UserContext)

    //Show toast after 5second and set it in session storage..........
    useEffect(() => {
        setTimeout(() => {
            const hasShownToast = sessionStorage.getItem('hasShownLoginToast');
            if (!hasShownToast) {
                toast.info(<div>
                    <span>Please login to get more access!</span>
                    <span className='flex justify-end mt-5'>
                        <Link to="/login">
                            <button className='link link-hover text-blue-600 border rounded-md'>Login Now</button>
                        </Link>
                    </span>
                </div>, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                })
                sessionStorage.setItem("hasShownLoginToast", true)
            }
        }, 5000);
    }, [])

    return (
        <div>
            {
                !user && <ToastContainer />
            }
            {/* <ScrollToTop /> */}
            <Carousel />

            <h1 className="text-3xl sm:text4xl font-bold text-center mb-8 mt-14">All Recipe Here</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 my-10">
                {
                    recepiData.map(item => <HomeCard
                        key={item.id}
                        data={item}
                    ></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;