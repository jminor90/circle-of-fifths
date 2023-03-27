import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer'
import Homepage from './pages/Homepage'
import CMajor from './pages/Major/CMajor';
import GMajor from './pages/Major/GMajor'
import DMajor from './pages/Major/DMajor';
import AMajor from './pages/Major/AMajor';
import EMajor from './pages/Major/EMajor';
import BMajor from './pages/Major/BMajor';
import FsMajor from './pages/Major/FsMajor';
import CsMajor from './pages/Major/CsMajor';
import CfMajor from './pages/Major/CfMajor';
import GfMajor from './pages/Major/GfMajor';
import DfMajor from './pages/Major/DfMajor';
import AfMajor from './pages/Major/AfMajor';
import EfMajor from './pages/Major/EfMajor';
import BfMajor from './pages/Major/BfMajor';
import FMajor from './pages/Major/FMajor';


import AMinor from './pages/Minor/AMinor';
import EMinor from './pages/Minor/EMinor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="" element={<AppContainer/>}>
          <Route index element={<Homepage />} />
          <Route path="/CMajor" element={<CMajor />} />
          <Route path="/GMajor" element={<GMajor />} />
          <Route path="/DMajor" element={<DMajor />} />
          <Route path="/AMajor" element={<AMajor />} />
          <Route path="/EMajor" element={<EMajor />} />
          <Route path="/BMajor" element={<BMajor />} />
          <Route path="/FsMajor" element={<FsMajor />} />
          <Route path="/CsMajor" element={<CsMajor />} />
          <Route path="/CfMajor" element={<CfMajor />} />
          <Route path="/GfMajor" element={<GfMajor />} />
          <Route path="/DfMajor" element={<DfMajor />} />
          <Route path="/AfMajor" element={<AfMajor />} />
          <Route path="/EfMajor" element={<EfMajor />} />
          <Route path="/BfMajor" element={<BfMajor />} />
          <Route path="/FMajor" element={<FMajor />} />

          <Route path="/AMinor" element={<AMinor />} />
          <Route path="/EMinor" element={<EMinor />} />
        </Route>

      </Routes> 
      {/* <AppContainer/> */}
    </div>
  );
}

export default App;
