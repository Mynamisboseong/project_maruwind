import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import './news.css';

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
                            (window.location.href = 'https://www.youtube.com/@mevpr/videos')
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

            <div className="news_carousel_container">
                <Carousel>
                    <Carousel.Item>
                        <iframe
                            className="carousel-video"
                            src="https://www.youtube.com/embed/zBnsMlX0NYQ?si=5Ku9tpAm4jmQHkI0"
                            title="첫 번째 슬라이드 동영상"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="carousel-video"
                            src="https://www.youtube.com/embed/2uauzR_egaU?si=6okLOl2jbATz53ud"
                            title="두 번째 슬라이드 동영상"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            className="carousel-video"
                            src="https://www.youtube.com/embed/5IU5rsSzl0o?si=5E2r8q6S0OxCOlXS"
                            title="세 번째 슬라이드 동영상"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default NewsPage;
