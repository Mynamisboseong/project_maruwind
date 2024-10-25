import Image from 'react-bootstrap/Image';
import './itsok_banner.css';

function FluidExample() {
    return (
        <>
            <div className='itsok_banner_background'>
                <div className='itsok_banner_img'>
                    <div className='itsok_banner_text'>
                        <span>
                            "<span className='itsok_banner_text_hightlight'>대한민국 환경</span>,
                            우리 모두의
                            <span className='itsok_banner_text_hightlight'> 관심</span>
                            이 필요합니다!"
                        </span>
                    </div>
                    <Image src="eco_distroy.jpg" className="responsive-image" fluid
                        style={{ width: 'auto', height: 'auto'}}/>
                </div>
            </div>
        </>
    );
}

export default FluidExample;
