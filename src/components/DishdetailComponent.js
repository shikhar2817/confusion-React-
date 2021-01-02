import React,{ Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    
    renderDish = (dish) => {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    };
    
    renderComments = (comment) => {

        if(comment === null){
            return (<div></div>);
        }
        const allComments = comment.map((comment)=>{
            return (
                <li key={comment.id} >
                    <div>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                </li>
                        
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {allComments}
                </ul>
            </div>
        );
    };


    render() {
        const {dish} = this.props;

        return dish?(
            <div className="container">
                <div className="row">
                        {this.renderDish(dish)}
                        {this.renderComments(dish.comments)}
                </div>
            </div>
        ):(
            <div></div>
        )
    }
}

export default DishDetail;