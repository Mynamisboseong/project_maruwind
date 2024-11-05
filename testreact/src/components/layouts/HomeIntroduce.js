import './HomeIntroduce.css';  // CSS 파일 연결

function HomeIntroduce() {
  return (
    <div className="introduce-container">
      {/* 배너 섹션 */}
      <div className="banner">
        <img
          src="/marubaram_introduce_test.jpg"
          alt="소개 배너 이미지"
          className="banner-image"
        />
        <h1 className="banner-title">마루바람 소개</h1>
      </div>

      {/* 그리드 섹션: 우리가 하는 일 */}
      <div className="content-container we-do">
        <h2 className="we-do-title">
          마루바람은 지구의 목소리를 대신하기 위해 활동합니다
        </h2>
        <div className="mission-grid">
  <div className="mission-item">
    <h3>해결책</h3>
    <img
      src="/solution.png"
      alt="해결책 이미지"
      className="mission-image"
    />
    <p>
      우리는 단순히 문제를 지적하는 데서 그치지 않고, 연구와 조사 활동을 통해 
      건강한 미래와 깨끗한 지구를 만들기 위한 효과적인 해결책을 제시합니다.
    </p>
  </div>

  <div className="mission-item">
    <h3>독립성</h3>
    <img
      src="/independence.png"
      alt="독립성 이미지"
      className="mission-image"
    />
    <p>
      마루바람은 정부, 기업 혹은 정당으로부터 어떠한 후원도 받지 않으며, 
      오로지 개인 및 독립재단의 후원으로만 운영됩니다.
    </p>
  </div>

  <div className="mission-item">
    <h3>글로벌</h3>
    <img
      src="/global.png"
      alt="글로벌 이미지"
      className="mission-image"
    />
    <p>
      환경문제는 국경이 없습니다. 국제 환경단체로서 마루바람은 초국가적 환경문제에 
      대응하고 범세계적인 지식과 자원을 활용합니다.
    </p>
  </div>

  <div className="mission-item">
    <h3>비폭력</h3>
    <img
      src="/peace.png"
      alt="비폭력 이미지"
      className="mission-image"
    />
    <p>
      마루바람은 양심에 기반한 행동을 하며, 평화에 헌신합니다. 
      마루바람의 모든 액션은 평화적 방식으로 이루어집니다.
    </p>
  </div>
</div>

      </div>

      {/* 이미지 카드 섹션 */}
      <div className="content-container creators">
        <h2 className="section-title">만든 사람들</h2>
        <div className="image-cards">
          <div className="card">
            <div className="img-wrapper">
              <img src="/createby/boseong.jpg" alt="제작 인원 1" />
            </div>
            <p className="card-caption">강보성</p>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src="https://via.placeholder.com/300" alt="제작 인원 2" />
            </div>
            <p className="card-caption">박종승</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntroduce;
