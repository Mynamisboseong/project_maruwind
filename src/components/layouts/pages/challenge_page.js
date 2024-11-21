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