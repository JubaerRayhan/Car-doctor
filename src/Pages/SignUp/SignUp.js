import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(err =>console.error(err));
    }
    return (
        <div className="my-10 w-full hero min-h-screen bg-base-200">
        <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="pt-10 text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
        </div>
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
                
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-accent" type="submit" value="Sign Up" />
              
              </div>
            </form>
            <p className='text-center pb-8'>Already Have an Account? <Link className='text-red-600 font-bold' to='/login'>Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;