import Carousel from 'react-bootstrap/Carousel';
import './carousels.css';

function UncontrolledExample() {
    return (
        <Carousel className="carousel-container">
            <Carousel.Item className="carousel-item">
                <img
                    className="carousel_slide01"
                    src='/eco_slide/eco_slide_01.jpg'
                    alt="First slide"
                />
                <div className="carousel-text">
                    <p>
                        대한민국 환경보호 웹사이트 <br />
                        <span className="different-font">마루<span className="highlight">바</span>람</span>
                    </p>
                </div>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="carousel_slide02"
                    src='/eco_slide/eco_slide_02.jpg'
                    alt="Second slide"
                />
                <div className="carousel-text">
                    <p>마루바람 두번째 슬라이드 입니다.</p>
                </div>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="carousel_slide03"
                    src='/eco_slide/eco_slide_03.jpg'
                    alt="Third slide"
                />
                <div className="carousel-text">
                    <p>마루바람 세번째 슬라이드 입니다.</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
