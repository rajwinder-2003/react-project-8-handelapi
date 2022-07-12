import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";
import {ImManWoman} from "react-icons/im"

const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                />
                <CardTitle className="text-success">
                    <h1>
                        <span className="pe-2">{details.name?.title}</span>
                        <span>{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <ImManWoman/>
                    <span className="ps-2 mt-3">{details.gender}</span> <br/>
                    <FaEnvelope/>
                    <span className="ps-2 mt-4">{details.email}</span> <br/>
                    <FaMapMarkedAlt/>
                    <span className="ps-2 mt-4">{details.location?.city}</span>,
                    <span className="ps-1">{details.location?.state}</span>,
                    <span className="ps-1">{details.location?.country}</span>,
                    <span className="ps-1">{details.location?.postcode}</span> <br/>
                    <FaPhone/>
                    <span className="ps-2 mt-4">{details.phone}</span>,
                    <span className="ps-2">{details.cell}</span>
                </CardText>
            </CardBody>
        </Card>
    )
};

export default MyCard;