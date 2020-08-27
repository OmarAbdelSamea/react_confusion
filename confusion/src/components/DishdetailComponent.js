import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        if (dish != null) {
            const commentsList = dish.comments.map((comment) => {
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            })
            return (
                <div className="list-unstyled">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{commentsList}</ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


    const DishDetail = (props) => {
        return (
            <div className="row justify-content-center">
                <div className="col-12 col-md-5 mt-3">
                    <RenderDish dish={props.dish} />
                </div>

                <div className="col-12 col-md-5 mt-3">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        );
    }


export default DishDetail;