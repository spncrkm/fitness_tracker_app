import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateExercise } from "../features/exerciseSlice";


const EditExercise = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [exercise, setExercise] = useState({
        name: "",
        duration: "",
        type: "",
    });

    useEffect(() => {
        setExercise(location.state);
    }, [])

    const handleChange = (event) => {
        setExercise({...exercise, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateExercise(exercise))
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
                    value={exercise.name}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Duration (mins)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Duration"
                    name="duration"
                    onChange={handleChange}
                    value={exercise.duration}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Type</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Type"
                    name="type"
                    onChange={handleChange}
                    value={exercise.type}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default EditExercise;
