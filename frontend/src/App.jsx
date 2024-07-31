import React, { useState } from 'react'
import Admin from './pages/admin'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import Products from './pages/admin/products'
import Users from './pages/admin/users'
import Posts from './pages/admin/posts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/admin/contacts'
import Articels from './pages/admin/articles'
import Agents from './pages/admin/agents'
import Header from './layout/header'

const App = () => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <Header setMenu={setMenu} menu={menu} />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Auth/>}>
          <Route menu={menu} path='admin' element={<Admin menu={menu}/>}>
            <Route path='product' element={<Products/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='posts' element={<Posts/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='articl' element={<Articels/>}/>
            <Route path='agent' element={<Agents/>}/>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
