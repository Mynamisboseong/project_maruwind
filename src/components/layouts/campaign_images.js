import React, { useEffect, useState, useRef } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button' // 버튼 컴포넌트 추가
import { useNavigate } from 'react-router-dom' // useNavigate 가져오기
import './campaign_images.css' // CSS 파일 가져오기

function ShapeExample() {
  const [animateText, setAnimateText] = useState(false)
  const titleRef = useRef(null) // 제목을 참조할 ref
  const navigate = useNavigate() // useNavigate 훅 초기화

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // 텍스트가 뷰포트의 50% 이상 보일 때 애니메이션 시작
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateText(true) // 애니메이션 시작
        } else {
          setAnimateText(false) // 요소가 벗어나면 애니메이션 제거
        }
      })
    }, observerOptions)

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  const handleNavigate = () => {
    navigate('/contest') // /contest 경로로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' }) // 최상단으로 부드럽게 스크롤 이동
  }

  return (
    <div className="campaign-background">
      {/* 제목 컨테이너 */}
      <Container className="text-center-campaign-title-container">
        <span
          className={`campaign-title ${animateText ? 'animate' : ''}`}
          ref={titleRef}
        >
          "이런 <span className="campaign-title-highlight">공모전</span>이나{' '}
          <span className="campaign-title-highlight">캠페인</span>은 어떤가요?"
        </span>
      </Container>

      <Container className="text-center-campaign-subtext">
        <span className="campaign-subtext">
          국가와 기업, 많은 환경단체들이 대한민국 환경을 위해 공모전과 캠페인을
          진행하고 있습니다
        </span>
      </Container>

      {/* 이미지 컨테이너 */}
      <Container className="campaign-image-container">
        <Row>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign1.png"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign2.png"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign3.png"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign4.jpg"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign5.jpg"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign6.png"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign7.jpg"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
          <Col xs={5} md={3}>
            <Image
              src="/campaign/campaign8.png"
              className="campaign-image"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>

      {/* 버튼 컨테이너 */}
      <Container className="campaign-button-container">
        <Button
          className="campaign-button"
          size="lg"
          onClick={handleNavigate} // 버튼 클릭 시 이동 및 스크롤
        >
          공모전 보러가기
        </Button>
      </Container>
    </div>
  )
}

export default ShapeExample
