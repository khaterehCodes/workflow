import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/ui/pages/dashboard/Dashboard';
import Layout from './components/partial/Layout';
import LoginPage from './components/ui/pages/login/LoginPage';
import SignupPage from './components/ui/pages/signupPage/SignupPage';
import ResetPasswordPage from './components/ui/pages/resetPasswordPage/ResetPasswordPage';
import ResetEmailPage from './components/ui/pages/resetEmailPage/ResetEmailPage';
import ConfirmEmail from './components/ui/pages/confirmEmail/ConfirmEmail';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/resetPassword' element={<ResetPasswordPage/>}/>
          <Route path='/resetEmail' element={<ResetEmailPage/>}/>
          <Route path='/confirmEmail' element={<ConfirmEmail/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;