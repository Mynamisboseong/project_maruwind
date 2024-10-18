    import React from 'react';
    import './graph_trash.css'; // 스타일 파일

    function GraphtrashExample() {
    return (
        <div className="graphtrash_overall">
        {/* 이미지 위에 표시할 텍스트 */}
            <div className="graptrash_title_text">
                <span>하루 평균 생활폐기물 발생량</span>
            </div>

            <div className='graphtrash_text_origin'>
                <span>단위: t / 출처: 환경부 "전국 폐기물 발생 및 처리현황"</span>
            </div>
            
            <br/>
            {/* 이미지 */}
            <div className='graphtrash_img'>
                <img
                    src="graph_trash.png"
                    alt="Graphtrash"
                    className="graphtrash-image"
                />
            </div>

            <br />
            
            <div className='graphtrash_point_text'>
                <span>매년 늘어만가는 생활 폐기물...!</span>
            </div>

            <div className='graphtrash_introduce_text'>
                <span>
                    국민들의 환경보호 인식이 떨어져가고 있는 것을 증명하듯이 매년 생활폐기물의 양은 늘고있습니다. <br/>
                    OECE 국가 중 <span className='graphtrash_highlight'>대한민국의 탄소 배출량 증가율은 1위</span>이며, <span className='graphtrash_highlight'>1인당 플라스틱 사용량은 세계 최대 수준</span>입니다. <br/>
                    코로나 이후 플라스틱과 일회용품의 사용량이 급증하고 <br />
                    쉽게 사용되고 쉽게 버려지는 쓰레기들은 대한민국의 환경을 위협합니다.
                </span>
            </div>
            
        </div>
    );
    }

    export default GraphtrashExample;
