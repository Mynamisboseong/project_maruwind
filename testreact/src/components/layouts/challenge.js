import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './challenge.css';
import Row from 'react-bootstrap/esm/Row';

function ChallengeExample() {
    return (
        <Container>
            <div className='background_container'>
                {/* 메인 타이틀 텍스트 */}
                <div className='challenge_title_text'>
                    <span className='challenge_title_hightlight'>SNS 챌린지</span>로 <span className='challenge_title_hightlight'>함께해요!</span>    
                </div>

                {/* 서브 타이틀 텍스트 */}
                <div className='challenge_subtitle_text'>
                    많은 단체와 사람들이 여러가지 환경보호 챌린지를 업로드하고 있습니다
                </div>

                {/* 챌린지 소개 */}
                <div className='challeng_name_title_text'>
                    #줍깅 챌린지
                </div>

                <Row className='challeng_img'>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/zupging01.png" rounded className='challenge_img_size' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/zupging02.png" rounded className='challenge_img_size'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/zupging03.png" rounded className='challenge_img_size'/>
                    </Col>
                </Row>
                
                <div className='challenge_introduce'>
                    <span className='challenge_introduce_hightlight'>‘줍다’와 ‘조깅’을 합친 신조어</span>로 조깅을 하며 쓰레기를 줍는 환경 보호 운동인 <span className='challenge_introduce_hightlight'>플로깅을 의미</span>합니다. <br />
                    쓰레기를 줍기 위해 쪼그려 앉았다 일어났다를 반복하기 때문에 일반적으로 조깅보다 운동 효과가 더욱 크며 환경 보호에도 도움이 되는 일석이조 활동입니다.
                </div>

                <div className='challeng_name_title_text'>
                    #용기내! 챌린지
                </div>

                <Row className='challeng_img'>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/courage01.png" rounded className='challenge_img_size' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/courage02.png" rounded className='challenge_img_size'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/courage03.png" rounded className='challenge_img_size'/>
                    </Col>
                </Row>

                <div className='challenge_introduce'>
                    <span className='challenge_introduce_hightlight'>음식 포장으로 발생하는 불필요한 쓰레기를 줄이자는 취지</span>에서 시작되었으며, <span className='challenge_introduce_hightlight'>'용기(courage)를 내서 용기(container) 내(in)'에 식재료나 음식을 포장해 오는 운동</span>입니다. <br />
                    일상생활에서 음식 포장 시 비닐이나 플라스틱 대신 천 주머니나 다회용기 등에 음식, 식재료를 담아 온 사례를 SNS에 #용기내 챌린지 또는 #용기내 캠페인 등의 해시태그를 붙여 공유하는 챌린지 입니다. <br/>
                    이 챌린지는 배우 류준열씨와 그린피스가 지난해 4월  함께 시작해 많은 주목을 받기도 했습니다.
                </div>

                <div className='challeng_name_title_text'>
                    #업사이클링 챌린지
                </div>

                <Row className='challeng_img'>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/upcycling01.png" rounded className='challenge_img_size' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/upcycling02.png" rounded className='challenge_img_size'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="/challenge/upcycling03.png" rounded className='challenge_img_size'/>
                    </Col>
                </Row>

                <div className='challenge_introduce'>
                    <span className='challenge_introduce_hightlight'>재활용품에 디자인 등을 입히는 방법으로, 가치를 높인 제품으로 재탄생 시키는 챌린지</span>입니다. <br />
                    버려지는 제품을 단순히 재활용하는 데에서 그치는 것이 아닌, 매력적인 제품으로 탈바꿈 시키는 것입니다. 인테리어로도 많이 활용되고 있어 사람들의 이목을 끌고 있습니다
                </div>
                {/* 하단 섹션 */}
                <div className='challenge_bottom_section' style={{ position: 'relative' }}>
                    <Col xs={6} md={3}>
                        <Image src="/challenge/challenge_section_bottom.png" rounded className='challenge_bottom'/>
                        <div className='button-overlay'>
                            <Button className="campaign-button" size="lg">
                                SNS 챌린지 보러가기
                            </Button>
                        </div>
                    </Col>
                </div>
            </div>
        </Container>
    );
}

export default ChallengeExample;
