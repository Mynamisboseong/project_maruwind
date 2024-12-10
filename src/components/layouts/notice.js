import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import './notice.css';

function Notice() {
    const [notices, setNotices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newNotice, setNewNotice] = useState({
        title: '',
        author: '',
        content: '',
        images: [],
    });
    const [imageFiles, setImageFiles] = useState([]);

    const storage = getStorage(); // Firebase Storage 초기화

    // Firestore에서 공지사항 가져오기
    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'notices'));
                const noticesData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNotices(noticesData);
            } catch (error) {
                console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchNotices();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNotice((prevNotice) => ({
            ...prevNotice,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setImageFiles(Array.from(e.target.files)); // 다중 파일 처리
    };

    const handleAddNotice = async () => {
        if (!newNotice.title || !newNotice.author || !newNotice.content) {
            alert('모든 필드를 입력해주세요!');
            return;
        }

        const newNoticeData = {
            ...newNotice,
            date: new Date().toISOString().split('T')[0],
        };

        try {
            // 선택한 이미지들을 Firebase Storage에 업로드
            const uploadedImageURLs = await Promise.all(
                imageFiles.map(async (file) => {
                    const imageRef = ref(storage, `notices/${Date.now()}_${file.name}`);
                    await uploadBytes(imageRef, file);
                    return getDownloadURL(imageRef); // 업로드된 이미지의 URL 반환
                })
            );

            newNoticeData.images = uploadedImageURLs; // URL 리스트를 데이터에 추가

            // Firestore에 공지사항 저장
            const docRef = await addDoc(collection(db, 'notices'), newNoticeData);
            console.log('Document written with ID: ', docRef.id);

            // 로컬 상태 업데이트
            setNotices((prevNotices) => [
                { id: docRef.id, ...newNoticeData },
                ...prevNotices,
            ]);

            // 초기화
            setIsModalOpen(false);
            setNewNotice({ title: '', author: '', content: '', images: [] });
            setImageFiles([]);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="notice-page">
            <h2 className="notice-title">공지사항</h2>
            <button onClick={() => setIsModalOpen(true)}>글쓰기</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>새 공지사항 작성</h3>
                        <input
                            type="text"
                            name="title"
                            placeholder="제목"
                            value={newNotice.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="author"
                            placeholder="작성자"
                            value={newNotice.author}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="content"
                            placeholder="내용"
                            value={newNotice.content}
                            onChange={handleInputChange}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                        <button onClick={handleAddNotice}>추가</button>
                        <button onClick={() => setIsModalOpen(false)}>취소</button>
                    </div>
                </div>
            )}

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
  {notices.map((notice, index) => (
    <tr key={notice.id}>
      <td>{index + 1}</td>
      <td>
        <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
      </td>
      <td>{notice.author}</td>
      <td>{notice.date}</td>
    </tr>
  ))}
</tbody>
            </table>
        </div>
    );
}

export default Notice;
