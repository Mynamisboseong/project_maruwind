import Image from 'react-bootstrap/Image';
import './itsok_banner.css';

function FluidExample() {
    return (
        <>
            <div className='itsok_banner_background'>
                <div className='itsok_banner_text'>
                    <span>"대한민국 환경, 우리 모두의 관심이 필요합니다.."</span>
                </div>

                <div className='itsok_banner_img'>
                    <Image src="black_tree.png" className="responsive-image" fluid/>
                </div>
            </div>
        </>
    );
}

export default FluidExample;
