import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/ui/pages/dashboard/Dashboard';
import Layout from './components/partial/Layout';
import LoginPage from './components/ui/pages/login/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;