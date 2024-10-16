import Carousel from 'react-bootstrap/Carousel';
import './carousels.css'

    function UncontrolledExample() {
    return (
        <Carousel style={{width: 'auto', height: '800px', overflow: 'hidden', backgroundColor: '#000a0a'}}>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_1.jpg'
                    alt="First slide"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />

            <Carousel.Caption className="custom-caption">
            <p>대한민국 환경보호 웹사이트 <br/>
            마루바람에 오신것을 환영합니다.
            </p>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_2.jpg'
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
                    src='/eco_slide_3.jpg'
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