import './HomeIntroduce.css' // CSS 파일 연결

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
                    마루바람은 환경보호 인식 상승을 위해 활동합니다
                </h2>
                <div className="mission-grid">
                    <div className="mission-item">
                        <h3>친밀성</h3>
                        <img
                            src="/introduce/friendly.png"
                            alt="해결책 이미지"
                            className="mission-image"
                        />
                        <p>
                        마루바람은 환경 보호를 딱딱하고 어려운 주제가 아니라, 누구나 쉽게 다가갈 수 있는 친숙한 이야기로 전달합니다.
                        우리의 삶과 밀접하게 연결된 환경의 가치를 공감할 수 있도록 따뜻하고 이해하기 쉬운 콘텐츠를 제공합니다.
                        </p>
                    </div>

                    <div className="mission-item">
                      <h3>접근성</h3>
                      <img
                        src="/introduce/access.png"
                        alt="독립성 이미지"
                        className="mission-image"
                      />
                      <p>
                      복잡하거나 어려운 정보는 필요 없습니다. 
                      마루바람은 환경 보호를 위한 실천 방법과 정보를 누구나 이해하기 쉽고 간편하게 제공합니다. 
                      클릭 한 번이면 필요한 모든 정보를 확인할 수 있는 직관적인 플랫폼을 지향합니다.
                      </p>
                    </div>

                    <div className="mission-item">
                        <h3>일상화</h3>
                        <img
                            src="/introduce/everyday.png"
                            alt="글로벌 이미지"
                            className="mission-image"
                        />
                        <p>
                        환경 보호는 특별한 일이 아니라 우리의 삶 속에 자연스럽게 녹아들어야 합니다. 
                        마루바람은 환경 보호를 일상에서 실천할 수 있는 작은 변화들로 안내하며, 지속 가능한 삶을 돕는 동반자가 되어 드립니다.
                        </p>
                    </div>

                    <div className="mission-item">
                        <h3>영향력</h3>
                        <img
                            src="/introduce/impact.png"
                            alt="비폭력 이미지"
                            className="mission-image"
                        />
                        <p>
                        작은 변화가 모이면 큰 파도를 일으킬 수 있습니다. 
                        마루바람은 개인의 실천이 사회와 지구에 긍정적인 영향을 미친다는 믿음 아래, 함께 변화를 만들어가는 플랫폼이 되고자 합니다.
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
              <img src="/createby/jongs.jpg" alt="제작 인원 2" />
            </div>
            <p className="card-caption">박종승</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntroduce
