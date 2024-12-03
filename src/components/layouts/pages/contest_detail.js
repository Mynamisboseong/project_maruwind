import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./contest_detail.css";

const contestData = [
  {
    id: 1,
    title: "2024 탄소중립 쇼츠 공모전",
    organizer: "경상남도 탄소중립지원센터",
    status: "진행 중",
    images: ["contest_detail1.png"],
    content: `■ 응모주제
    경상남도 탄소중립 생활 실천 또는 정책, 슬기로운 탄소생활(어플)에 관한 순수 창작 영상
    ※ 슬기로운 탄소생활(어플) 내용은 첨부파일 확인 바랍니다.

    ■ 응모자격
    도내 대학생 및 대학원생(개인 또는 팀(팀당 최대 5명))
    
    ■ 접수방법
    본인 유튜브 업로드 후 메일로 제출(ha0817@gnen.or.kr)

    ■ 접수기간
    2024. 11. 25.(월) ~ 12. 15.(일)

    ■ 문의처
    경상남도 탄소중립지원센터(055-344-4250)`,
  },
  {
    id: 2,
    title: "제 4회 숏츠멘터리 공모전 [플라스틱의 환경역습 보고서]",
    organizer: "(사)지속가능월드네트워크",
    status: "D-3",
    images: ["contest4.jpg"],
    content: `■ 공모주제     
    [편리함을 상징했던 플라스틱은 어떻게 환경을 무너뜨렸나]  

    ■ 행사내용 
    - 공모 기간: 11월18일~ 12월6일까지    
    - 내용: 플라스틱의 환경 역습에 대해 사회적 이슈 끌어내기           
    1) 플라스틱이 가져온 생태계의 변화           
    2) 전세계 플라스틱프리 정책과 대안 소개           
    3) 플라스틱을 줄일 수 있는 우리사회의 변화 제안    

    ■ 제출형식  
    mp4, wmv, avi, mov 등 영상파일 (가로촬영)      
    - 해상도 1920X1080(FHD화질) 이상      
    - 분량 : 30초~ 2분이내의 영상      
    - 장르 : 숏츠+다큐멘터리 형태의 셀프 카메라 

    ■ 제출방법      
    제4회 숏츠멘터리 영상제 <플라스틱의 환경역습 보고서>      
    지월네 구글폼에 제출      
    https://forms.gle/jhLzjye2SQ5JFSAc6

    ■ 시상내용        
    1) 대상 1명 150만원 상금         
    2) 최우수상 1명 50만원 상금         
    3) 우수상 2명 각 30만원 

    ■ 시상자 발표: 2024년 12월 13일 (금) 
    지월네 홈페이지, SNS채널 통해 확인  

    ■ 시상식 및 장소: 추후 공지 
    
    ■ 유의사항:         
    1)응모작품은 다른 대회에서 입상하거나 공식발표한 사실이 없는 미발표 순수창작품이어야 하며 표절이나 모방, 중복 응모한 사실이 확인될 경우 입상을 취소합니다.
    2)초상권과 음악저작권은 반드시 확인후 사용하시기 바랍니다.         
    3)영상은 팀(본인)이 촬영한 콘텐츠만 사용해주세요         
    4)공모전에 출품된 작품들은 기후환경캠페인 및 교육자료등에 활용하고 국민들이 손쉽게 공모작품을 만나볼 수 있도록 주관사의 SNS계정에 게시됩니다. 이에 동의하지 않으시면          공모전 출품이 제한되니 참고하여 주세요. 
    
    ■ 문의처: sdgsworld@gmail.com /@swntv_official 인스타 DM`,
  },
  {
    id: 3,
    title: "환경미화 이미지 개선 공모전",
    organizer: "에이팩시티 지식산업센터",
    status: "진행 중",
    images: ["contest5.jpg"],
    content: `■ 참가 자격
  - 고등학생 이상, 경기도 화성 인근이면 누구나

  ■ 공모 분야
  - 포스터 또는 시안

  ■ 공모 주제
  - 재활용 분리수거장 가리막 이미지 개선
  
  ■ 공모 일정
  - 접수기간 : 2024. 11.26 ~ 2024. 12. 06

  ■ 제출 형식
  - apexcity823@naver.com

  ■ 접수 방법
  - apexcity823@naver.com

  ■ 문의 사항
  - apexcity823@naver.com`,
  },
  {
    id: 4,
    title: "친환경 자원순환센터 슬로건 공모전",
    organizer: "인천광역시 자원순환과",
    status: "마감",
    images: ["contest3.jpg"],
    content: `■ 공모기간: 2024. 11. 5.(화) ~ 12. 1.(일) 24:00 (27일 간)

    ■ 공모주제 : “내 삶에 도움이 되는 자원순환센터”
    ※ 자원순환센터의 중요성을 알리고, 지속가능한 미래 비전을 제시하는 내용

    ■ 응모자격: 자원순환센터 정책에 관심있는 누구나

    ■ 심사 및 결과발표
    - 심사방법: 심사기준을 고려하여 심사위원회를 거쳐 선정
    - 심사기준: 창의성, 주제 적합성, 전달력
    - 결과발표: 2024. 12. 5.(목), 인천광역시 홈페이지 게시
    - 시 상 식: 2024. 12. 13.(금) 17:00, 인천광역시청 대회의실(본관 2층)

    ■ 시상내역
    - 대상(1) : 30만원 상당 인천이음카드 포인트
    - 최우수상(1) : 10만원 인천이음카드 포인트
    - 우수상(4) : 5만원 인천이음카드 포인트

    ■ 문의 : 인천광역시 자원순환과(032-440-3584)`,
  },
  {
    id: 5,
    title: "2024 기후-환경 숏폼 영상 공모전",
    organizer: "ECO FUTURE",
    status: "마감",
    images: ["contest2.jpg"],
    content: `■ 참가 자격
    3~4인 1조로 이루어진 만18세 이상의 서울 소재 대학생 및 대학원생(재학생, 휴학생 무관)

    ■ 접수 기간
    11월 11일부터 11월 29일까지
    - 수상발표: 12월 중 예정(개별통보)

    ■ 주제
    1. 환경 보호 활동을 독려하는 영상
    2. 자연의 아름다움을 홍보하는 영상
    3. 기후변화의 심각성을 알리는 영상

    ■ 시상
    내역대상(1명): 200만원최우수상(10명): 100만원우수상(30명): 상품권*1-3등 수상자는 ‘환경사랑’ 상장 수여

    ■ 지원 방법https://forms.gle/2WSywVfnYXLGBuDk6

    ■ 문의mail. ecofu1ure@gmail.com`,
  },
];

