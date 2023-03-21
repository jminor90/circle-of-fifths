import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer'
import Homepage from './pages/Homepage'
import A_Page from './pages/A-Page'
import B_Page from './pages/B-Page'
import C_Page from './pages/C-Page'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="" element={<AppContainer/>}>
          <Route index element={<Homepage />} />
          <Route path="/A" element={<A_Page />} />
          <Route path="/B" element={<B_Page />} />
          <Route path="/C" element={<C_Page />} />
        </Route>

      </Routes> 
      {/* <AppContainer/> */}
    </div>
  );
}

export default App;
