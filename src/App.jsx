import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { Ty } from './components/pages/ty'; // Note the uppercase 'T'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ty" element={<Ty />} />
      </Routes>
    </Router>
  );
}

export default App;
