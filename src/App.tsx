import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Centres from './pages/Centres';
import Cursos from './pages/Cursos';

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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
