import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Traditions from './pages/Traditions';
import Recipes from './pages/Recipes';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Music from './pages/Music';
import Stories from './pages/Stories';
import Crafts from './pages/Crafts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traditions" element={<Traditions />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/crafts" element={<Crafts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

