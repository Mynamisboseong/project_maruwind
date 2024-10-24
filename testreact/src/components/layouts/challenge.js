    import Col from 'react-bootstrap/Col';
    import Container from 'react-bootstrap/Container';
    import Image from 'react-bootstrap/Image';
    import Row from 'react-bootstrap/Row';

    function ChallengeExample() {
    return (
        <Container>
        <Row>
            {/* <Col xs={6} md={4}>
            <Image src="instagram_title_img.png" rounded />
            </Col> */}
            {/* <Col xs={6} md={4}>
            <Image src="instagram_title_img.png" roundedCircle />
            </Col> */}
            <Col xs={10} md={5}>
            <Image src="instagram_title_img.png" thumbnail />
            </Col>
        </Row>
        </Container>
    );
    }

    export default ChallengeExample;