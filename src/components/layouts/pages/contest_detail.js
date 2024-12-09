import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";

function ContestDetail() {
  const { id } = useParams(); // URL에서 게시글 ID 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트
  const [contest, setContest] = useState(null);

  useEffect(() => {
    const fetchContest = async () => {
      try {
        const docRef = doc(db, "contests", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContest(docSnap.data());
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

  if (!contest) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>{contest.title}</h1>
      <p>주최: {contest.organizer}</p>
      <p>작성자: {contest.author}</p>
      <p>상태: {contest.status}</p>
      <p>조회수: {contest.views}</p>
      <p>마감일: {contest.deadline}</p>
      <p>내용:</p>
      <div>{contest.content}</div>
      <button onClick={handleDelete} style={{ marginTop: "20px", backgroundColor: "red", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>게시글 삭제</button>
    </div>
  );
}

export default ContestDetail;
