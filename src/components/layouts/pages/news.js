import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button' // 버튼 컴포넌트 추가
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons'; // faFire 아이콘 가져오기
import './news.css'; // 스타일을 외부 CSS 파일로 관리할 경우 사용

function NewsPage() {
    return (
        <>
            <div className="banner-container">
                <Image src="/newspage/news_banner.png" className="banner_image" />
                <div className='news_banner_text'>
                    <span className="newsbanner_title_text">
                        <span className='newbanner_title_hightlight'>환경보호 소식</span>
                        을 빠르게 확인해보세요
                    </span><br/>
                    <span className='newsbanner_subtext'>
                        환경관련 보도자료와 언론들을 이곳에서 둘러보세요 <br />
                    </span>
                    <div className='news_button_overay'>
                    <Button
                                className="news_button"
                                size="lg"
                                onClick={() =>
                                    (window.location.href =
                                        'https://www.youtube.com/@mevpr/videos')
                                }
                            >
                                환경부 공식유튜브 바로가기
                            </Button>
                    </div>
                </div>
            </div>

            <div className="trand_news">
                최신 뜨거운 뉴스예요! 
                <FontAwesomeIcon icon={faFire} style={{ color: "#ff0000" }} />
            </div>

            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/path/to/your/image1.jpg"
                            alt="첫 번째 슬라이드"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/path/to/your/image2.jpg"
                            alt="두 번째 슬라이드"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/path/to/your/image3.jpg"
                            alt="세 번째 슬라이드"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default NewsPage;
