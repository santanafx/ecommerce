import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './pages/Inicio';
import { NavBar } from './components/NavBar';
import { Produto } from './pages/Produto';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/produto/:id' element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
