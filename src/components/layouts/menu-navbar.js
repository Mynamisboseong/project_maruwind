import { Link } from 'react-router-dom' // Link 컴포넌트 임포트
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './menu-navbar.css'

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="maruwind-navbar">
                        {/* 소개 드롭다운 */}
                        <NavDropdown title="소개" id="introduce-dropdown">
                            <NavDropdown.Item as={Link} to="/introduce">
                                홈페이지 소개
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/notice">
                                공지사항
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* 외부행사 드롭다운 */}
                        <Nav.Link as={Link} to="/contest">공모전</Nav.Link>

                        {/* 뉴스/보도자료 */}
                        <Nav.Link as={Link} to="/news">뉴스/보도자료</Nav.Link>

                        {/* SNS 챌린지 페이지로 이동 */}
                        <Nav.Link as={Link} to="/challenge">SNS챌린지</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BasicExample
