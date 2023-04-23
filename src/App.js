import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={getMainComponents()} />
        <Route path="/.components/about.js" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const getMainComponents = () => {
  return <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </>
}

function NotFound() {
  return <h1>404 - Page not found</h1>;
}

export default App;
