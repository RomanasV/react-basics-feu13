import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Testimonials from './pages/Testimonials';
import NewsPage from './pages/NewsPage/NewsPage';
import HuddlePage from './pages/HuddlePage/HuddlePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Testimonials></Testimonials> */}
    {/* <Testimonials /> */}

    {/* <NewsPage /> */}

    <HuddlePage />
  </React.StrictMode>
);
