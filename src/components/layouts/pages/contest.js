import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase'; // Firebase 초기화 경로
import './contest.css';

function Contest() {
  const [contests, setContests] = useState([]); // Firestore 데이터 저장
  const [filter, setFilter] = useState('전체'); // 필터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [searchQuery, setSearchQuery] = useState(''); // 검색 상태

  // Firestore에서 데이터 가져오기
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contests'), (snapshot) => {
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
  const filteredContests = contests.filter((contest) => {
    const matchesFilter =
      filter === '전체'
        ? true
        : filter === '진행중'
        ? contest.status && contest.status.startsWith('D-')
        : filter === '마감'
        ? contest.status === '마감'
        : false;

    const matchesSearch =
      contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contest.organizer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

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
            contest.images &&
            contest.images[0] && (
              <Link to={`/contest/${contest.id}`} key={contest.id}>
                <img
                  src={`/contest/${contest.images[0]}`}
                  alt={contest.title}
                />
              </Link>
            )
        )}
      </div>

      {/* 필터 버튼 */}
      <div className="contest-filters">
        {['전체', '진행중', '마감'].map((category) => (
          <button
            key={category}
            className={`filter-button ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 검색 및 글 작성하기 버튼 섹션 */}
      <div className="search-bar-container">
        <label className="search-label">
          검색🔍
          <input
            type="text"
            className="search-input"
            placeholder="제목 또는 주최측 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <div className="add-contest-button right-align">
          <Link to="/contest/add">
            <button>글 작성하기</button>
          </Link>
        </div>
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
            {filteredContests.map((contest) => {
              const isClosed = contest.status === '마감'; // 상태가 마감인지 확인
              const isInProgress = contest.status.startsWith('D-'); // 상태가 진행중인지 확인
              const isUrgent =
                isInProgress && parseInt(contest.status.split('-')[1], 10) <= 7; // 마감임박인지 확인

              return (
                <tr
                  key={contest.id}
                  className="contest-row"
                  onClick={() => (window.location.href = `/contest/${contest.id}`)}
                >
                  <td>{contest.title}</td>
                  <td>{contest.organizer}</td>
                  <td
                    className={`status-cell ${isClosed ? 'closed' : ''} ${
                      isUrgent ? 'urgent' : ''
                    }`}
                  >
                    {contest.status}
                    {isUrgent && <span className="urgent-text"> 마감임박</span>}
                    {isInProgress && !isUrgent && (
                      <span className="in-progress-text"> 진행중</span>
                    )}
                  </td>
                  <td>{contest.views}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contest;
