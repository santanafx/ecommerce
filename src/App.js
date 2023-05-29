import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './pages/Inicio';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
