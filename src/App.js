import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Home} from './components/pages/Home'
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {
  return (
    <BrowserRouter basename="crudapp">

    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/users/add' element={<AddUser/>}/>
      <Route exact path='/users/:id' element={<User/>}/>
      <Route exact path='/users/edit/:id' element={<EditUser/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
