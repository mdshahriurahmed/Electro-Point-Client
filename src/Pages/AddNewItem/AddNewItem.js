
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './AddNewItem.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from 'react-toastify';


const AddNewItem = () => {

    const [user] = useAuthState(auth);
    const [errorr, setError] = useState('');
    const [errorr1, setError1] = useState('');
    const navigate = useNavigate();
    const nameRef = useRef('');
    const priceRef = useRef('');
    const supplierRef = useRef('');
    const quantityRef = useRef('');
    const imgRef = useRef('');
    const descriptionRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const supplier = supplierRef.current.value;
        const quantity = quantityRef.current.value;
        const img = imgRef.current.value;
        const details = descriptionRef.current.value;
        const sold = 0;
        const email = user.email;

        if (price < 0) {
            setError1('Please enter valid Price');
        }
        if (quantity < 0) {
            setError('Please enter valid Quantity');
        }
        console.log(email);

        const item = {
            name: name,
            price: price,
            img: img,
            details: details,
            supplier: supplier,
            quantity: quantity,
            email: email,
            sold: sold,
        };
        fetch("https://arcane-beach-19880.herokuapp.com/inventories", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => { });
        toast("Product added!");
        event.target.reset();

    }
    return (
        <div className='gap'>
            <div className='container w-50 mx-auto '>
                <h2 className='fw-bold my-5 text-white text-center'>Add New Item</h2>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicName">
                        <Form.Label >Item Name</Form.Label>
                        <Form.Control className='design' ref={nameRef} type="text" placeholder="Enter Item Name" required />

                    </Form.Group>

                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control className='design' ref={priceRef} type="number" placeholder="Enter Price" required />
                    </Form.Group>
                    <p className='text-danger text-start'>{errorr1}</p>
                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicSupplier">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control className='design' ref={supplierRef} type="text" placeholder="Enter Supplier Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control className='design' ref={quantityRef} type="number" placeholder="Enter Quantity" required />
                    </Form.Group>
                    <p className='text-danger text-start'>{errorr}</p>
                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicImageUrl">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control className='design' ref={imgRef} type="text" placeholder="Enter Image Url" required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start text-white" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <textarea className="form-control design" ref={descriptionRef} rows="5" placeholder="Write Description" required></textarea>
                    </Form.Group>


                    <div className='d-flex justify-content-center'>
                        <Button className=' px-5 mt-4 design btnhover mb-3  ' type="submit">
                            Add Item
                        </Button>
                        <ToastContainer></ToastContainer>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default AddNewItem;