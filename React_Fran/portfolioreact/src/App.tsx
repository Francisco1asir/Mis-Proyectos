import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './estructura/Header/Header';
import { Main } from './estructura/Main/Main';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Proyectos } from './pages/Proyectos/Proyectos';
import { FormacionPage } from './pages/Formacion/Formacion';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<Home />} />
            <Route path='proyectos' element={<Proyectos />} />
            <Route path='formacion' element={<FormacionPage />} />
          </Route>
        </Routes>
      </main>
    </>

  );
}

export default App;
