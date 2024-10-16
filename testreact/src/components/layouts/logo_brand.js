    import Container from 'react-bootstrap/Container';
    import Navbar from 'react-bootstrap/Navbar';
    import './logo_brand.css';

    function LogoBrandExample() {
    return (
        <Navbar className="bg-body-tertiary">
        <Container className="logo-brand-container">
            <Navbar.Brand href="#home">
            <img
                src="/maruwind_logo(3).png"
                className="logo-image"  // 새로운 클래스 추가
                alt="maruwind logo"
            />
            </Navbar.Brand>
        </Container>
        </Navbar>
    );
    }

    export default LogoBrandExample;
