import {Component} from "react"
import {Row, ListGroup} from "react-bootstrap"
import Error from "./Error"
import Loading from "./Loading"

class BookComments extends Component {

    state = {
        bookComments: [],
        isLoading : true,
        isError: false
    }

    componentDidMount = async () => {
        try{
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.b.asin,
            {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjU3NTIzNTUsImV4cCI6MTYyNjk2MTk1NX0.yUoxTd1zEjmUS7fxorzCVAOV6ZvfshjVr6QVap1TKRc"
                }
            })
            
            if(response.ok){
                let comments = await response.json()
                this.setState({
                    bookComments: comments,
                    isLoading: false,
                    isError: false
                })
                console.log(comments)
            } else {
                this.setState({
                    isLoading: false,
                    isError: true
                })
            }

        } catch (err){
            console.log(err)
            this.setState({
                isLoading: false,
                isError: true
            })
        }
    }

    render(){
        return(
            <div>
            <h2>Book Comments:</h2>
            <Row>
                {this.state.isError === true && <Error/>}
                {this.state.isLoading === true ? <Loading /> : 
                <ListGroup>
                    <img src={this.props.b.img} />
                    {this.state.bookComments.map(c => (
                        
                        <ListGroup.Item key={c._id}>
                           <p>Rating: {c.rate} </p>
                           <p>Comment: {c.comment} </p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                }
            
            </Row>
            </div>
        )
    }
}

export default BookComments