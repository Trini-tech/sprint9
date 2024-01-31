import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Centres from './pages/Centres';
import Cursos from './pages/Cursos/Cursospage';
import LoginComponent from './pages/Login_Signup/Login';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container max-w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/centres" element={<Centres />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
