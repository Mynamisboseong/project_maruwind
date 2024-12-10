import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./contest_detail.css";

function ContestDetail() {
  const { id } = useParams(); // URL에서 게시글 ID 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트
  const [contest, setContest] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
  const [editedContent, setEditedContent] = useState({
    title: "",
    organizer: "",
    author: "",
    deadline: "",
    content: "",
    field: "",
    targetAudience: "",
    totalPrize: "",
    firstPrize: "",
    website: "",
    imageUrl: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchContest = async () => {
      try {
        const docRef = doc(db, "contests", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContest(docSnap.data());
          setEditedContent(docSnap.data()); // 수정 모드 초기값 설정
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchContest();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("이 게시글을 삭제하시겠습니까?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "contests", id));
        alert("게시글이 삭제되었습니다.");
        navigate("/contest"); // 삭제 후 공모전 목록 페이지로 이동
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    if (name === "deadline") {
      // 상태 자동 계산
      const today = new Date();
      const selectedDate = new Date(value);
      const timeDifference = selectedDate - today;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      let newStatus = "마감";
      if (daysDifference > 0) {
        newStatus = `D-${daysDifference}`;
      }

      setEditedContent({ ...editedContent, [name]: value, status: newStatus });
    } else {
      setEditedContent({ ...editedContent, [name]: value });
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return null;

    const storage = getStorage();
    const storageRef = ref(storage, `contest-images/${id}/${selectedImage.name}`);

    try {
      await uploadBytes(storageRef, selectedImage);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      alert("이미지 업로드에 실패했습니다.");
      return null;
    }
  };

  const handleEditSubmit = async () => {
    try {
      let imageUrl = editedContent.imageUrl;
      if (selectedImage) {
        imageUrl = await handleImageUpload();
      }

      const updatedContent = { ...editedContent, imageUrl };
      const docRef = doc(db, "contests", id);
      await updateDoc(docRef, updatedContent);
      setContest(updatedContent);
      setIsEditing(false);
      alert("게시글이 성공적으로 수정되었습니다.");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("게시글 수정에 실패했습니다.");
    }
  };

  if (!contest) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <div className="contest-detail-page">
      {isEditing ? (
        <div className="edit-mode">
          <h1>게시글 수정</h1>
          <input
            type="text"
            name="title"
            value={editedContent.title}
            onChange={handleEditChange}
            placeholder="제목"
          />
          <input
            type="text"
            name="organizer"
            value={editedContent.organizer}
            onChange={handleEditChange}
            placeholder="주최"
          />
          <input
            type="text"
            name="author"
            value={editedContent.author}
            onChange={handleEditChange}
            placeholder="작성자"
          />
          <input
            type="text"
            name="field"
            value={editedContent.field}
            onChange={handleEditChange}
            placeholder="분야"
          />
          <input
            type="text"
            name="targetAudience"
            value={editedContent.targetAudience}
            onChange={handleEditChange}
            placeholder="응모 대상"
          />
          <input
            type="text"
            name="totalPrize"
            value={editedContent.totalPrize}
            onChange={handleEditChange}
            placeholder="총 상금"
          />
          <input
            type="text"
            name="firstPrize"
            value={editedContent.firstPrize}
            onChange={handleEditChange}
            placeholder="1등 상금"
          />
          <input
            type="url"
            name="website"
            value={editedContent.website}
            onChange={handleEditChange}
            placeholder="홈페이지"
          />
          <input
            type="date"
            name="deadline"
            value={editedContent.deadline}
            onChange={handleEditChange}
          />
          <textarea
            name="content"
            value={editedContent.content}
            onChange={handleEditChange}
            placeholder="내용"
          />
          <input
            type="file"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            style={{ marginTop: "10px" }}
          />
          <div className="button-container">
            <button className="edit-button" onClick={handleEditSubmit}>
              수정 완료
            </button>
            <button className="cancel-button" onClick={handleEditToggle}>
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className="view-mode">
          <h1 className="contest-title">{contest.title}</h1>
          <div className="detail-box">
            {contest.imageUrl && (
              <img
                src={contest.imageUrl}
                alt="Uploaded"
                className="detail-image"
              />
            )}
            <div className="detail-info">
              <p><span>분야:</span> {contest.field}</p>
              <p><span>응모 대상:</span> {contest.targetAudience}</p>
              <p><span>주최:</span> {contest.organizer}</p>
              <p><span>상태:</span> {contest.status}</p>
              <p><span>마감일:</span> {contest.deadline}</p>
              <p><span>조회수:</span> {contest.views}</p>
              <p><span>총 상금:</span> {contest.totalPrize}</p>
              <p><span>1등 상금:</span> {contest.firstPrize}</p>
              <p><span>홈페이지:</span> <a href={contest.website} target="_blank" rel="noopener noreferrer">{contest.website}</a></p>
            </div>
          </div>
          <div className="contest-content">{contest.content}</div>
          {contest.imageUrl && (
            <div className="large-image-section">
              <img src={contest.imageUrl} alt="Contest Visual" className="large-detail-image" />
            </div>
          )}
          <div className="button-container">
            <button className="edit-button" onClick={handleEditToggle}>
              게시글 수정
            </button>
            <button className="delete-button" onClick={handleDelete}>
              게시글 삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContestDetail;
