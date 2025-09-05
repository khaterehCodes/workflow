import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/partial/Layout';
import LoginPage from './components/ui/pages/login/LoginPage';
import UserListPage from './components/ui/pages/UserListPage/UserListPage';
import EditUsersPage from './components/ui/pages/EditUsers/EditUsers';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route index element={<UserListPage/>}/>
          <Route path='/edituser' element={<EditUsersPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;