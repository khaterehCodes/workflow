import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/partial/Layout';
import LoginPage from './components/ui/pages/login/LoginPage';
import UserListPage from './components/ui/pages/UserListPage/UserListPage';
import EditUsersPage from './components/ui/pages/EditUsers/EditUsers';
import SignupPage from './components/ui/pages/signupPage/SignupPage';
import ResetPasswordPage from './components/ui/pages/resetPasswordPage/ResetPasswordPage';
import ResetEmailPage from './components/ui/pages/resetEmailPage/ResetEmailPage';
import ConfirmEmail from './components/ui/pages/confirmEmail/ConfirmEmail';
import BasePage from './components/ui/pages/BasePage/BasePage';
import ControlePage from './components/ui/pages/ControlePage/ControlePage';
import { AuthProvider } from './core/context/AouthContext';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import AuthCheck from './authCheck/AuthCheck';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/edituser' element={
              <ProtectedRoute role={'editor'}>
                <EditUsersPage />
              </ProtectedRoute>
            } />
            <Route path='/login' element={
              <AuthCheck>
                <LoginPage />
              </AuthCheck>
            } />
            <Route path='/' element={
              <ProtectedRoute role={'reader'}>
                <UserListPage />
              </ProtectedRoute>
            } />
            <Route path="/base" element={<BasePage />} />
            <Route path="/controle" element={<ControlePage />} />
            <Route path='/signup' element={
              <AuthCheck>
                <SignupPage />
              </AuthCheck>
            } />
            <Route path='/resetPassword' element={<ResetPasswordPage />} />
            <Route path='/resetEmail' element={<ResetEmailPage />} />
            <Route path='/confirmEmail' element={<ConfirmEmail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;