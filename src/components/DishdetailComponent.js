import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish) {
    return(
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }    

  renderComments(dish) {
    const Comments = dish.comments.map((com) => {
      return (
        <div tag="li" key={com.id}>
          <p>{com.comment}</p>
          <p> -- {com.author}, {com.date}</p>
        </div>
      );
    });

    if (dish.comments != null)
      return(
        <div list>
          <h4>Comments</h4>
          {Comments}
        </div>
      );
    else
      return(
        <div></div>
      );

  }

  render() {
    const dish = this.props.selectedDish;
    if (dish != null)
      return(
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(dish)}
          </div>
        </div>
      );
    else
      return(
        <div></div>
      );
  }
}

export default DishDetail;