import {Card} from "react-bootstrap";
import history from "./data/history.json"
class NewRelease extends Component {


const Release =() =>(
render(){
    return(
        <container fluid>
        <h2>Books</h2>
        <row>{
            items.map(item =>(
              <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="item.img" />
             <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text> item.price
               </Card.Text>
             </Card.Body>
            </Card>
            )
        </row>
        </container>})
})
)