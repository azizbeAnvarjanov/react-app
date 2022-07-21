import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Main from './main/main';
import About from './about/about';
import Gallery from './gallery/gallery';
import Book from './book-table/book';
import Tabs from './tabs/tabs';
import Footer from './footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <About />
    <Gallery />
    <Book />
    <Tabs />
    <Footer />
  </React.StrictMode>
);

