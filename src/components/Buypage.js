import React ,{useState,useEffect} from "react";
import {Container,Row,Col} from "reactstrap";

import {random,commerce} from "faker"
import axios from "axios";
import CardItem from "./CardItem"

const apiKey="";

const url="https://api/pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localurl = "https://api.jsonbin.io/b/60563d527ea6546cf3e39390";

const BuyPage=({addInCart})=>{

    const [product,setProduct]=useState([])

    /*const fetchPhotos= async ()=>{
        const response=await axios.get(url,{
            headers:{
                Authorization:apiKey
            }
        })
    }*/

    const fetchPhotos = async () => {
      const {data} = await axios.get(localurl,{
          headers:{
              'secret-key':"$2b$10$7rpdg76Ak1FTnZtYJlvRM.akYM0DiA6h/shqi.ZqsDYl9ghhFdwfK"
          }
      });

      const {photos}=data;
      console.log(data);

      const allProduct=photos.map(photo=>(
          {
              smallImage:photo.src?.medium,
              tinyImage:photo.src.tiny,
              name:random.word(),
              price:commerce.price(),
              id: random.uuid()
          }
      ))

      setProduct(allProduct);

      
    };

    useEffect(() => {
      fetchPhotos();
    }, []);

    return(
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map((itm)=>{
                    return(
                        <Col md="4" key={itm.id}>
                            <CardItem product={itm} addInCart={addInCart} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )



}

export default BuyPage;