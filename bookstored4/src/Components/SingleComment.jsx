import {ListGroup} from "react-bootstrap"

const SingleComment = (prop) => {
    <ListGroup.Item key={c._id}>
        <p>Rating: {prop.rate} </p>
        <p>Comment: {prop.comment} </p>
    </ListGroup.Item>
}

export default SingleComment