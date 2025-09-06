import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/partial/Layout';
import LoginPage from './components/ui/pages/login/LoginPage';
<<<<<<< HEAD
import UserListPage from './components/ui/pages/UserListPage/UserListPage';
import EditUsersPage from './components/ui/pages/EditUsers/EditUsers';
=======
import SignupPage from './components/ui/pages/signupPage/SignupPage';
import ResetPasswordPage from './components/ui/pages/resetPasswordPage/ResetPasswordPage';
import ResetEmailPage from './components/ui/pages/resetEmailPage/ResetEmailPage';
import ConfirmEmail from './components/ui/pages/confirmEmail/ConfirmEmail';
>>>>>>> a29d3200b7293bb2a9da747085ce1a21209a4abf
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
<<<<<<< HEAD
          <Route index element={<UserListPage/>}/>
          <Route path='/edituser' element={<EditUsersPage/>}/>
=======
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/resetPassword' element={<ResetPasswordPage/>}/>
          <Route path='/resetEmail' element={<ResetEmailPage/>}/>
          <Route path='/confirmEmail' element={<ConfirmEmail/>}/>
>>>>>>> a29d3200b7293bb2a9da747085ce1a21209a4abf
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;