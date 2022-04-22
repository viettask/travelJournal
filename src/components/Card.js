import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card(props) {
    console.log(props)

    
    return (
        <div className="slot">
        <Container>
        <Row>
            <Col sm="4" ><img src={`./images/${props.item.coverImg}`} className="poster"/></Col>
            <Col sm="8">
                <div className="top_part">
                <img src="./images/location.png" className="rating_start_slot" />
                <span className="location_slot">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} className="">Vew on Google Maps</a>
                </div>

                <div className="under_top_part">
                <span>{props.item.place}</span>
                </div>
                
                <div className="middle_part">
                <span>{props.item.duration.start} - </span>
                <span>{props.item.duration.end}</span>
                </div>

                <div className="bottom_part">
                <span>{props.item.description}</span>    
                </div>
            </Col>

        </Row>
        </Container>
        </div>
    )
}