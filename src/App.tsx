import Footer from './components/Footer';
import Navbar from './components/navigation/Navbar';
import Homepage from './pages/Homepage/Homepage';
import CentersPage from './pages/Centers/CentersPage';
import CoursesPage from './pages/Courses/CoursesPage';
import LoginComponent from './pages/Login_Signup/Login';
import ScrollToTop from './components/navigation/ScrollToTop';
import SignupComponent from './pages/Login_Signup/Signup';

import { SearchProvider } from './context/SearchContext';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <SearchProvider>
      <>
        <Navbar />
        <div className="container max-w-full overflow-hidden">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/centres" element={<CentersPage />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
          </Routes>
        </div>
        <Footer />
      </>
    </SearchProvider>
  );
}

export default App;
