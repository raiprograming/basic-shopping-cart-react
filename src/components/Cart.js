import React from "react"
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Row,
    Col,
    CardText
} from "reactstrap"

const Cart=({cartItem,removeItem,buyNow})=>{
    let amount=0;


    cartItem.forEach(itm=>{
        amount=parseFloat(amount)+parseFloat(itm.price)
    })

    return(
        <Container fluid>
            <h1 className="text-success">
                Your Cart
            </h1>
            <ListGroup>
                {cartItem.map((itm)=>(
                    <ListGroupItem key={itm.id}>
                        <Row>
                            <Col>
                                <img 
                                height="80"
                                src={itm.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {itm.name}
                                </div>
                                <span>price: {itm.price}</span>
                                <Button 
                                color="danger"
                                onClick={()=> removeItem(itm)}
                                >Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {
                cartItem.length>=1?
                 (
                     <Card className="text-center mt-3">
                         <CardHeader>
                             Grand Total:
                         </CardHeader>
                         <CardBody>
                             your amount for {cartItem.length} product is {amount}
                         </CardBody>
                         <CardFooter>
                             <Button color="success"
                             onClick={buyNow}
                             > pay here</Button>
                         </CardFooter>
                     </Card>
                 ) :
                  (
                    <h1 className="text-warning">cart is empty</h1>
                )
            }
        </Container>
    )




}


export default Cart;