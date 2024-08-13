import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import Nav from './Component/Nav';
import Profile from './Component/Profile';
import Project from './Component/Project';
import ProjectPage from './Component/Projectpage';
import './Css/App.css';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <div className='containerHead'>
          {/* <Nav /> */}
        </div>
        <div className='containerBody'>
          <ScrollToTop />
          <Routes>
            <Route
              path='/'
              element={<>
                <Profile />
                <Project />
              </>} />
            <Route
              path="/project/:id"
              element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
      <div className='footer'>
        <div className='footerWarp'>
          <div className='footerTitle'>
            <h6>도유현의 포트폴리오</h6>
          </div>
          <div className='footercontent'>
            <p>010-5650-8323</p>
            <p>dyh910@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null;
}

export default App;
