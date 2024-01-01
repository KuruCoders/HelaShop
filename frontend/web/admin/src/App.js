
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserManag from './Pages/UserManag/UserManag';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Main from './Pages/Main/Main';
import PaymentManag from './Pages/PaymentManag/PaymentManag';
import InventoryManag from './Pages/InventoryManag/InventoryManag';
import StaffManag from './Pages/StaffManag/StaffManag';
import Profile from './Pages/MyProfile/Profile';
import NotFound from './Pages/Error/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Act from './Pages/MyProfile/Account/Act';
import Bills from './Pages/MyProfile/Billing/Bills';
import Notification from './Pages/MyProfile/Notification/Notification';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/main' element={<Main />}>
            <Route index element={<Dashboard />} />
            <Route path='user' element={<UserManag />} />
            <Route path='payment' element={<PaymentManag />} />
            <Route path='inventory' element={<InventoryManag />} />
            <Route path='staff' element={<StaffManag />} />
            <Route path='profile' element={<Profile />}>
              <Route index element={ <Act/> } />
              <Route path='notification' element={ <Notification/> } />
              <Route path='bill' element={ <Bills/> } />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
