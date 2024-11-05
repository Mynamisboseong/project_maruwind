import React, { useEffect, useRef, useState } from 'react';
import './graph.css'; // 스타일 파일

function GraphExample() {
    const textRef = useRef(null); // 애니메이션을 적용할 요소 참조
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // 요소의 20%가 보일 때 애니메이션 시작
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className="graph_top_text">
            <div
                className={`text-above-image ${isVisible ? 'animate' : ''}`}
                ref={textRef}
            >
                <span> # 대한민국 국민들의 환경 관심도는? </span>
            </div>

            <div className="text_origin">
                <span>출처: 환경부 "환경보전에 관한 국민의식 조사"</span>
            </div>

            <br />
            <img src="eco_attention_graph.png" alt="Graph" className="graph-image" />

            <div className="text-introduce-image">
                <span>
                    환경부의 “2023년 환경보전에 관한 국민 의식 조사”에 따르면 <br />
                    2013년 <span className="graph_highlight">91.8%</span>에서 2023년에는 <span className="graph_highlight">75.6%</span>까지 계속해서 떨어지는 모습이 보입니다.
                </span>
            </div>
        </div>
    );
}

export default GraphExample;
