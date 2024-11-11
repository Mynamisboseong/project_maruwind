import React, { useEffect, useRef, useState } from 'react'
import './graph.css'

function GraphExample() {
    const graphRef = useRef(null)
    const [animateText, setAnimateText] = useState(false)

    useEffect(() => {
        const observerOptions = {
            root: null, // 기본적으로 뷰포트를 기준으로 관찰
            threshold: 0.5, // 요소가 뷰포트의 50% 이상 보일 때 애니메이션 시작
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

        if (graphRef.current) {
            observer.observe(graphRef.current)
        }

        return () => {
            if (graphRef.current) {
                observer.unobserve(graphRef.current)
            }
        }
    }, [])

    return (
        <div className="graph_top_text" ref={graphRef}>
            {/* 이미지 위에 표시할 텍스트 */}
            <div className={`text-above-image ${animateText ? 'animate' : ''}`}>
                <span> # 대한민국 국민들의 환경 관심도는? </span>
            </div>

            <div className="text_origin">
                <span>출처: 환경부 "환경보전에 관한 국민의식 조사"</span>
            </div>

            <br />
            {/* 이미지 */}
            <img
                src="eco_attention_graph.png"
                alt="Graph"
                className={`graph-image`}
            />

            <div className="text-introduce-image">
                <span>
                    환경부의 “2023년 환경보전에 관한 국민 의식 조사”에 따르면{' '}
                    <br />
                    2013년 <span className="graph_highlight">91.8%</span>에서
                    2023년에는 <span className="graph_highlight">75.6%</span>
                    까지 계속해서 떨어지는 모습이 보입니다.
                </span>
            </div>
        </div>
    )
}

export default GraphExample
