import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/ui/pages/dashboard/Dashboard';
import Layout from './components/partial/Layout';
import LoginPage from './components/ui/pages/login/LoginPage';
import SignupPage from './components/ui/pages/signupPage/SignupPage';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;