import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const [error, setError] = useState('');

    const navigate=useNavigate();

    const signUpHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


        if (password.length < 6) {
            setError("Password must have more than 6 characters");
            return;
        }
        if (password !== confirm) {
            setError("Password does not match");
            return;

        }
        console.log(email, password, confirm);
        createUser(email, password)
        .then(result=>{
            const user=result.user;
           navigate('/login')
            form.reset();

        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>

            <form onSubmit={signUpHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Email' required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="" placeholder='Password' required />
                </div>


                <div className="form-control">
                    <label htmlFor="Confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Confirm-Password' required />
                </div>

                <p className='error-container'>{error}</p>

                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>

            <p>Already Have Account ? Please <Link to={'/login'}>LogIn</Link></p>
        </div>
    );
};

export default SignUp;