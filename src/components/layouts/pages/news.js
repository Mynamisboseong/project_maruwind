import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import './news.css';

const newsData = [
    {
        title: "지역 중심 상생 의료체계 확립 및 지역공유형 종합자실 네트워크 구축 방안 논의",
        date: "2024.11.15",
        source: "보건복지부",
        summary: "지역 중심 상생 의료체계 확립 및 지역공유형 종합자실 네트워크 구축 방안 논의 - [제12차 의료개혁특위 전체회의] 개최(11.15.) - 정부는 11월 15일(금) 10시 의료개혁특별위원회(이하 의료개혁특위) 산하...",
    },
    {
        title: "과기정통부, 「대한민국 인터넷 대상」 및 「2024 디지털 혁신상(이노베이션 어워드)」 시상식 개최",
        date: "2024.11.15",
        source: "과학기술정보통신부",
        summary: "과기정통부는 「대한민국 인터넷 대상」 및 「2024 디지털 혁신상(이노베이션 어워드)」 시상식 개최 관련 보도자료 내용을 안내드립니다...",
    },
    {
        title: "(동정) 기후변화 대응을 위해 어업 현장의 목소리 경청",
        date: "2024.11.15",
        source: "해양수산부",
        summary: "기후변화 대응을 위해 어업 현장의 목소리 경청 - 송상헌 해수부 차관, 수산·수양식 분야 기후변화 대응 이해관계자 회의 개최 - 기후변화 대응 관련 의견을 청취...",
    },
];

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

            <div className="list_news">
                그 밖의 보도자료는 이곳에서!
                <FontAwesomeIcon icon={faNewspaper} style={{ color: "#172fa6" }} />
            </div>

            {/* 보도자료 리스트 */}
            <div className="news-list">
                {newsData.map((news, index) => (
                    <div key={index} className="news-item">
                        <h3 className="news-title">{news.title}</h3>
                        <p className="news-date">{news.date} | {news.source}</p>
                        <p className="news-summary">{news.summary}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewsPage;
