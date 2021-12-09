import React from 'react';
import './LoginInputSection.css';
import { Button, Card, Form } from 'react-bootstrap';
import Header from '../../Header/Header';



/**
* @author
* @function 
**/

//export default function LoginInputSection() {
class LoginInputSection extends React.Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return
            <Header />
       
    }
    
    render() {  
        return(    
                <Card className={'card-body p-md-5 mx-md-4'}>

                    <div className={'text-center'}>
                        <img src="" alt="logo"></img>
                        <h4 className={'mt-1 mb-5 pb-1'}>GrocerNest</h4>
                        <h5 className={'mt-1 mb-5 pb-1'}>Inventory Management System</h5>
                    </div>

                    <Form>
                        <p>Please login to your account</p>

                        <div className={'form-outline mb-4'}>
                            <input type="email" id="form2Example11" className={'form-control'} placeholder="User Name"/>
                        </div>

                        <div className={'form-outline mb-4'}>
                            <input type="password" id="form2Example22" className={'form-control'} placeholder="Password"/>
                        </div>

                        <div className={'text-center pt-1 mb-5 pb-1'}>
                            <Button className={'btn btn-primary btn-block fa-lg gradient-custom-2 mb-3'} onClick={this.handleClick}>
                                Log In
                            </Button>
                        </div>
                    </Form>
                </Card>

        );
  }

 }

 export default LoginInputSection