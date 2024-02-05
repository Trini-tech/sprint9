import Footer from './components/Footer';
import Navbar from './components/navigation/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Centers from './pages/Centers/CentersPage';
import Cursos from './pages/Courses/CoursesPage';
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
        <div className="container max-w-full">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/centres" element={<Centers />} />
            <Route path="/cursos" element={<Cursos />} />
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
