import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './notice_detail.css';

const notices = [
    {
      id: 1,
      title: '[마루바람] 마루바람 공지사항입니다.',
      author: '마루바람',
      date: '2024-11-11',
      content: '마루바람의 첫번째 공지사항입니다.\n안녕하세요.\n마루바람입니다.', 
      images: ['/wind.png'],
    }
  ];
  
  
  
  

  function NoticeDetail() {
    const { id } = useParams();
    const noticeId = parseInt(id);
    const notice = notices.find(n => n.id === noticeId);
  
    if (!notice) {
      return <div>공지사항을 찾을 수 없습니다.</div>;
    }
  
    return (
      <div className="notice-detail">
        <h1 className="notice-title">{notice.title}</h1>
        <div className="notice-info">
          <p><strong>{notice.author}</strong></p>
          <p>{notice.date}</p>
        </div>
        <div className="notice-content">
          <p>{notice.content}</p>
          <div className="notice-images">
            {notice.images.map((image, index) => (
              <img key={index} src={image} alt={`Notice image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default NoticeDetail;