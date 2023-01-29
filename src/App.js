import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Component/Home';
import Register from './Component/Register';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  const { CurrentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!CurrentUser) {
      return <Navigate to={'/'} />
    }
  }
  return (
    <div className="Container">
      <Router>
        <Routes>
          <Route exact path='/' element={
            // <ProtectedRoute>
            <Home />
            /* </ProtectedRoute> */
          } />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
