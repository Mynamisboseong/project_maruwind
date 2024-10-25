    import Col from 'react-bootstrap/Col';
    import Container from 'react-bootstrap/Container';
    import Image from 'react-bootstrap/Image';
    import './challenge.css'

    function ChallengeExample() {
    return (
        <Container>
            <div className='section_challenge_img'>
                <Col xs={6} md={4}>
                <Image src="instagram_title_img.png" rounded className='custom_challenge_img'/>
                </Col>
            </div>
        </Container>
    );
    }

    export default ChallengeExample;