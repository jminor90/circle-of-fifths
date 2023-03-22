import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer'
import Homepage from './pages/Homepage'
import A_Page from './pages/A-Page'
import B_Page from './pages/B-Page'
import C_Page from './pages/C-Page'
import GMajor from './pages/GMajor'
import DMajor from './pages/DMajor';
import AMajor from './pages/AMajor';
import EMajor from './pages/EMajor';
import BMajor from './pages/BMajor';
import FsMajor from './pages/FsMajor';
import CsMajor from './pages/CsMajor';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="" element={<AppContainer/>}>
          <Route index element={<Homepage />} />
          <Route path="/A" element={<A_Page />} />
          <Route path="/B" element={<B_Page />} />
          <Route path="/C" element={<C_Page />} />
          <Route path="/GMajor" element={<GMajor />} />
          <Route path="/DMajor" element={<DMajor />} />
          <Route path="/AMajor" element={<AMajor />} />
          <Route path="/EMajor" element={<EMajor />} />
          <Route path="/BMajor" element={<BMajor />} />
          <Route path="/FsMajor" element={<FsMajor />} />
          <Route path="/CsMajor" element={<CsMajor />} />
        </Route>

      </Routes> 
      {/* <AppContainer/> */}
    </div>
  );
}

export default App;
