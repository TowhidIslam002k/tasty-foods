import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import './Register.css';
import googleImg from '../../assets/google.png'
import githubImg from '../../assets/github.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';

const Register = () => {
  const [error, setError] = useState('')
  const { createUser, updateProfileInfo, emailVerify, googleSignIn, githubSignIn } = useContext(UserContext);
  const navigate = useNavigate();
  const handleRegisterForm = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    else if (password.length < 8) {
      setError('Password should be taken at least 8 character');
      return
    }
    // if (!/(?=.*[A-Z])/.test(password)) {
    //   setError('Please add at least one uppercase latter.');
    //   return;
    // }
    // else if (!/(?=.*[0-9])/.test(password)) {
    //   setError('Please add at least one number.');
    //   return;
    // }
    // else if (!/(?=.*[!@#$&*])/.test(password)) {
    //   setError("Please add atleast one special character[!@#$&*].");
    //   return;
    // }

    createUser(email, password)
      .then(() => {
        updateProfileInfo({ displayName: name, photoURL: photoURL })
          .then()
          .catch(err => setError(err.code))

        emailVerify()
          .then(() => {
            alert("We've sent a verification email. Please check your email and verify your account for access the all private routes.");
            return navigate('/recipe')
          })
          .catch(err => setError(err.code))

        form.reset();
      })
      .catch(err => setError(err.code))
  }

  //Sign in with google.............
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => navigate('/recipe'))
      .catch((err) => setError(err.code))
  }

  //Sign in with github..............
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => navigate("/recipe"))
      .catch((err) => setError(err.code))
  }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  const [confirmPasswordVisible, setComfirmPasswordVisible] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setComfirmPasswordVisible(!confirmPasswordVisible);
  }


  return (
    <div>
      <ScrollToTop />
      <div className="hero min-h-screen bg-base-200 mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegisterForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name"
                  className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />

                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Photo URL"
                  className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />

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
                {/* ===== password with eye icon ===== */}
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
                  <span className="label-text">Confirm Password</span>
                </label>
                {/* ===== confirm password with eye icon ===== */}
                <div className="relative">
                  <input type={confirmPasswordVisible ? "text" : "password"}
                    name='confirmPassword' placeholder="confirm password" required
                    className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <i
                    className={`toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${confirmPasswordVisible ? 'text-blue-500' : 'text-gray-500'
                      }`}
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {confirmPasswordVisible ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </i>
                </div>

                <label className="label">
                  <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                </label>
                <label className="label">
                  <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
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

export default Register;