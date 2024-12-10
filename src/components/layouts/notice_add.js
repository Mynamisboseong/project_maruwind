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
                createdAt: serverTimestamp(),
            };

            const uploadedImageURLs = await Promise.all(
                imageFiles.map(async (file) => {
                    const imageRef = ref(storage, `notices/${Date.now()}_${file.name}`);
                    await uploadBytes(imageRef, file);
                    return getDownloadURL(imageRef);
                })
            );

            newNoticeData.images = uploadedImageURLs;
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
            <h2 className="notice-page-title">새 공지사항 작성</h2>
            <div className="notice-form-container">
                <div className="notice-input-group">
                    <label htmlFor="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={newNotice.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="notice-input-group">
                    <label htmlFor="author">작성자</label>
                    <input
                        id="author"
                        type="text"
                        name="author"
                        value={newNotice.author}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="notice-input-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        name="content"
                        value={newNotice.content}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="notice-input-group">
                    <label htmlFor="images">이미지 첨부</label>
                    <div className="notice-file-input-wrapper">
                        <input
                            id="images"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                        <span className="notice-file-input-text">파일 선택</span>
                    </div>
                </div>

                <div className="notice-image-preview-container">
                    {previewURLs.map((url, index) => (
                        <div key={index} className="notice-image-preview">
                            <img src={url} alt={`preview-${index}`} />
                            <button onClick={() => handleRemoveImage(index)}>삭제</button>
                        </div>
                    ))}
                </div>
    
                <div className="notice-button-group">
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