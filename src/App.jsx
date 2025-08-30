import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/ui/pages/dashboard/Dashboard';
import Layout from './components/partial/Layout';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;