import { Routes, Route, Link } from 'react-router-dom'
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
          <Routes>

            <Route
              path='/'
              element={<>
                <Profile />
                <Project />
              </>} />

            <Route
              path="/project/:id"
              element={<ProjectPage/>} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
