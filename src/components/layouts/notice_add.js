import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import './notice_add.css';

function NoticeAdd() {
    const [newNotice, setNewNotice] = useState({
        title: '',
        author: '',
        content: '',
        images: [],
    });
    const [imageFiles, setImageFiles] = useState([]);
    const [previewURLs, setPreviewURLs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const storage = getStorage();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNotice((prevNotice) => ({
            ...prevNotice,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // 파일 미리보기 URL 생성
        const newPreviewURLs = files.map((file) => URL.createObjectURL(file));
        setPreviewURLs((prevURLs) => [...prevURLs, ...newPreviewURLs]);

        setImageFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const handleRemoveImage = (index) => {
        setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        setPreviewURLs((prevURLs) => prevURLs.filter((_, i) => i !== index));
    };

    const handleAddNotice = async () => {
        if (!newNotice.title || !newNotice.author || !newNotice.content) {
            alert('모든 필드를 입력해주세요!');
            return;
        }

        setIsLoading(true);

        try {
            const newNoticeData = {
                ...newNotice,
                createdAt: serverTimestamp(), // 서버 타임스탬프 추가
            };

            // 이미지 업로드
            const uploadedImageURLs = await Promise.all(
                imageFiles.map(async (file) => {
                    const imageRef = ref(storage, `notices/${Date.now()}_${file.name}`);
                    await uploadBytes(imageRef, file);
                    return getDownloadURL(imageRef);
                })
            );

            newNoticeData.images = uploadedImageURLs;

            // Firestore 저장
            await addDoc(collection(db, 'notices'), newNoticeData);

            navigate('/notice');
        } catch (error) {
            console.error('공지사항 추가 중 오류 발생:', error);
            alert('공지사항 추가 중 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="notice-add-page">
            <h2>새 공지사항 작성</h2>
            <div className="form-container">
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

                {/* 이미지 미리보기 */}
                <div className="image-preview-container">
                    {previewURLs.map((url, index) => (
                        <div key={index} className="image-preview">
                            <img src={url} alt={`preview-${index}`} />
                            <button onClick={() => handleRemoveImage(index)}>삭제</button>
                        </div>
                    ))}
                </div>

                <div className="button-group">
                    <button onClick={handleAddNotice} disabled={isLoading}>
                        {isLoading ? '추가 중...' : '추가'}
                    </button>
                    <button onClick={() => navigate('/notice')}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeAdd;