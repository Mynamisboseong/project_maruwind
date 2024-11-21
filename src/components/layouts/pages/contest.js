import React, { useState } from "react";
import "./contest.css";

const contestData = [
  {
    id: 1,
    title: "백주년 기념 봉사사업 아이디어 공모전",
    category: "SPECIAL, IDEA",
    organizer: "한국로타리",
    status: "D-27",
    views: 5495,
  },
  {
    id: 2,
    title: "해양산업 ESG 경영대상 공모전",
    category: "아이디어/공모",
    organizer: "한국해양진흥공사",
    status: "D-14",
    views: 10791,
  },
  {
    id: 3,
    title: "충남 제3회 전국대학영화제",
    category: "신규",
    organizer: "한국영화인증연합회",
    status: "D-9",
    views: 205,
  },
];

function Contest() {
  const [filter, setFilter] = useState("전체");

  // 필터링된 공모전 데이터
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
        <img src="/contest/contest1.jpg" alt="공모전 이미지 1" />
        <img src="/contest/contest2.jpg" alt="공모전 이미지 2" />
        <img src="/contest/contest3.jpg" alt="공모전 이미지 3" />
      </div>

      {/* 필터 버튼 */}
      <div className="contest-filters">
        {["전체", "SPECIAL", "신규"].map((category) => (
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
        <tr key={contest.id}>
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
