import Card from 'react-bootstrap/Card';
import './footer.css';

function FooterExample() {
  return (
    <Card className="custom-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p className="highlight">마루바람</p>
          <p>
            대표 강보성 대표전화 010-1234-5678 FAX 042-123-4567<br/>
            문의 이메일 marubaram@naver.com<br/>
            대전광역시 서구 도안북로88(도안동, 목원대학교)<br/>
            사업자 등록번호 123-45-67890
          </p>
          <p>이용약관 &nbsp;&nbsp; 개인정보처리방침</p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default FooterExample;
