import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import books from "../data/romance.json";
import MyBook from "./BookCard";
import BookComments from "./CommentArea";
import AddCommentForm from "./AddComment";

class BookList extends Component {
  state = {
    selectedBook: null,
  };

  render() {
    return (
      <Container fluid>
        <h1>Latest Releases</h1>
        <Row>
          <Col md={12} lg={8}>
            <Row>
              {books.map((book) => (
                <Col
                  key={book.asin}
                  xs={6}
                  md={4}
                  lg={3}
                  className="my-1"
                  style={{ height: "29rem" }}
                  onClick={() => {
                    this.setState({
                      selectedBook: book,
                    });
                  }}
                >
                  <MyBook b={book} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={12} lg={4} className="d-flex flex-column align-items-center">
            <div className="w-100 bg-secondary mb-1">
              <h2 className="text-center">Book Comments:</h2>
            </div>
            {this.state.selectedBook && (
              <>
                <BookComments b={this.state.selectedBook} />
                <AddCommentForm b={this.state.selectedBook} />
              </>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
