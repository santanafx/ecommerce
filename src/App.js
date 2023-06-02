import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './pages/Inicio';
import { NavBar } from './components/NavBar';
import { Produto } from './pages/Produto';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Woman } from './pages/Woman';
import { Men } from './pages/Men';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/woman' element={<Woman />} />
        <Route path='/men' element={<Men />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/produto/:id' element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
