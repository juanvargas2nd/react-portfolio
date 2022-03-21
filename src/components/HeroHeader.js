import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/style.scss'
import { useEffect } from 'react'


const HeroHeader = () => {

    useEffect(() => {
        document.body.style.background = '#0a192f'
    })

    return (
        <>
            <Container>
                <Row className='hero-row' >
                    <Col className='hero-row' md="10">
                        <div className='d-flex align-items-center hero-header'>
                            <div className='p-2'>
                                <p className='fs-5' style={{ color: '#53d0b7' }}>
                                    Hi, my name is
                                </p>
                                <h1 className='display-3 fw-bold my-0 h1-hero-header'>
                                    Juan Vargas
                                </h1>
                                <h2 className='display-4 fw-bold my-0 h2-hero-subHeader'>
                                    And I'm a Web Developer
                                </h2>
                                <p className='fs-5 py-2' style={{ color: '#8992b0' }}>
                                    I'm a junior web developer specializing on developing on the frontend.
                                </p>
                                <div className='py-4'>

                                    <Button style={{ width: '12rem', color: '#53d0b7' }} className='p-3 text-wrap' type="button" variant="outline-success">Checkout my Resume</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeroHeader