import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'; // 버튼 컴포넌트 추가
import './campaign_images.css'; // CSS 파일 가져오기

function ShapeExample() {
  return (
    <>
      <div className='campaign-background'>
        {/* 제목 컨테이너 */}
        <Container className="text-center-campaign-title-container">
          <span className="campaign-title">이런 캠페인,공모전은 어떤가요?</span>
        </Container>

        {/* 이미지 컨테이너 */}
        <Container className="campaign-image-container">
          <Row>
            <Col xs={6} md={4}>
              <Image src="campaign1.png" className="campaign-image" rounded fluid />
            </Col>
            <Col xs={6} md={4}>
              <Image src="campaign2.png" className="campaign-image" rounded fluid />
            </Col>
            <Col xs={6} md={4}>
              <Image src="campaign3.png" className="campaign-image" rounded fluid />
            </Col>
          </Row>
        </Container>

        {/* 버튼 컨테이너 */}
        <Container className="campaign-button-container">
          <Button className="campaign-button" size="lg">
            공모전 캠페인 보러가기
          </Button>
        </Container>
      </div>
    </>
  );
}

export default ShapeExample;
