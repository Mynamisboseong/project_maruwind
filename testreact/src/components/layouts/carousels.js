import Carousel from 'react-bootstrap/Carousel';
import './carousels.css'

    function UncontrolledExample() {
    return (
        <Carousel style={{width: 'auto', height: '800px', overflow: 'hidden', backgroundColor: '#000a0a'}}>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='eco_slide_01.jpg'
                    alt="First slide"
                    style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                        opacity: 0.8
                    }}
            />

        <Carousel.Caption className="custom-caption">
            <p>
                대한민국 환경보호 웹사이트 <br />
                <span className="different-font">마루<span className="highlight">바</span>람</span>
            </p>
        </Carousel.Caption>


        </Carousel.Item>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_02.jpg'
                    alt="Second slide"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
                
            <Carousel.Caption className="custom-caption">
            <p>마루바람 두번째 슬라이드 입니다.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_03(2).jpg'
                    alt="Third slide"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
            
            <Carousel.Caption className="custom-caption">
            <p>
                마루바람 세번째 슬라이드 입니다.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
    }

    export default UncontrolledExample;