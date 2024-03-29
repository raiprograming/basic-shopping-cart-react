import React from "react"

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from "reactstrap"


const CardItem=({product, addInCart})=>{


    return(
        <Card className="mt-2 mb-1">
            <CardImg
            top
            height="250"
            width="100%"
            src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle>
                    {product.name}
                </CardTitle>
                <CardText className="secondary">
                    price: Rs{product.price}
                </CardText>
                <Button 
                color="success"
                onClick={()=> addInCart(product)}
                >
                    Buy Now
                </Button>
            </CardBody>
        </Card>
    )


}

export default CardItem;