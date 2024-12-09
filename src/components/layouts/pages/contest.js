import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase"; // Firebase 초기화 경로
import "./contest.css";

function Contest() {
  const [contests, setContests] = useState([]); // Firestore 데이터 저장
  const [filter, setFilter] = useState("전체"); // 필터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  // Firestore에서 데이터 가져오기
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "contests"), (snapshot) => {
      const fetchedContests = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContests(fetchedContests);
      setLoading(false); // 로딩 완료
    });

    return () => unsubscribe(); // 컴포넌트가 언마운트되면 구독 해제
  }, []);

  // 필터링된 데이터
  const filteredContests = contests.filter((contest) =>
    filter === "전체" ? true : contest.category.includes(filter)
  );

  // 로딩 중 표시
  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <div className="contest-page">
      {/* 제목 섹션 */}
      <header className="contest-header">
        <h1>공모전 & 대외활동</h1>
        <hr />
      </header>

      {/* 이미지 섹션 */}
      <div className="contest-images">
        {contests.slice(0, 3).map(
          (contest) =>
            contest.images && contest.images[0] && (
              <Link to={`/contest/${contest.id}`} key={contest.id}>
                <img src={`/contest/${contest.images[0]}`} alt={contest.title} />
              </Link>
            )
        )}
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
                onClick={() => (window.location.href = `/contest/${contest.id}`)}
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
