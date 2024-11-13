import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button' // 버튼 컴포넌트 추가
import './carousels.css'

function UncontrolledExample() {
    return (
        <Carousel className="carousel-container">
            <Carousel.Item className="carousel-item">
                <img
                    className="carousel_slide01"
                    src="/eco_slide/eco_slide_01.jpg"
                    alt="First slide"
                />
                <div className="carousel-text">
                    <p>
                        대한민국 환경보호 웹사이트 <br />
                        <span className="different-font">
                            마루<span className="highlight">바</span>람
                        </span>
                    </p>
                </div>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="carousel_slide02"
                    src="/eco_slide/eco_slide_02.png"
                    alt="Second slide"
                />
                <div className="carousel-contest-text">
                    <p>
                        마루바람은{' '}
                        <span className="contest-hightlight">
                            환경보호 관련 공모전
                        </span>
                        도 추천해준다고?
                    </p>
                </div>
                <Button className="carousel-button" size="lg">
                    공모전 보러가기
                </Button>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="carousel_slide03"
                    src="/eco_slide/eco_slide_03.png"
                    alt="Third slide"
                />
                <div className="carousel-challenge-text">
                    <p>
                        유행중인{' '}
                        <span className="contest-hightlight">
                            환경보호 챌린지
                        </span>
                        도 확인해보세요!
                    </p>
                </div>
                <Button className="carousel-button" size="lg">
                    챌린지 보러가기
                </Button>
            </Carousel.Item>
        </Carousel>
    )
}

export default UncontrolledExample
