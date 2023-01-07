import Login from './Component/Login';
import Resister from './Component/Resister';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <div className="Container">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/resister' element={<Resister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
