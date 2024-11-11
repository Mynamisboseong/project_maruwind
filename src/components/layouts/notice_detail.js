import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './notice_detail.css'

const notices = [
    {
        id: 1,
        title: '마루바람 사이트 오픈!',
        author: '마루바람',
        date: '2024-11-11',
        content:
            '저희는 환경보호 인식 상승 웹사이트인 마루바람을 제작하였습니다. \n마루바람은 떨어지는 환경보호 인식을 상승시키고 조금 더 친화적인 방식으로 국민들의 친환경적인 실생활을 독려할 수 있는 웹사이트입니다.\n환경보호에 더 관심가지고 도움이 될 수 있도록 노력하겠습니다.\n많은 관심과 사랑 부탁드립니다!',
        images: ['/wind.png'],
    },
    {
        id: 2,
        title: '세계의 환경 기념일',
        author: '마루바람',
        date: '2024-11-11',
        content:
            '환경과 관련된 기념일 하면 가장 먼저 떠오르는 기념일은 역시 우리나라의 식목일입니다. 식목일은 나무를 직접 심어보는 경험을 통해 숲과 자연을 사랑하는 마음을 기르자는 취지에서 지정된 국가 기념일인데요. 단순히 나무 심는 날로 잘 알려져 있지만 그 배경을 살펴보면 보다 의미 있는 기념일이라는 사실을 알 수 있습니다.\n\n이번에는 우리가 잘 모르는 세계의 환경과 관련된 기념일을 소개합니다.',
        images: ['/eco_day.png'],
    },
    {
        id: 3,
        title: '[환경부] 대한민국 국제물주간 2024',
        author: '마루바람',
        date: '2024-11-11',
        content: '출처 : 환경부',
        images: [
            '/watercomic/manhwa1.jfif',
            '/watercomic/manhwa2.jfif',
            '/watercomic/manhwa3.jfif',
            '/watercomic/manhwa4.jfif',
            '/watercomic/manhwa5.jfif',
            '/watercomic/manhwa6.jfif',
            '/watercomic/manhwa7.jfif',
        ],
    },
    {
        id: 4,
        title: '탄소중립 선도도시 평가참여단 모집 공고',
        author: '마루바람',
        date: '2024-11-11',
        content: '출처 : 환경부',
        images: ['/notice_city.png'],
    },
    {
        id: 5,
        title: '투명페트병을 활용한 자취생 꿀팁 옷장 편',
        author: '마루바람',
        date: '2024-11-11',
        content: '출처 : 환경부',
        images: [
            '/pet_tip/pet_tip1.jfif',
            '/pet_tip/pet_tip2.jfif',
            '/pet_tip/pet_tip3.jfif',
        ],
    },
]

function NoticeDetail() {
    const { id } = useParams()
    const noticeId = parseInt(id)
    const notice = notices.find((n) => n.id === noticeId)
    const navigate = useNavigate()

    if (!notice) {
        return <div>공지사항을 찾을 수 없습니다.</div>
    }

    const specialNotices = [3, 4, 5] // 3, 4, 5번 공지사항을 배열로 묶음
    const isSpecialNotice = specialNotices.includes(noticeId) // 공지사항 ID가 배열에 포함되면 true

    return (
        <div
            className={`notice-detail ${
                isSpecialNotice ? 'special-notice' : ''
            }`}
        >
            <h1 className="notice-title">{notice.title}</h1>
            <div className="notice-info">
                <p>
                    <strong>{notice.author}</strong>
                </p>
                <p>{notice.date}</p>
            </div>
            <div className="notice-content">
                <p>{notice.content}</p>
                <div className="notice-images">
                    {notice.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Notice image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NoticeDetail
