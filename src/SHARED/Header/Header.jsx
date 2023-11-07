import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import ActiveLink from '../Activelink/ActiveLink';
import './Header.css'

const Header = () => {
    const { user } = useContext(UserContext)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    function toggleMobileMenu() {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <>
            <div className="navbar bg-primary text-primary-content rounded-lg">
                <div className="flex-1">
                    <h1 className="btn btn-ghost normal-case text-xl site-title">Elite Foods</h1>
                </div>
                <div className="mr-10 hidden lg:flex anchor-design">
                    <ActiveLink to="/recipe">Home</ActiveLink>
                    <ActiveLink to="/about">about</ActiveLink>
                    <ActiveLink to="/contact">contact</ActiveLink>
                    <ActiveLink to="/blog">blog</ActiveLink>
                    <ActiveLink to="/register">register</ActiveLink>
                </div>

                <div className="lg:hidden">
                    <button className="mobile-menu-button p-2 me-4 hambarg-btn" onClick={toggleMobileMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {user ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} alt={user.displayName} />
                            <div className="tooltip">{user.displayName}</div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div> :
                    <Link to='/login'><button className="btn btn-warning login-btn-res">Login</button></Link>
                }
            </div>


            {mobileMenuOpen && <>
                <div className="lg:hidden pt-2 mobile-anchor">
                    <ActiveLink to="/recipe" >Home</ActiveLink>
                    <ActiveLink to="/about">about</ActiveLink>
                    <ActiveLink to="/contact">contact</ActiveLink>
                    <ActiveLink to="/blog">blog</ActiveLink>
                    <ActiveLink to="/register">register</ActiveLink>
                </div>
            </>}
        </>
    );
};

export default Header;