import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout/Layout'
import HomeApp from './pages/home';
import AboutApp from './pages/about/AboutApp';
import PostsApp from './pages/posts/PostsApp';
import Comments from './pages/detail-comments/Comments';

function App() {
  const [theme, setTheme] = useState('light')
  const [cart, setCart] = useState([])
  return (
    <div className='App'>
      <Layout
        setCart={setCart}
        mode={theme}
        theme={setTheme}
        cart={cart}
      >
        <Routes>
          <Route path="/" element={<HomeApp />}></Route>
          <Route path="/PostsApp" element={<PostsApp />}></Route>
          <Route path="/AboutApp" element={<AboutApp />}></Route>
          <Route path={`/Comments/:id/comments`} element={<Comments />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
