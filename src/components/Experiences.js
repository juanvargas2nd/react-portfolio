import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import '../styles/experiences.scss'


const Experiences = () => {
    return (
        <>
            <Container className='experiences-height d-flex align-items-center'>
                <Row className='row-align'>
                    <Col className='col-align' lg="8">
                        <div className='d-flex align-items-center my-2'>
                            <div className='mx-auto'>
                                <Tab.Container className="mx-auto" defaultActiveKey="first">
                                    <Row className='p-2'>
                                        <div className='my-5'>
                                            <h3 className='p-2 header fs-1 text fw-bold'>
                                                Experiences <hr></hr>
                                            </h3>
                                        </div>
                                        <Col md={4} >
                                            <Nav variant="pills" className="flex-column pb-4">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Crewbloom</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">AdRiot Dev</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col md={8}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <div className='subheader fs-6 text'>
                                                        Like as, to make our appetite more keen, With eager compounds we our palate urge; As, to prevent our maladies unseen, We sicken to shun sickness when we purge; Even so, being full of your ne'er-cloying sweetness, To bitter sauces did I frame my feeding; And, sick of welfare, found a kind of meetness To be diseas'd, ere that there was true needing. Thus policy in love, to anticipate The ills that were not, grew to faults assur'd,
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <div className='subheader fs-6 text'>
                                                        Like as, to make our appetite more keen, With eager compounds we our palate urge; As, to prevent our maladies unseen, We sicken to shun sickness when we purge; Even so, being full of your ne'er-cloying sweetness, To bitter sauces did I frame my feeding; And, sick of welfare, found a kind of meetness To be diseas'd, ere that there was true needing. Thus policy in love, to anticipate The ills that were not, grew to faults assur'd,
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Experiences