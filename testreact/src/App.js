import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BrandExample from './components/layouts/icon_brand.js';
import BasicExample from './components/layouts/menu-navbar.js';
import UncontrolledExample from './components/layouts/carousels.js';  // 메인 페이지
import LogoBrandExample from './components/layouts/logo_brand.js';
import GraphExample from './components/layouts/graph.js';
import GraphtrashExample from './components/layouts/graph_trash.js';
import FluidExample from './components/layouts/Itsok_banner.js';
import FooterExample from './components/layouts/footer.js';
import ShapeExample from './components/layouts/campaign_images.js';
import HomeIntroduce from './components/layouts/HomeIntroduce';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BrandExample />
        <LogoBrandExample />
        <BasicExample />  {/* 네비게이션 메뉴는 항상 표시 */}

        {/* Routes 내부에서 페이지별 콘텐츠 분기 */}
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
              </>
            }
          />

          {/* 소개 페이지 */}
          <Route path="/introduce" element={<HomeIntroduce />} />
        </Routes>

        <FooterExample /> {/* 푸터는 모든 페이지에 표시 */}
      </div>
    </Router>
  );
}

export default App;
