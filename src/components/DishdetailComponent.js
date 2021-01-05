import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, Row, Col , BreadcrumbItem, Modal, ModalBody, ModalHeader, Form, FormGroup, Input ,Button, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            isModelOpen: false,
        }
    }

    handleSubmit(values){
        console.log("Here", values);
        alert("Current State is: " + JSON.stringify(values));
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    render(){
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> </span> Submit Comment 
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" > Rating </Label>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author" > Your Name </Label>
                                    <Control.text model=".author" id="author" name="author" className="form-control" placeholder="Your Name"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors className="text-danger" model=".author" show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment"> Comment </Label>
                                    <Control.textarea model=".comment" id="comment" rows="6" name="comment" className="form-control"/>
                                </Row>
                                <Row className="form-group">
                                    <Button type="submit" color="primary"> Submit </Button>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }

}

    function RenderDish ({dish}) {
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
    
    function RenderComments ({comment}) {

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
                <CommentForm/>
            </div>
        );
    };


    const DishDetail = (props) => {

        if(props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComments comment={props.comments}/>
                        
                    </div>
                </div>
            )
        }else{
            return (<div></div>)
        }
        
    }


export default DishDetail;