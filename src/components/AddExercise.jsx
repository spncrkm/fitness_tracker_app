import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { addExercise } from "../features/exerciseSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddExercise = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({
        name: "",
        duration: "",
        type: "",
    });

    const handleChange = (event) => {
        setExercise({...exercise, id: uuidv4(), [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addExercise(exercise))
        navigate('/')
    }

    return (
        <Form className="w-50 mx-auto mt-5 border p-5 bg-light" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Exercise Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter exercise name"
                    name="name"
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Duration (mins)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Duration"
                    name="duration"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Type</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Type"
                    name="type"
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddExercise;