const ContestDetail = () => {
  const { id } = useParams();
  const contestId = parseInt(id, 10);
  const contestIndex = contestData.findIndex((contest) => contest.id === contestId);
  const navigate = useNavigate();

  if (contestIndex === -1) {
    return <div>공모전을 찾을 수 없습니다.</div>;
  }

  const contest = contestData[contestIndex];
  const previousContest = contestData[contestIndex - 1];
  const nextContest = contestData[contestIndex + 1];

  const specialContests = [1, 2];
  const isSpecialContest = specialContests.includes(contestId);

  return (
    <div
      className={`contest-detail ${isSpecialContest ? "special-contest" : ""}`}
    >
      <h1 className="contest-title">{contest.title}</h1>
      <div className="contest-info">
        <p>
          <strong>주최:</strong> {contest.organizer}
        </p>
        <p>
          <strong>상태:</strong> {contest.status}
        </p>
      </div>
      <div className="contest-content">
        <p>{contest.content}</p>
        {contest.images && contest.images.length > 0 && (
          <div className="contest-detail-images">
            {contest.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Contest image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="contest-navigation">
        {previousContest && (
          <button className="previous-button"
          onClick={() => navigate(`/contest/${previousContest.id}`)}>
            ← 이전 공모전
          </button>
        )}
        {nextContest && (
          <button className="next-button"
          onClick={() => navigate(`/contest/${nextContest.id}`)}>
            다음 공모전 →
          </button>
        )}
      </div>
    </div>
  );
};

export default ContestDetail;