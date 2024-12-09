import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrandExample from './components/layouts/icon_brand.js'
import BasicExample from './components/layouts/menu-navbar.js'
import UncontrolledExample from './components/layouts/carousels.js'
import LogoBrandExample from './components/layouts/logo_brand.js'
import GraphExample from './components/layouts/graph.js'
import GraphtrashExample from './components/layouts/graph_trash.js'
import FluidExample from './components/layouts/Itsok_banner.js'
import FooterExample from './components/layouts/footer.js'
import ChallengeExample from './components/layouts/challenge.js'
import ShapeExample from './components/layouts/campaign_images.js'
import HomeIntroduce from './components/layouts/HomeIntroduce'
import Notice from './components/layouts/notice.js'
import NoticeDetail from './components/layouts/notice_detail.js'
import NewsPage from './components/layouts/pages/news.js'
import ChallengePageExample from './components/layouts/pages/challenge_page.js'
import Contest from './components/layouts/pages/contest.js'
import ContestDetail from './components/layouts/pages/contest_detail.js'

// 새로 추가된 컴포넌트
import AddContest from './components/layouts/pages/add_contest.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrandExample />
      <LogoBrandExample />
      <BasicExample /> {/* 네비게이션 메뉴는 항상 표시 */}
      <Routes>
        {/* 메인 페이지 */}
        <Route
          path="/"
          element={
            <>
              <UncontrolledExample />
              <GraphExample />
              <GraphtrashExample />
              <FluidExample />
              <ShapeExample />
              <ChallengeExample />
            </>
          }
        />

        {/* 공모전 페이지 */}
        <Route path="/contest" element={<Contest />} />
        <Route path="/contest/:id" element={<ContestDetail />} />

        {/* 공모전 글쓰기 페이지 (새로운 라우팅 추가) */}
        <Route path="/add-contest" element={<AddContest />} />

        {/* 뉴스/보도자료 페이지 */}
        <Route path="/news" element={<NewsPage />} />

        {/* SNS 챌린지 페이지 */}
        <Route path="/challenge" element={<ChallengePageExample />} />

        {/* 소개 페이지 */}
        <Route path="/introduce" element={<HomeIntroduce />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />
      </Routes>
      <FooterExample /> {/* 푸터는 모든 페이지에 표시 */}
    </div>
  )
}

export default App;
