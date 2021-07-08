import {Card} from "react-bootstrap"
import MyBadgeFunction from "./MyBadge"

const MyBook = (prop) => (
    
  <Card className="h-100">
    <Card.Img variant="top" src={prop.b.img} className="w-100 img-fluid" style={{height: "75%"}}/>
    <MyBadgeFunction price={prop.b.price}/>
    <Card.Body>
     <Card.Title>{prop.b.title}</Card.Title>
      <Card.Text>
       {prop.b.category}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default MyBook