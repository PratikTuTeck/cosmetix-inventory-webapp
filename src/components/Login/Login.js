import React from 'react';
import './Login.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import LoginInputSection from './LoginInputSection/LoginInputSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';

/**
* @author
* @function 
**/

export default function Login() {
  return(
    <section className={'h-100 gradient-form bodyBackground'}>
        <Container className={'py-5 h-100'}>
            <Row className={'d-flex justify-content-center align-items-center h-100'}>
                <Col className={'col-xl-10'}>
                    <Card className={'rounded-3 text-black'}>
                        <Row className={'g-0'}>
                            <Col className={'col-lg-6'}>
                                <LoginInputSection />
                            </Col>
                            <Col className={'col-lg-6 d-flex align-items-center gradient-custom-2'}>
                                <DescriptionSection />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
   );

 }