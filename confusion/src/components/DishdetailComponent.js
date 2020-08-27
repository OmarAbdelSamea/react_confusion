import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, ListGroup } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
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

    renderComments(dish) {
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


    render() {
        const dish = this.props.dish;
        return (
            <div className="row justify-content-center">
                <div className="col-12 col-md-5 mt-3">
                    {this.renderDish(dish)}
                </div>

                <div className="col-12 col-md-5 mt-3">
                    {this.renderComments(dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;