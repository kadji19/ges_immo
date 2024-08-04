import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard2/Dashboard'
import { UserProvider } from './context/UseContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard/>} />
        </Routes>
      </UserProvider>
    </Router>

  );
}

export default App;
