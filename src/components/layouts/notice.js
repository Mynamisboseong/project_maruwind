// components/layouts/Notice.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './notice.css';

const notices = [
    {
      id: 1,
      title: '[마루바람] 마루바람 공지사항입니다.',
      author: '마루바람',
      date: '2024-11-11',
      content: '마루바람 공지사항에 대한 자세한 내용입니다.',
      images: ['/global.png'],
    },
    
  ];
  

function Notice() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;

  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice);

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="notice-page">
      <h2 className="notice-title">공지사항 <span>{filteredNotices.length}</span></h2>
      <div className="notice-search">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>🔍</button>
      </div>
      <table className="notice-table">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성시간</th>
          </tr>
        </thead>
        <tbody>
          {currentNotices.map((notice, index) => (
            <tr key={notice.id}>
              <td>{indexOfFirstNotice + index + 1}</td>
              <td>
                <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
              </td>
              <td>{notice.author}</td>
              <td>{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="notice-pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Notice;
