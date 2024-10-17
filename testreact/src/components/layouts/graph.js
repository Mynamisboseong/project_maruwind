    import React from 'react';
    import './graph.css'; // 스타일 파일

    function GraphExample() {
    return (
        <div className="graph_top_text">
        {/* 이미지 위에 표시할 텍스트 */}
            <div className="text-above-image">
                <span> # 대한민국 국민들의 환경 관심도는? </span>
            </div>
            
            <br/>
            {/* 이미지 */}
            <img
                src="eco_attention_graph.png"
                alt="Graph"
                className="graph-image"
            />

            <div className='text-introduce-image'>
                <span>환경부의 “2023년 환경보전에 관한 국민 의식 조사”에 따르면 <br></br>
                    2013년 <span className='graph_highlight'>91.8%</span>에서 2023년에는 <span className='graph_highlight'>75.6%</span>까지 계속해서 떨어지는 모습이 보입니다. </span>
            </div>
            
        </div>
    );
    }

    export default GraphExample;
