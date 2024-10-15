import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './brand.css'; // 필요한 추가 스타일 정의

function BrandExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid className="p-0"> {/* margin/padding을 제거하고 전체 너비 사용 */}
        <div className="d-flex align-items-center logo-container">
          {/* 홈페이지 로고 */}
          <Navbar.Brand href="http://localhost:3000/" className="me-3">
            <img
              src="/home.png"
              width="24"
              height="24"
              className="d-inline-block align-top"
              alt="Home"
            />
          </Navbar.Brand>

          {/* 인스타그램 로고 */}
          <Navbar.Brand href="https://www.instagram.com" target="_blank" className="me-3">
            <img 
              width="24" 
              height="24"
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              className="d-inline-block align-top"
              alt="Instagram"
            />
          </Navbar.Brand>

          {/* 페이스북 로고 */}
          <Navbar.Brand href="https://www.facebook.com" target="_blank" className="me-3">
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/color/48/facebook-new.png"
              className="d-inline-block align-top"
              alt="Facebook"
            />
          </Navbar.Brand>

          {/* 유튜브 로고 */}
          <Navbar.Brand href="https://www.youtube.com" target="_blank">
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/color/48/youtube-play.png"
              className="d-inline-block align-top"
              alt="YouTube"
            />
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default BrandExample;
