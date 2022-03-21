import { Container, Row, Col } from 'react-bootstrap';
import '../styles/aboutStyle.scss'
import juan from '../images/juan.jpg'


const AboutSection = () => {
    return (
        <div>
            <Container className='about-height'>
                <Row className='about-row g-0'>
                    <Col className='about-col' md="8">
                        <div className=' d-flex align-items-center my-2 py-4 px-2'>
                            <div>
                                <h3 className="mx-auto my-5 fs-1 text fw-bold p-2 header">
                                    About Me<hr></hr>
                                </h3>
                                <p className="my-2 p-2 subheader">
                                    Hello! My name is Juan and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try on changing my career — I've taught myself who to code for 4 months and landed my first intern-job.
                                    Fast-forward to today, I've had the privilege of working for a start-up and  a BPO company for a total of 1 year of web development experience
                                </p>
                                <p className="my-2 p-2 subheader">
                                    Here are a few technologies I’ve been working with recently:
                                </p>
                                <div className='d-flex'>
                                    <div className='mx-4 my-2 p-2 subheader'>
                                        <div>Vue</div>
                                        <div>React</div>
                                        <div>Bootstap</div>
                                    </div>
                                    <div className='mx-4 my-2 p-2 subheader'>
                                        <div>NodeJs</div>
                                        <div>Strapi</div>
                                        <div>Wordpress</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="4" className='d-flex align-items-center about-col'>
                        <div >
                            <img
                                src={juan}
                                width="300"
                                height="300"
                                className="d-inline-block align-top img-thumbnail"
                                alt="React Bootstrap logo"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutSection