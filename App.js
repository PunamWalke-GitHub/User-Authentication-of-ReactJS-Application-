import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';
import ResetPassword from './ResetPassword';

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <Appheader>...</Appheader>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
