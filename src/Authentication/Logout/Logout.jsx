import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';

const Logout = () => {
    const [showModal, setShowModal] = useState(false);
    const { logOut, loading } = useContext(UserContext);
    const navigate = useNavigate();

    //set loader.......................
    if (loading) {
        return <div className=' flex justify-center items-center min-h-screen'>
            <progress className="progress w-96"></progress>
        </div>
    }

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
        setShowModal(false);
        navigate('/recipe')
    };

    const goBack = () => {
        navigate(-1)
    }

    return (<> <ScrollToTop />
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-slate-600 mt-16">

            <div className="relative z-10 p-6 bg-white rounded-lg shadow-lg text-center">
                {/* Logout Message */}
                {showModal ||
                    <>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Logout Confirmation</h2>
                        <p className="text-lg text-gray-700 mb-8">Are you sure you want to log out from this website?</p>

                        {/* Logout Button */}
                        <div className="flex justify-end">
                            <button onClick={goBack} className='"bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded mr-2'>Cancel</button>
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full inline-block"
                            >
                                Logout
                            </button>
                        </div>
                    </>
                }

                {/* Logout Confirmation Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-20 ">
                        <div className="bg-white rounded-lg py-11 px-5 w-1/2 relative">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Logout</h3>
                            <p className="text-gray-700 mb-4">Are you sure you want to log out from this website?</p>

                            {/* X-Mark Icon */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute -top-3 -right-7 text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 rounded-full bg-red-500 hover:bg-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    );
};

export default Logout;

