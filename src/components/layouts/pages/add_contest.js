import React, { useState } from "react";
import { collection, addDoc, doc, updateDoc, increment as fieldIncrement } from "firebase/firestore";
import { db } from "../../../firebase";

function AddContest() {
  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [author, setAuthor] = useState(""); // 작성자
  const [category, setCategory] = useState("진행중");
  const [deadline, setDeadline] = useState(""); // 마감일
  const [status, setStatus] = useState("D-0");
  const [content, setContent] = useState(""); // 내용

  // D-N 계산
  const calculateDaysLeft = (selectedDate) => {
    const today = new Date();
    const deadlineDate = new Date(selectedDate);
    const timeDifference = deadlineDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? `D-${daysLeft}` : "마감";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contests"), {
        title,
        organizer,
        author,
        category,
        deadline,
        status,
        content, // 추가된 내용 필드
        views: 0, // 초기 조회수
        createdAt: new Date(),
      });
      alert("공모전이 성공적으로 등록되었습니다!");
      setTitle("");
      setOrganizer("");
      setAuthor("");
      setCategory("진행중");
      setDeadline("");
      setStatus("D-0");
      setContent("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("공모전 등록에 실패했습니다.");
    }
  };

  const handleDeadlineChange = (e) => {
    const selectedDate = e.target.value;
    setDeadline(selectedDate);
    setStatus(calculateDaysLeft(selectedDate));
  };

  // 조회수 증가 로직
  const incrementViews = async (contestId) => {
    try {
      const contestRef = doc(db, "contests", contestId);
      await updateDoc(contestRef, {
        views: fieldIncrement(1),
      });
    } catch (error) {
      console.error("Error updating views: ", error);
    }
  };

  return (
    <div>
      <h2>공모전 글 작성</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="주최"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="작성자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="진행중">진행중</option>
          <option value="마감">마감</option>
        </select>
        <input
          type="date"
          placeholder="마감일"
          value={deadline}
          onChange={handleDeadlineChange}
          required
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddContest;
