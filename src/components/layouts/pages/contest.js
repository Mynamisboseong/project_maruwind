import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./contest.css";

const contestData = [
  {
    id: 1,
    title: "2024 탄소중립 쇼츠 공모전",
    category: "진행중",
    organizer: "경상남도 탄소중립지원센터",
    images: ["contest_detail1.png"],
    status: "D-12",
    views: 545,
  },
  {
    id: 2,
    title: "제 4회 숏츠멘터리 공모전 [플라스틱의 환경역습 보고서]",
    category: "진행중",
    organizer: "(사)지속가능월드네트워크",
    images: ["contest4.jpg"],
    status: "D-3",
    views: 191,
  },
  {
    id: 3,
    title: "환경미화 이미지 개선 공모전",
    category: "진행중",
    organizer: "에이팩시티 지식산업센터",
    images: ["contest5.jpg"],
    status: "D-3",
    views: 205,
  },
  {
    id: 4,
    title: "친환경 자원순환센터 슬로건 공모전",
    category: "마감",
    organizer: "인천광역시 자원순환과",
    status: "마감",
    views: 154,
  },
  {
    id: 5,
    title: "2024 기후-환경 숏폼 영상 공모전",
    category: "마감",
    organizer: "ECO FUTURE",
    status: "마감",
    views: 205,
  },
];

function Contest() {
  const [filter, setFilter] = useState("전체");

  const filteredContests = contestData.filter((contest) =>
    filter === "전체" ? true : contest.category.includes(filter)
  );

  return (
    <div className="contest-page">
      {/* 제목 섹션 */}
      <header className="contest-header">
        <h1>공모전 & 대외활동</h1>
        <hr />
      </header>

      {/* 이미지 섹션 */}
<div className="contest-images">
  {contestData.slice(0, 3).map((contest) => (
    contest.images && contest.images[0] ? ( 
      <Link to={`/contest/${contest.id}`} key={contest.id}>
        <img src={`/contest/${contest.images[0]}`} alt={contest.title} />
      </Link>
    ) : null
  ))}
</div>



      {/* 필터 버튼 */}
      <div className="contest-filters">
        {["전체", "진행중", "마감"].map((category) => (
          <button
            key={category}
            className={`filter-button ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 공모전 리스트 */}
      <div className="contest-list">
        <table className="contest-table">
          <thead>
            <tr>
              <th>제목</th>
              <th>주최</th>
              <th>상태</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
  {filteredContests.map((contest) => (
    <tr
      key={contest.id}
      className="contest-row"
      onClick={() => window.location.href = `/contest/${contest.id}`}
    >
      <td>{contest.title}</td>
      <td>{contest.organizer}</td>
      <td>{contest.status}</td>
      <td>{contest.views}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}

export default Contest;
