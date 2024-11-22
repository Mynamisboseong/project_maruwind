import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
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
                    요즘 SNS에서는 많은 이들이 다양한 챌린지에 참여한 모습을 볼 수 있습니다. <br/>
                    단순 재미를 위한 댄스, 노래부터 환경을 위한 착한 움직임까지 이어지고 있어요. <br/>
                    일상에서 누구나 참여할 수 있는 친환경 챌린지에 동참해보는건 어떨까요?
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
          

            <div className='challengePage_main_component'>
                    <Image className="challengePage_main_image" src="/challengePage/plogging.png" />
                    <div className='challengePage_main_text'>
                        <div className='challengePage_main_title'>
                            건강과 지구를 생각해! 줍깅 챌린지
                        </div>
                        <div className='challengePage_main_subtext'>
                            플로깅(plogging)이라고도 불리는 줍깅 챌린지는 조깅을 하면서 쓰레기를 줍는 것을 말합니다. 
                            2016년 스웨덴에서 처음 시작된 이 챌린지는 SNS를 통해 퍼져나가 국내에서도 큰 관심을 끌었습니다.
                            준비물은 쓰레기봉투 하나면 끝! 부담 없이 달리며 길거리에 버려진 쓰레기를 주우면 되니 누구나 할 수 있는 친환경 활동입니다.
                            혼자 하기 심심할 땐 여럿이 함께하면 즐거움이 더 커져요! 가끔 힘차게 달리고 싶을 때, 지구의 건강도 함께 지켜주면 뿌듯함은 배가 될 것입니다.
                        </div>
                        <div className='challengepage_main_button_overay'>
                            <Button
                                className="news_button"
                                size="lg"
                                onClick={() =>
                                    (window.location.href = 'https://www.instagram.com/explore/search/keyword/?q=%23%EC%A4%8D%EA%B9%85')
                                }
                            >
                                줍깅챌린지 보러가기
                            </Button>
                        </div>
                    </div>
            </div>
          
            <div className='challengePage_main_component'>
                    <Image className="challengePage_main_image" src="/challengePage/courage_challengePage.png" />
                    <div className='challengePage_main_text'>
                        <div className='challengePage_main_title'>
                            지구를 지킬 용기! 용기내 챌린지
                        </div>
                        <div className='challengePage_main_subtext'>
                          용기내 챌린지는 중의적 의미를 가집니다.
                          첫 번째, 포장 용기를 직접 챙겨가서 가게에 포장을 요청하는 것과
                          두 번째, 포장 용기를 가져가서 포장해 달라고 말하는 순간에 부끄러워하지 말고 용기(courage)를 내라는 것.
                          간단히 말하면 다회용기를 챙겨서 음식을 포장해 오라는 것입니다.
                          이 챌린지는 유명인들이 참여해서 더욱 화제가 됐고, 그 이후에 다회용기에 포장하는 문화가 늘고 있습니다.
                          배달이나 포장을 하면 나오는 수많은 플라스틱. 배달 용기에 음식물이 묻으면 처리하기도 골치 아프고, 분리배출하기도 번거롭지않나요?
                          용기 내서 용기를 내봅시다!
                        </div>
                        <div className='challengepage_main_button_overay'>
                            <Button
                                className="news_button"
                                size="lg"
                                onClick={() =>
                                    (window.location.href = 'https://www.instagram.com/explore/search/keyword/?q=%23%EC%9A%A9%EA%B8%B0%EB%82%B4%EC%B1%8C%EB%A6%B0%EC%A7%80')
                                }
                            >
                                용기내챌린지 보러가기
                            </Button>
                        </div>
                    </div>
            </div>
          
            <div className='challengePage_main_component'>
                    <Image className="challengePage_main_image" src="/challengePage/upcycling_challengePage.png" />
                    <div className='challengePage_main_text'>
                        <div className='challengePage_main_title'>
                            쓰레기를 예술로! 업사이클링 챌린지
                        </div>
                        <div className='challengePage_main_subtext'>
                          업사이클링 챌린지는 폐자원이나 버려진 물건을 재활용하여 새로운 가치를 창출하는 환경 보호 활동입니다.
                          창의적인 아이디어로 쓸모없어진 물건을 예술 작품이나 실용적인 제품으로 변신시키며, 자원 낭비를 줄이고 환경 보호에 기여할 수 있습니다.
                          예를 들어, 헌 옷을 가방으로 만들거나 유리병을 화분으로 재활용하는 등의 활동이 있습니다. 지속 가능성을 실천하며 환경과 생활의 변화를 동시에 경험할 수 있는 친환경적인 움직임입니다.
                        </div>
                        <div className='challengepage_main_button_overay'>
                            <Button
                                className="news_button"
                                size="lg"
                                onClick={() =>
                                    (window.location.href = 'https://www.instagram.com/explore/search/keyword/?q=%23upcycling')
                                }
                            >
                                업사이클링챌린지 보러가기
                            </Button>
                        </div>
                    </div>
          </div>
          
          <div className='challengePage_main_component'>
                    <Image className="challengePage_main_image" src="/challengePage/relay.png" />
                    <div className='challengePage_main_text'>
                        <div className='challengePage_main_title'>
                            기업도, 지자체도 함께! <br />
                            생태교통 출퇴근 릴레이 챌린지
                        </div>
                        <div className='challengePage_main_subtext'>
                      생태교통 출퇴근 릴레이 챌린지는 친환경 교통수단 이용을 장려하는 캠페인입니다.
                      참여자는 자전거, 대중교통, 도보 등을 이용해 출퇴근하며 탄소 배출을 줄입니다.
                      출퇴근 기록을 인증하고, 이를 릴레이 형식으로 다른 사람들에게 독려하는 방식으로 진행됩니다.
                      지속가능한 교통문화를 확산시키는 것을 목표로 하는 릴레이 챌린지! 참여해보시는 건 어떨까요?
                        </div>
                        <div className='challengepage_main_button_overay'>
                            <Button
                                className="news_button"
                                size="lg"
                                onClick={() =>
                                    (window.location.href = 'https://www.instagram.com/explore/search/keyword/?q=%23%EC%83%9D%ED%83%9C%EA%B5%90%ED%86%B5%EC%B6%9C%ED%87%B4%EA%B7%BC%EC%B1%8C%EB%A6%B0%EC%A7%80')
                                }
                            >
                                출퇴근릴레이챌린지 보러가기
                            </Button>
                        </div>
                    </div>
          </div>
          
          <div className='challengePage_main_component'>
                    <Image className="challengePage_main_image" src="/challengePage/imok.png" />
                    <div className='challengePage_main_text'>
                        <div className='challengePage_main_title'>
                            지구를 위한 거절, "괜찮아요!"
                        </div>
                        <div className='challengePage_main_subtext'>
                      괜찮아요 챌린지는 일상 속에서 환경을 생각하는 작은 실천을 독려하는 캠페인입니다.
                      참여자는 재활용, 자원 절약, 환경보호 활동 등을 실천하고 이를 인증합니다.
                      인증된 활동은 다른 참여자들과 공유되어 긍정적인 변화를 확산시키는 데 기여합니다.
                      누구나 쉽고 재미있게 참여할 수 있는 챌린지입니다.
                        </div>
                        <div className='challengepage_main_button_overay'>
                            <Button
                                className="news_button"
                                size="lg"
                                onClick={() =>
                                    (window.location.href = 'https://www.instagram.com/explore/search/keyword/?q=%23%EA%B4%9C%EC%B0%AE%EC%95%84%EC%9A%94%EC%B1%8C%EB%A6%B0%EC%A7%80')
                                }
                            >
                                괜찮아요챌린지 보러가기
                            </Button>
                        </div>
                    </div>
          </div>
          
          <div className='challengePage_main_component'>
                    <Image className="challengePage_main_image" src="/challengePage/byeplastic.png" />
                    <div className='challengePage_main_text'>
                        <div className='challengePage_main_title'>
                      플라스틱 잘가! <br />
                      바이바이플라스틱 챌린지
                        </div>
                        <div className='challengePage_main_subtext'>
                      바이바이 플라스틱 챌린지는 플라스틱 사용 줄이기를 목표로 하는 환경 캠페인입니다.
                      ‘안녕(Bye)’이라는 의미로 양손을 흔드는 동작과 함께 플라스틱 사용 줄이기를 실천하겠다는 다짐을 인증하고 다음 참여자 지목과 #환경부, #바이바이플라스틱, #BBP 해시태그를 함께 SNS에 게시하면 참여 완료!
                        </div>
                        <div className='challengepage_main_button_overay'>
                            <Button
                                className="news_button"
                                size="lg"
                                onClick={() =>
                                    (window.location.href = 'https://www.instagram.com/explore/search/keyword/?q=%23%EB%B0%94%EC%9D%B4%EB%B0%94%EC%9D%B4%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8B%B1')
                                }
                            >
                                바이바이플라스틱챌린지 보러가기
                            </Button>
                        </div>
                    </div>
            </div>
    </>
  )
}

export default ChallengePageExample;