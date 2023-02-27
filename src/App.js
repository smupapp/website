import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Programs, Tools, ToolGuides } from './pages';

import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/tools/:id' element={<ToolGuides />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
