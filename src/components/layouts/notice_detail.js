import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Firebase 초기화 파일 경로
import './notice_detail.css';

function NoticeDetail() {
    const { id } = useParams(); // URL에서 공지사항 ID 가져오기
    const navigate = useNavigate();
    const [notice, setNotice] = useState(null);
    const [previousNotice, setPreviousNotice] = useState(null);
    const [nextNotice, setNextNotice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticeData = async () => {
            setLoading(true);
            setError(null);

            try {
                // 현재 공지사항 가져오기
                const docRef = doc(db, 'notices', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setNotice({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError('공지사항을 찾을 수 없습니다.');
                    navigate('/notices'); // 공지사항 목록으로 리다이렉트
                    return;
                }

                // 이전 및 다음 공지사항 가져오기
                const q = query(collection(db, 'notices'), orderBy('date', 'desc'));
                const querySnapshot = await getDocs(q);
                const notices = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                const currentIndex = notices.findIndex((n) => n.id === id);
                setPreviousNotice(notices[currentIndex + 1] || null);
                setNextNotice(notices[currentIndex - 1] || null);
            } catch (error) {
                console.error('공지사항 데이터를 가져오는 중 오류가 발생했습니다:', error);
                setError('공지사항 데이터를 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchNoticeData();
    }, [id, navigate]);

    if (loading) {
        return <div>공지사항을 불러오는 중입니다...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="notice-detail">
            <h1 className="notice-title">{notice.title}</h1>
            <div className="notice-info">
                <p>
                    <strong>{notice.author}</strong>
                </p>
                <p>{notice.date}</p>
            </div>
            <div className="notice-content">
                <p>{notice.content}</p>
                {notice.images && notice.images.length > 0 && (
                    <div className="notice-images">
                        {notice.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Notice image ${index + 1}`}
                                className="notice-image"
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="notice-navigation">
                {previousNotice && (
                    <button
                        className="previous-button"
                        onClick={() => navigate(`/notice/${previousNotice.id}`)}
                    >
                        ← 이전 공지사항
                    </button>
                )}
                {nextNotice && (
                    <button
                        className="next-button"
                        onClick={() => navigate(`/notice/${nextNotice.id}`)}
                    >
                        다음 공지사항 →
                    </button>
                )}
            </div>
            <Link to="/notices" className="back-button">목록으로 돌아가기</Link>
        </div>
    );
}

export default NoticeDetail;
