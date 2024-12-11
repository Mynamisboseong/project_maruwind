import React, { useState, useEffect } from 'react';
import { collection, getDocs, Timestamp, query, orderBy } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import './notice.css';

function Notice() {
    const [notices, setNotices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        // 사용자 인증 상태 감시
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'notices'));
                const noticesData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data().createdAt
                }));
                // createdAt 기준으로 내림차순 정렬
                const sortedNotices = noticesData.sort((a, b) => b.createdAt - a.createdAt);
                setNotices(sortedNotices);
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
            <div className="notice-search-bar-container">
                <div className="notice-search-wrapper">
                    <span className="notice-search-icon">검색🔍</span>
                    <input
                        type="text"
                        className="notice-search-input"
                        placeholder="제목 또는 작성자 검색"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {user && ( // 관리자 로그인 시에만 글쓰기 버튼 표시
                    <div className="notice-add-button right-align">
                        <button onClick={handleAddNotice}>글 작성하기</button>
                    </div>
                )}
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
    {filteredNotices
        .sort((a, b) => b.createdAt - a.createdAt) // 내림차순 정렬 (최신순)
        .map((notice, index) => (
            <tr 
                key={notice.id} 
                onClick={() => handleRowClick(notice.id)} 
                className="notice-clickable-row"
            >
                <td>{filteredNotices.length - index}</td>
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
