import Button from 'react-bootstrap/Button';
import './challenge_page.css'

function ChallengePageExample() {
  return (
    <>
          <div className="challengepage_banner">
              <div className='challengePage_banner_smalltitle'>
                  놀이가 된
              </div>
              <div className='challengepage_banner_title'>
                  친환경 챌린지에 참여해보세요!
              </div>
              <div className='challengepage_subtitle'>
                    요즘 SNS에서는 많은 이들이 다양한 챌린지에 참여한 모습을 볼 수 있다. <br/>
                    단순 재미를 위한 댄스, 노래부터 환경을 위한 착한 움직임까지 이어지고 있다. <br/>
                    일상에서 누구나 참여할 수 있는 친환경 챌린지에 동참해보자.
              </div>
                <div className='challengepage_button_overay'>
                    <Button
                        className="news_button"
                        size="lg"
                        onClick={() =>
                            (window.location.href = 'https://www.instagram.com/')
                        }
                    >
                        인스타그램 바로가기
                    </Button>
                </div>
        </div>
    </>
  )
}

export default ChallengePageExample;