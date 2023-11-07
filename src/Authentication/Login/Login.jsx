import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import googleImg from '../../assets/google.png'
import githubImg from '../../assets/github.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';

const Login = () => {
  const [error, setError] = useState('');
  const { loginUser, googleSignIn, githubSignIn } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/recipe';
  const handleLoginForm = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        const userCredential = result.user;
        // console.log(userCredential)
        if (!userCredential.emailVerified) {
          alert('Please verify your account to log in')
          return null;
        }
        else {
          alert(`Welcome ${userCredential.displayName}. You have successfully logged in.`)
          navigate(from, { replace: true })
        }
        form.reset()
      })
      .catch(err => {
        if (err.code === 'auth/invalid-login-credentials') {
          setError('Error: Invalid email or password.')
        } else {
          setError(err.code)
        }
      })
  }

  // Sign in with google.............
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => navigate(from, { replace: true }))
      .catch((err) => setError(err.code))
  }

  //Sign in with github..............
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => navigate(from, { replace: true }))
      .catch((err) => setError(err.code))
  }

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <ScrollToTop />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email"
                  className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* <input type="password" name='password' placeholder="password" className="input input-bordered" required /> */}
                <div className="relative">
                  <input type={passwordVisible ? "text" : "password"}
                    name='password' placeholder="password" required
                    className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <i
                    className={`toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${passwordVisible ? 'text-blue-500' : 'text-gray-500'
                      }`}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </i>
                </div>


                <label className="label">
                  <Link to='/register' className="label-text-alt link link-hover">Don't have any account?</Link>
                </label>
                <label className="label">
                  <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className='text-red-500'>{error}</p>
            </form>
            <button onClick={handleGoogleSignIn} className='text-black border w-5/6 mx-auto border-black rounded-md font-bold hover:text-white hover:bg-black flex justify-center items-center mb-3'>
              <img src={googleImg} alt="" /> Continue with google
            </button>
            <button onClick={handleGithubSignIn} className='text-black border w-5/6 mx-auto border-black rounded-md font-bold hover:text-white hover:bg-black flex justify-center items-center mb-10'>
              <img className='rounded-3xl' src={githubImg} alt="" /> Continue with github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;