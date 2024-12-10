import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";

function AddContest() {
  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [author, setAuthor] = useState(""); // 작성자
  const [category, setCategory] = useState("진행중");
  const [deadline, setDeadline] = useState(""); // 마감일
  const [status, setStatus] = useState("D-0");
  const [content, setContent] = useState(""); // 내용
  const [field, setField] = useState(""); // 분야
  const [targetAudience, setTargetAudience] = useState(""); // 응모 대상
  const [totalPrize, setTotalPrize] = useState(""); // 총 상금
  const [firstPrize, setFirstPrize] = useState(""); // 1등 상금
  const [website, setWebsite] = useState(""); // 홈페이지
  const [selectedImage, setSelectedImage] = useState(null); // 이미지 파일
  const navigate = useNavigate();

  // D-N 계산
  const calculateDaysLeft = (selectedDate) => {
    const today = new Date();
    const deadlineDate = new Date(selectedDate);
    const timeDifference = deadlineDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? `D-${daysLeft}` : "마감";
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return null;

    const storage = getStorage();
    const storageRef = ref(storage, `contest-images/${selectedImage.name}`);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await handleImageUpload(); // 이미지 업로드 후 URL 가져오기

      await addDoc(collection(db, "contests"), {
        title,
        organizer,
        author,
        category,
        deadline,
        status,
        content,
        field,
        targetAudience,
        totalPrize,
        firstPrize,
        website,
        imageUrl, // 업로드된 이미지 URL 저장
        views: 0, // 초기 조회수
        createdAt: new Date(),
      });

      alert("공모전이 성공적으로 등록되었습니다!");
      navigate("/contest"); // 공모전 화면으로 이동
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

  return (
    <div>
      <h2>공모전 글 작성</h2>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          주최:
          <input
            type="text"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            required
          />
        </label>
        <label>
          작성자:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <label>
          내용:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <label>
          분야:
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
            required
          />
        </label>
        <label>
          응모 대상:
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
          />
        </label>
        <label>
          총 상금:
          <input
            type="text"
            value={totalPrize}
            onChange={(e) => setTotalPrize(e.target.value)}
          />
        </label>
        <label>
          1등 상금:
          <input
            type="text"
            value={firstPrize}
            onChange={(e) => setFirstPrize(e.target.value)}
          />
        </label>
        <label>
          홈페이지:
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <label>
          상태:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="진행중">진행중</option>
            <option value="마감">마감</option>
          </select>
        </label>
        <label>
          마감일:
          <input
            type="date"
            value={deadline}
            onChange={handleDeadlineChange}
            required
          />
        </label>
        <label>
          이미지 업로드:
          <input
            type="file"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            style={{ marginTop: "10px" }}
          />
        </label>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddContest;
