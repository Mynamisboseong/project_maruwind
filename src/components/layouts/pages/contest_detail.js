import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './contest_detail.css'

function ContestDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [contest, setContest] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const [editedContent, setEditedContent] = useState({
    title: '',
    organizer: '',
    author: '',
    deadline: '',
    content: '',
    field: '',
    targetAudience: '',
    totalPrize: '',
    firstPrize: '',
    website: '',
    imageUrl: '',
  })
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return () => unsubscribe();
}, []);

  useEffect(() => {
    const fetchContest = async () => {
      try {
        const docRef = doc(db, 'contests', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setContest(docSnap.data())
          setEditedContent(docSnap.data())
        } else {
          console.error('No such document!')
        }
      } catch (error) {
        console.error('Error fetching document: ', error)
      }
    }

    fetchContest()
  }, [id])

  const handleDelete = async () => {
    const confirmDelete = window.confirm('이 게시글을 삭제하시겠습니까?')
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'contests', id))
        alert('게시글이 삭제되었습니다.')
        navigate('/contest')
      } catch (error) {
        console.error('Error deleting document: ', error)
        alert('게시글 삭제에 실패했습니다.')
      }
    }
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
    window.scrollTo({ top: 0, behavior: 'smooth' }) // 화면 최상단으로 이동
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditedContent({ ...editedContent, [name]: value })
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    try {
      let imageUrl = editedContent.imageUrl

      if (selectedImage) {
        const storage = getStorage()
        const storageRef = ref(
          storage,
          `contest-images/${id}/${selectedImage.name}`
        )
        await uploadBytes(storageRef, selectedImage)
        imageUrl = await getDownloadURL(storageRef)
      }

      // 상태 계산 로직 추가
      const today = new Date()
      const deadlineDate = new Date(editedContent.deadline)
      let status

      if (deadlineDate < today) {
        status = '마감'
      } else {
        const diffDays = Math.ceil(
          (deadlineDate - today) / (1000 * 60 * 60 * 24)
        )
        status = `D-${diffDays}`
      }

      const updatedContent = { ...editedContent, imageUrl, status } // 상태 포함
      const docRef = doc(db, 'contests', id)
      await updateDoc(docRef, updatedContent)
      setContest(updatedContent)
      setIsEditing(false)
      alert('게시글이 성공적으로 수정되었습니다.')
    } catch (error) {
      console.error('Error updating document: ', error)
      alert('게시글 수정에 실패했습니다.')
    }
  }

  if (!contest) {
    return <div className="loading">로딩 중...</div>
  }

  return (
    <div className="contest-detail-page">
      {!isEditing ? (
        <>
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
              <p>
                <span>분야:</span> {contest.field}
              </p>
              <p>
                <span>응모 대상:</span> {contest.targetAudience}
              </p>
              <p>
                <span>주최:</span> {contest.organizer}
              </p>
              <p>
                <span>상태:</span> {contest.status}
              </p>
              <p>
                <span>마감일:</span> {contest.deadline}
              </p>
              <p>
                <span>총 상금:</span> {contest.totalPrize}
              </p>
              <p>
                <span>1등 상금:</span> {contest.firstPrize}
              </p>
              <p>
                <span>홈페이지:</span>{' '}
                <a
                  href={contest.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contest.website}
                </a>
              </p>
            </div>
          </div>

          <div className="contest-content">
            <h2>게시글 내용</h2>
            {/* 줄바꿈 문제 해결 */}
            <p
              dangerouslySetInnerHTML={{
                __html: contest.content.replace(/\n/g, '<br />'),
              }}
            />
          </div>

          {contest.imageUrl && (
            <div className="large-image-section">
              <img
                src={contest.imageUrl}
                alt="Contest Visual"
                className="large-detail-image"
              />
            </div>
          )}

{user && (
                        <div className="button-container">
                            <button className="edit-button" onClick={handleEditToggle}>
                                게시글 수정
                            </button>
                            <button className="delete-button" onClick={handleDelete}>
                                게시글 삭제
                            </button>
                        </div>
                    )}
                </>
      ) : (
        <div className="edit-mode">
          <h2 className="page-title">게시글 수정</h2>
          <form className="edit-contest-form" onSubmit={handleEditSubmit}>
            <div className="input-group">
              <label>
                제목
                <input
                  type="text"
                  name="title"
                  value={editedContent.title}
                  onChange={handleEditChange}
                  required
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                작성자
                <input
                  type="text"
                  name="author"
                  value={editedContent.author}
                  onChange={handleEditChange}
                  required
                />
              </label>
              <label>
                주최
                <input
                  type="text"
                  name="organizer"
                  value={editedContent.organizer}
                  onChange={handleEditChange}
                  required
                />
              </label>
              <label>
                분야
                <input
                  type="text"
                  name="field"
                  value={editedContent.field}
                  onChange={handleEditChange}
                  required
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                응모 대상
                <input
                  type="text"
                  name="targetAudience"
                  value={editedContent.targetAudience}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                총 상금
                <input
                  type="text"
                  name="totalPrize"
                  value={editedContent.totalPrize}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                1등 상금
                <input
                  type="text"
                  name="firstPrize"
                  value={editedContent.firstPrize}
                  onChange={handleEditChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                홈페이지
                <input
                  type="url"
                  name="website"
                  value={editedContent.website}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                마감일
                <input
                  type="date"
                  name="deadline"
                  value={editedContent.deadline}
                  onChange={handleEditChange}
                  required
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                내용
                <textarea
                  name="content"
                  value={editedContent.content}
                  onChange={handleEditChange}
                  required
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                이미지 업로드
                <input
                  type="file"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
              </label>
            </div>
            <div className="button-container">
              <button type="submit" className="submit-button">
                수정 완료
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              >
                취소
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ContestDetail
