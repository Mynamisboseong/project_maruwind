import React, { useEffect, useState, useRef } from 'react';
import Image from 'react-bootstrap/Image';
import './itsok_banner.css';

function FluidExample() {
    const [animateText, setAnimateText] = useState(false);
    const bannerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5, // 50% 이상 보일 때 애니메이션 시작
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAnimateText(true); // 애니메이션 시작
                } else {
                    setAnimateText(false); // 요소가 벗어나면 애니메이션 제거
                }
            });
        }, observerOptions);

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => {
            if (bannerRef.current) {
                observer.unobserve(bannerRef.current);
            }
        };
    }, []);

    return (
        <div className="itsok_banner_background">
            <div className="itsok_banner_img" ref={bannerRef}>
                <div
                    className={`itsok_banner_text ${
                        animateText ? 'animate' : ''
                    }`}
                >
                    <span>
                        "
                        <span className="itsok_banner_text_hightlight">
                            대한민국 환경
                        </span>
                        , 이제는 모두의
                        <span className="itsok_banner_text_hightlight">
                            {' '}
                            관심
                        </span>
                        이 필요합니다!"
                    </span>
                </div>
                <Image
                    src="eco_distroy.jpg"
                    className="responsive-image"
                    fluid
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
}

export default FluidExample;
