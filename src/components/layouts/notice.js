import React, { useState, useEffect } from 'react';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import './notice.css';

function Notice() {
    const [notices, setNotices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'notices'));
                const noticesData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data().createdAt // 명시적으로 createdAt 필드를 포함
                }));
                setNotices(noticesData);
            } catch (error) {
                console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchNotices();
    }, []);

    const handleAddNotice = () => {
        navigate('/notice_add');
    };

    const handleRowClick = (noticeId) => {
        navigate(`/notice/${noticeId}`);
    };

    const filteredNotices = notices.filter((notice) =>
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="notice-page">
            <h2 className="notice-title">공지사항</h2>
            <div className="search-bar-container">
                <label className="search-label">
                    검색🔍
                    <input
                        type="text"
                        className="search-input"
                        placeholder="제목 또는 작성자 검색"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </label>
                <div className="add-contest-button right-align">
                    <button onClick={handleAddNotice}>글 작성하기</button>
                </div>
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
                    {filteredNotices.map((notice, index) => (
                        <tr key={notice.id} onClick={() => handleRowClick(notice.id)} className="clickable-row">
                            <td>{index + 1}</td>
                            <td>{notice.title}</td>
                            <td>{notice.author}</td>
                            <td>
    {notice.createdAt instanceof Timestamp 
        ? notice.createdAt.toDate().toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false
          })
        : 'N/A'}
</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Notice;