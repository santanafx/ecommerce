import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './pages/Inicio';
import { NavBar } from './components/NavBar';
import { Produto } from './pages/Produto';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Men } from './pages/Men';
import { Women } from './pages/Women';
import { CheckOut } from './pages/CheckOut';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/produto/:id' element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
