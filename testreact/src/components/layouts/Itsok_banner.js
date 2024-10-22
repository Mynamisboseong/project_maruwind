import Image from 'react-bootstrap/Image';
import './itsok_banner.css'

function FluidExample() {
    return (
        <>
            <div className='itsok_banner_text'>
                <span>"대한민국 환경, 이대로 괜찮을까요?"</span>
            </div>

            <div className='itsok_banner_img'>
                <Image src="black_tree.png" fluid style={{ width: '20%', height: 'auto' }}/>
            </div>
        </>
    );
}

export default FluidExample;
