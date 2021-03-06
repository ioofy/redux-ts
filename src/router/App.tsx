import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import ListBookPages from 'pages/ListBook/ListBookPages';
import NotFoundPages from 'pages/NotFound/NotFoundPages';
import LoginPages from 'pages/Login/LoginPages';
import PrivateRoutes from 'helper/PrivateRoutes';
import EditBookPages from 'pages/EditBook/EditBook';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFoundPages />} />
          <Route path="/auth/login" element={<LoginPages />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<ListBookPages />} />
            <Route path="/edit/book/:bookId" element={<EditBookPages />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
