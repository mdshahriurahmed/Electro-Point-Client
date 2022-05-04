import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const SignUp = () => {


    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const confirmPasswordRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [errorr, setError] = useState('');

    let [color, setColor] = useState("#3BE90A");
    const override = css`
  display: block;
  margin: 350px auto;
  border-color: red;
`;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/');
    }

    if (loading) {
        return <div style={{ height: "800px" }}>
            <DotLoader color={color} loading={loading}
                css={override}
                size={60} />
        </div>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value;
        // const agree = event.target.checked;

        if (password !== confirmPassword) {
            setError('Your two password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        if (agree) {

            await createUserWithEmailAndPassword(email, password);
            await sendEmailVerification();
            alert('Verification email sent');
            navigate('/');
        }

    }
    return (
        <div style={{ height: "840px" }}>
            <div className='container w-50 mx-auto '>
                <h2 className='fw-bold mt-5 text-white text-center'>Please Sign Up</h2>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                        <Form.Check className={agree ? 'text-dark' : 'text-white'} onClick={() => setAgree(!agree)} type="checkbox" label="Accept Terms and Conditions " />
                    </Form.Group>
                    <p className='text-danger text-start'>{errorr}</p>
                    <div className='d-flex justify-content-center'>
                        <Button disabled={!agree} className='px-5 mb-3' variant="dark" type="submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
                <p className='text-white text-center'>Already have an account <Link to='/login' className='text-success pe-auto text-decoration-none ' >Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;