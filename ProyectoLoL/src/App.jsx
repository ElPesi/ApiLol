    //Importacion de los modulos y componentes necesarios
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Champion from './components/Champion';
import Footer from './components/Footer';
import NavBar from './components/Navbar';

    // Utiliza Router para envolver los componentes y manejar las rutas
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/champion/:id" element={<Champion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
