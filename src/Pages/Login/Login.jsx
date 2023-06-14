import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provieders/AuthProvider';
import SocialLogin from '../Shared/SocialLogin';


const Login = () => {
const { signIn } = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || '/'
    const handleLogin=event =>{
event.preventDefault();
  const form = event.target;
  const password = form.password.value;
  const email = form.email.value;

  signIn(email,password) 
  .then(result =>{
    const user = result.user;

  navigate(from, { replace: true });

console.log(user);



})
  .catch(error =>console.log(error))
 }


    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-16 ">
          <div className="text-center lg:text-left w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                {" "}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name='email'
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name='password'
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 ml-8">
                  <input
                    className="btn btn-wide text-center text-white border-0 bg-[#FF3811]"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className='text-center'>
                New to Car Doctors{" "}
                <Link className="text-[#FF3811] font-semibold" to="/signup">
                  Sign Up
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;