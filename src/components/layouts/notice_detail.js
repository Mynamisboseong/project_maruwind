import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import './notice_detail.css';

function NoticeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notice, setNotice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const auth = getAuth();

    const formatDate = (timestamp) => {
        if (timestamp instanceof Timestamp) {
            return timestamp.toDate().toLocaleString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour12: false
            });
        }
        return 'N/A';
    };

    useEffect(() => {
        // 사용자 인증 상태 감시
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchNoticeData = async () => {
            setLoading(true);
            setError(null);

            try {
                const docRef = doc(db, 'notices', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setNotice({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError('공지사항을 찾을 수 없습니다.');
                    navigate('/notice');
                    return;
                }
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

    const handleEdit = () => {
        navigate(`/notice/edit/${id}`);
    };

    const handleDelete = async () => {
        if (window.confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
            try {
                await deleteDoc(doc(db, 'notices', id));
                navigate('/notice');
            } catch (error) {
                console.error('공지사항 삭제 중 오류 발생:', error);
                alert('공지사항 삭제에 실패했습니다.');
            }
        }
    };

    return (
        <div className="notice-detail">
            <h1 className="notice-title">{notice.title}</h1>
            <div className="notice-info">
                <p>
                    <strong>{notice.author}</strong>
                </p>
                <p>{formatDate(notice.createdAt)}</p>
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

            <div className="notice-actions">
                
            {user && (
        <>
            <button className="notice-detail-edit-button" onClick={handleEdit}>게시글 수정</button>
            <button className="notice-detail-delete-button" onClick={handleDelete}>게시글 삭제</button>
        </>
    )}
            </div>
        </div>
    );
}

export default NoticeDetail;
