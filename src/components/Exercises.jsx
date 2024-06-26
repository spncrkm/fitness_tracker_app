import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { deleteExercise } from "../features/exerciseSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Exercises = () => {
    const exercises = useSelector((state) => state.exercises.exerciseList);

    const dispatch = useDispatch();

    return (
        <ListGroup className="mt-5 w-50 mx-auto">
            {exercises.map((item) => (
                <ListGroup.Item className="bg-light" key={item.id}>
                    <div>
                        <b>{item.name}</b> (Duration: {item.duration} minutes)
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <b>Exercise Type:</b> {item.type}
                        </div>

                        <div>
                            <Button
                                variant="outline-danger"
                                className="btn-sm ms-5"
                                onClick={() =>
                                    dispatch(deleteExercise(item.id))
                                }
                            >
                                Delete
                            </Button>
                            <Button
                                variant="outline-success"
                                className="btn-sm ms-2"
                                as={Link}
                                to={`/edit/${item.id}`}
                                state={item}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Exercises;
