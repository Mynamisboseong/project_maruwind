import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../firebase'

function AddContest() {
  const [title, setTitle] = useState('')
  const [organizer, setOrganizer] = useState('')
  const [category, setCategory] = useState('진행중')
  const [status, setStatus] = useState('D-30')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'contests'), {
        title,
        organizer,
        category,
        status,
        views: 0,
        createdAt: new Date(),
      })
      alert('공모전이 성공적으로 등록되었습니다!')
      setTitle('')
      setOrganizer('')
      setCategory('진행중')
      setStatus('D-30')
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>새 공모전 작성</h2>
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
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="진행중">진행중</option>
        <option value="마감">마감</option>
      </select>
      <input
        type="text"
        placeholder="상태 (예: D-30)"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  )
}

export default AddContest
