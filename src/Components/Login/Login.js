import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>

            <form onSubmit={signInHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Email' required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="" placeholder='Password' required />
                </div>

                <input className='btn-submit' type="submit" value="Login" />
            </form>

            <p>New to Ema-john ? Please <Link to={'/signup'}>Create a Account</Link></p>
        </div>
    );
};

export default Login;