import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddCommentForm extends Component {
  state = {
    commentForm: {
      comment: "",
      rate: "",
      bookId: this.props.b.asin,
    },
  };

  handleInput = (key, value) => {
    this.setState({
      commentForm: {
        ...this.state.commentForm,
        [key]: value,
      },
    });
  };

  submitComment = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://striveschool.herokuapp.com/api/comments/" + this.props.b.asin , {
            method: 'POST',
            body: JSON.stringify(this.state.commentForm),
            headers: {
              'Content-type': 'application/json',
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjU3ODIwOTQsImV4cCI6MTYyNjk5MTY5NH0.v44WMUeYNd9fGzniopkrLzKiWTFyhBHf3UAfrTTUGXY"
            }
          });

      console.log(response);

      if (response.ok) {
        alert("Comment Added Successfully!");
        this.setState({
          commentForm: {
            comment: "",
            rate: "",
            bookId: this.props.b.asin,
          },
        });
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Form onSubmit={this.submitComment} className="w-100">
        <Form.Group>
          <Form.Label>Select rating:</Form.Label>
          <Form.Control
            as="select"
            value={this.state.commentForm.rate}
            onChange={(e) => this.handleInput("rate", e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Write your comment here:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.commentForm.comment}
            onChange={(e) => {
              this.handleInput("comment", e.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddCommentForm;
