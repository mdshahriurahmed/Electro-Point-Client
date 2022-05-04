import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../image/google.png'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <div class="spinner-border" style={{ marginTop: "150px" }} role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn-light border border-dark border-2 rounded w-100 my-3'>
                    <img src={google} alt="" style={{ width: "30px" }} />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            {errorElement}
            <div className='d-flex align-items-center '>
                <div style={{ height: "1px" }} className='bg-white w-50'>
                </div>
                <p className='fw-bold mt-2 px-2 text-white'>or</p>
                <div style={{ height: "1px" }} className='bg-white w-50'>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;