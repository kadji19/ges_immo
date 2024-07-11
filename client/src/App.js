import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard2/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
      </Routes>
    </Router>

  );
}

export default App;
