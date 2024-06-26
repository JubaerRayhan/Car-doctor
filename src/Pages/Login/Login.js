import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

  const {login} = useContext(AuthContext)

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
          const user = result.user
          console.log(user)
        })
        .then(error => console.log(error))

    }
    return (
        <div className="my-10 w-full hero min-h-screen bg-base-200">
  <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="pt-10 text-5xl text-center font-bold">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-accent" type="submit" value="Login" />
        
        </div>
      </form>
      <p className='text-center pb-8'>New to Genius Car ? <Link className='text-red-600 font-bold' to='/signup'>Sign Up</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;