import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import NoticeAdd from './components/layouts/notice_add.js';
import NoticeEdit from './components/layouts/notice_edit.js'
import NewsPage from './components/layouts/pages/news.js'
import ChallengePageExample from './components/layouts/pages/challenge_page.js'
import Contest from './components/layouts/pages/contest.js'
import AddContest from './components/layouts/pages/add_contest.js'
import ContestDetail from './components/layouts/pages/contest_detail.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrandExample />
      <LogoBrandExample />
      <BasicExample /> {/* 네비게이션 메뉴 */}
      <div style={{ flex: 1 }}> {/* 콘텐츠가 남는 공간을 채움 */}
        <Routes>
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
          <Route path="/contest" element={<Contest />} />
          <Route path="/contest/add" element={<AddContest />} />
          <Route path="/contest/:id" element={<ContestDetail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/challenge" element={<ChallengePageExample />} />
          <Route path="/introduce" element={<HomeIntroduce />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/notice_add" element={<NoticeAdd />} />
          <Route path="/notice/edit/:id" element={<NoticeEdit />} />
        </Routes>
      </div>
      <FooterExample /> {/* 항상 하단에 표시 */}
    </div>
  );
}

export default App;

