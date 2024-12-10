import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase';
import './notice_edit.css';

function NoticeEdit() {
    const { id } = useParams();
    const [notice, setNotice] = useState({
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

    useEffect(() => {
        const fetchNotice = async () => {
            const docRef = doc(db, 'notices', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNotice({ id: docSnap.id, ...docSnap.data() });
                setPreviewURLs(docSnap.data().images || []);
            } else {
                console.log('No such document!');
                navigate('/notice');
            }
        };
        fetchNotice();
    }, [id, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNotice((prevNotice) => ({
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

    const handleRemoveImage = async (index) => {
        if (index < notice.images.length) {
            // 기존 이미지 삭제
            const imageUrl = notice.images[index];
            const imageRef = ref(storage, imageUrl);
            try {
                await deleteObject(imageRef);
            } catch (error) {
                console.error('Error deleting image:', error);
            }
            setNotice((prevNotice) => ({
                ...prevNotice,
                images: prevNotice.images.filter((_, i) => i !== index),
            }));
        } else {
            // 새로 추가된 이미지 삭제
            const adjustedIndex = index - notice.images.length;
            setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== adjustedIndex));
        }
        setPreviewURLs((prevURLs) => prevURLs.filter((_, i) => i !== index));
    };

    const handleUpdateNotice = async () => {
        if (!notice.title || !notice.author || !notice.content) {
            alert('모든 필드를 입력해주세요!');
            return;
        }

        setIsLoading(true);

        try {
            const updatedNoticeData = { ...notice };

            // 새 이미지 업로드
            const uploadedImageURLs = await Promise.all(
                imageFiles.map(async (file) => {
                    const imageRef = ref(storage, `notices/${Date.now()}_${file.name}`);
                    await uploadBytes(imageRef, file);
                    return getDownloadURL(imageRef);
                })
            );

            updatedNoticeData.images = [...notice.images, ...uploadedImageURLs];

            // Firestore 업데이트
            const noticeRef = doc(db, 'notices', id);
            await updateDoc(noticeRef, updatedNoticeData);

            navigate(`/notice/${id}`);
        } catch (error) {
            console.error('공지사항 수정 중 오류 발생:', error);
            alert('공지사항 수정 중 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="notice-edit-page">
            <h2>공지사항 수정</h2>
            <div className="form-container">
                <input
                    type="text"
                    name="title"
                    placeholder="제목"
                    value={notice.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="작성자"
                    value={notice.author}
                    onChange={handleInputChange}
                />
                <textarea
                    name="content"
                    placeholder="내용"
                    value={notice.content}
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
                    <button onClick={handleUpdateNotice} disabled={isLoading}>
                        {isLoading ? '수정 중...' : '수정'}
                    </button>
                    <button onClick={() => navigate(`/notice/${id}`)}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeEdit;