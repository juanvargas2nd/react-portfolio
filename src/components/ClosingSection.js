import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/contactMe.scss'

const ClosingSection = () => {
    return (
        <div>
            <Container >
                <Row>
                    <Col className='mx-auto closing-height d-flex align-items-center text-center px-4' lg="6">
                        <div className='my-5'>
                            <h2 className='p-2 my-4 header fs-1 fw-bold text'>
                                Get In Touch
                            </h2>
                            <p className='p-2 subheader'>
                                Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                            </p>
                            <div className='p-4'>
                                <Button type="button" variant="outline-success">Success</Button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClosingSection