import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";


const Login = () => {

    const [errorr, setErrorr] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElement;

    let [color, setColor] = useState("#3BE90A");
    const override = css`
  display: block;
  margin: 350px auto;
  border-color: red;
`;

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger text-start'>{error?.message}</p>
    }

    if (loading) {
        return <div style={{ height: "800px" }}>
            <DotLoader color={color} loading={loading}
                css={override}
                size={60} />
        </div>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email === '') {
            setErrorr('Please enter email')
            return;
        }
        else {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
    }

    return (
        <div style={{ height: "840px" }}>
            <div className='container w-50  mx-auto '>
                <h2 className='fw-bold mt-5 text-white text-center'>Please Log In</h2>
                <SocialLogin></SocialLogin>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>
                    <p className='text-danger text-start'>{errorr}</p>

                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p >{errorElement}</p>
                    <div className='d-flex justify-content-center'>
                        <Button className='px-5 mb-3' variant="dark" type="submit">
                            Log In
                        </Button>
                    </div>
                </Form>
                <p className='text-white text-center'>New to Electro point, <Link to='/signup' className='text-success pe-auto text-decoration-none ' >Please Sign Up</Link></p>

                <p className='text-white text-center'>Forget Password? <Link to='/login' className='text-success pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</Link></p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;