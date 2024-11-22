import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire,faDownLong} from '@fortawesome/free-solid-svg-icons';
import './news.css';

const newsData = [
    {
        title: "한국수자원공사, 2024 한국에너지대상 산업통상자원부장관 표창 수상",
        date: "2024-11-19 09:53",
        source: "한국수자원공사",
        summary: "한국수자원공사(K-water, 사장 윤석대)는 11월 18일 더 플라자 서울 호텔에서 개최된 ‘2024 한국에너지 대상’에서 재생에너지 산업발전에 이바지한 유공을 인정받아 산업통상자원부 장관 표창을 수상했다. 올해로 46번째를...",
        image: "/newspage/Kwater.jpg",
        url: "https://www.newswire.co.kr/newsRead.php?no=1001069"
    },
    {
        title: "이니스프리, 강이슬 작가와 플레이그린 북토크 ‘인스턴트 웰니스’ 행사 진행",
        date: "2024-11-19 09:20",
        source: "이니스프리",
        summary: "고효능 자연주의 브랜드 이니스프리가 강이슬 작가와 플레이그린 북토크 ‘인스턴트 웰니스’를 지난 15일(금) ‘이니스프리 디아일’에서 성황리에 마무리했다. 건강·뷰티 방송 프로그램 작가로 활동했던 강이슬 작가는 건강과 환경에 대해 지속적인 관심을 이어 나가며......",
        image: "/newspage/Innisfree.jpg",
        url: "https://www.newswire.co.kr/newsRead.php?no=1001063"
    },
    {
        title: "엔발리오, 탄소 배출량 감소를 위한 지속 가능성 목표 발표",
        date: "2024-11-18 14:00",
        source: "엔발리오",
        summary: "글로벌 플라스틱 소재 솔루션 기업 엔발리오(ENVALIOR)가 탄소 배출량 감소를 위한 지속 가능성 목표를 발표했다. 엔발리오의 지속 가능성 목표는 온실 가스 배출 저감과 순환형 포트폴리오 확대에 중점을 둔다. 이를 위한 주...",
        image: "/newspage/Envalior.jpg",
        url: "https://www.newswire.co.kr/newsRead.php?no=1001012"
    },
    {
        title: "‘발전기술컨퍼런스 2024’ 12월 6일 대전 DCC에서 개최",
        date: "2024-11-18 09:00",
        source: "발전기술컨퍼런스",
        summary: "코로나19로 인해 2021년까지 2년간 온라인으로 진행됐던 ‘발전기술컨퍼런스’가 2022년 오프라인 개최에 이어 2년 만에 다시 오프라인으로 열린다. ‘발전기술컨퍼런스 2024’는 12월 6일 대전컨벤션센터에서 열리며, 한국남동...",
        image: "/newspage/TechnologyConference.jpg",
        url: "https://www.newswire.co.kr/newsRead.php?no=1000941"
    },
    {
        title: "PUMA unveils Vision 2030: Scaling up for bigger impact in climate, circularity and human rights",
        date: "Nov. 15, 2024 11:50",
        source: "PUMA SE Frankfurt Stock Exchange PUM",
        summary: "Sports company PUMA has announced its new Vision 2030 sustainability goals, which expand on the strong progress the brand has made. “With Vision 2030 we have elevated and evolved our...",
        image: "/newspage/Puma.png",
        url: "https://www.newswire.co.kr/newsRead.php?no=1000907"
    },
    {
        title: "푸마, 비전 2030 발표… 기후, 순환성, 인권 분야에서 영향력 증대를 위한 스케일업",
        date: "2024-11-15 11:50",
        source: "PUMA SE 프랑크푸르트증권거래소 PUM",
        summary: "스포츠 기업 푸마(PUMA)가 브랜드가 이뤄온 강력한 발전을 기반으로 확장하는 새로운 비전 2030 지속가능성 목표를 발표했다. 푸마의 최고소싱책임자인 앤-로르 데쿠르(Anne-Laure Descours)는 “비전 2030을 통해 우리는...",
        image: "/newspage/Puma.png",
        url: "https://www.newswire.co.kr/newsRead.php?no=1000908"
    },
];

function NewsPage() {
    return (
        <>
            <div className="banner-container">
                <div className='news_banner_text'>
                    <div className="newsbanner_title_text">
                        <span className='newbanner_title_hightlight'>환경보호 소식</span>
                        을 빠르게 확인해보세요!
                    </div>
                    <div className='newsbanner_subtext'>
                        많은 환경관련 보도자료와 언론자료들을 이 곳에서 게시하고 있습니다. <br/>
                        대한민국 환경부 공식유튜브에서도 많은 환경관련 콘텐츠를 업로드 하고 있으니 방문해보세요!
                    </div>
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
                <FontAwesomeIcon icon={faFire} className="fa-beat-fade" style={{ color: "#e00000" }} />
                    <span className="trand_news_title">
                        최근 뜨거운 뉴스를 확인하세요
                    </span>
                <FontAwesomeIcon icon={faFire} className="fa-beat-fade" style={{ color: "#e00000" }} />
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
                <FontAwesomeIcon icon={faDownLong} style={{ color: "#00acae" }}bounce />
                    <span className="list_news_title">다른 보도자료는 이곳에!</span>
                <FontAwesomeIcon icon={faDownLong} style={{ color: "#00acae" }}bounce />
            </div>

            {/* 보도자료 리스트 */}
            <div className="news-list">
                {newsData.map((news, index) => (
                    <div 
                        key={index} 
                        className="news-item" 
                        onClick={() => window.location.href = news.url} // 외부 URL 이동
                        style={{ cursor: "pointer" }} // 클릭 가능 스타일 추가
                    >
                        {/* 텍스트와 이미지가 하나의 부모 요소 안에 있음 */}
                        <div className="news-text">
                            <h3 className="news-title">{news.title}</h3>
                            <p className="news-date">{news.date} | {news.source}</p>
                            <p className="news-summary">{news.summary}</p>
                        </div>
                        <img src={news.image} alt={news.title} />
                    </div>
                ))}
                <div className='news-list-button-overay'>
                    <Button
                        className='list-button'
                            onClick={() =>
                                (window.location.href = 'https://www.newswire.co.kr/?md=A01&cat=1500')
                            }
                        >
                            모든 보도자료 보러가기
                        </Button>
                    </div>
            </div>
        </>
    );
}

export default NewsPage;
