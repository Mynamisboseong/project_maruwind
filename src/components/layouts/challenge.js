import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row'
import './challenge.css'

function ChallengeExample() {
    const titleRef = useRef(null)
    const [isTitleAnimated, setIsTitleAnimated] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsTitleAnimated(true)
                } else {
                    setIsTitleAnimated(false)
                }
            },
            {
                threshold: 0.1, // 컴포넌트의 10%가 화면에 보이면 애니메이션 시작
            }
        )

        if (titleRef.current) {
            observer.observe(titleRef.current)
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current)
            }
        }
    }, [])

    return (
        <Container>
            <div className="background_container">
                {/* 타이틀 텍스트 */}
                <div
                    ref={titleRef}
                    className={`challenge_title_text ${
                        isTitleAnimated ? 'fadeSlideUp' : ''
                    }`}
                >
                    <span>
                        <span className="challenge_title_hightlight">
                            SNS 챌린지
                        </span>
                        로{' '}
                        <span className="challenge_title_hightlight">
                            함께해요!
                        </span>
                    </span>
                </div>

                {/* 서브 타이틀 텍스트 */}
                <div className="challenge_subtitle_text">
                    많은 단체와 사람들이 여러가지 환경보호 챌린지를 업로드하고
                    있습니다
                </div>

                {/* 섹션 내용들 */}
                <ChallengeSection
                    title="#줍깅 챌린지"
                    images={[
                        '/challenge/zupging01.png',
                        '/challenge/zupging02.png',
                        '/challenge/zupging03.png',
                    ]}
                    description={
                        <>
                            <span className="challenge_introduce_hightlight">
                                ‘줍다’와 ‘조깅’을 합친 신조어
                            </span>
                            로 조깅을 하며 쓰레기를 줍는 환경 보호 운동인
                            플로깅을 의미합니다. <br></br> 쓰레기를 줍기 위해
                            쪼그려 앉았다 일어났다를 반복하기 때문에 일반적으로
                            조깅보다 운동 효과가 더욱 크며 환경 보호에도 도움이
                            되는 일석이조 활동입니다.
                        </>
                    }
                />

                {/* 용기내! 챌린지 섹션 */}
                <ChallengeSection
                    title="#용기내! 챌린지"
                    images={[
                        '/challenge/courage01.png',
                        '/challenge/courage02.png',
                        '/challenge/courage03.png',
                    ]}
                    description={
                        <>
                            <span className="challenge_introduce_hightlight">
                                음식 포장으로 발생하는 불필요한 쓰레기를
                                줄이자는 취지
                            </span>
                            에서 시작되었으며 <br />
                            <span className="challenge_introduce_hightlight">
                                '용기(courage)를 내서 용기(container) 내(in)'에
                                식재료나 음식을 포장해 오는 운동
                            </span>
                            입니다. <br />이 챌린지는 배우 류준열씨와 그린피스가
                            지난해 4월 함께 시작해 많은 주목을 받기도 했습니다.
                        </>
                    }
                />

                {/* 업사이클링 챌린지 섹션 */}
                <ChallengeSection
                    title="#업사이클링 챌린지"
                    images={[
                        '/challenge/upcycling01.png',
                        '/challenge/upcycling02.png',
                        '/challenge/upcycling03.png',
                    ]}
                    description={
                        <>
                            <span className="challenge_introduce_hightlight">
                                재활용품에 디자인 등을 입히는 방법으로, 가치를
                                높인 제품으로 재탄생 시키는 챌린지
                            </span>
                            입니다. <br />
                            버려지는 제품을 단순히 재활용하는 데에서 그치는 것이
                            아닌, 매력적인 제품으로 탈바꿈 시키는 것입니다.
                            인테리어로도 많이 활용되고 있어 사람들의 이목을 끌고
                            있습니다
                        </>
                    }
                />

                {/* 하단 섹션 */}
                <div
                    className="challenge_bottom_section"
                    style={{ position: 'relative', marginTop: '20px' }}
                >
                    <Col xs={6} md={3}>
                        <Image
                            src="/challenge/challenge_section_bottom.png"
                            rounded
                            className="challenge_bottom"
                        />
                        <div className="button-overlay">
                            <Button
                                className="campaign-button"
                                size="lg"
                                onClick={() => {
                                    navigate('/challenge');
                                    window.scrollTo(0, 0); // 페이지 상단으로 스크롤 이동
                                }}
                            >
                                SNS 챌린지 보러가기
                            </Button>

                        </div>
                    </Col>
                </div>
            </div>
        </Container>
    )
}

function ChallengeSection({ title, images, description }) {
    return (
        <>
            <div className="challeng_name_title_text">{title}</div>
            <Row className="challeng_img">
                {images.map((src, index) => (
                    <Col xs={6} md={4} key={index}>
                        <Image
                            src={src}
                            rounded
                            className="challenge_img_size"
                        />
                    </Col>
                ))}
            </Row>
            <div className="challenge_introduce">{description}</div>
        </>
    )
}

export default ChallengeExample
