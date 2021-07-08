import {Container, Row, Col} from "react-bootstrap"
import books from "../data/romance.json"
import MyBook from "./BookCard"

const BookList = () => (
    <Container>
        <h1>Latest Releases</h1>
        <Row>
            {
                books.map(book => (
                    <Col key={book.id} xs={6} md={4} lg={3} className="my-2" style={{height: "30rem"}}>
                        <MyBook b={book} />
                    </Col>
                ))
            }
        </Row>
    </Container>
)

export default BookList