import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Tools } from './pages';

import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/:id" element={<Tools />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
