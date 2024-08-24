import { Home } from './Home/home';
import { Ty } from './Pages/Ty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Ty' element={<Ty/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
