import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Pages/DashBoard/AddReview';
import Dashboard from './Pages/DashBoard/Dashboard';
import MyOrder from './Pages/DashBoard/MyOrder';
import MyProfile from './Pages/DashBoard/MyProfile';
import Home from './Pages/Home/Home';
import Product from './Pages/Home/Product';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/part/:id' element={
          <RequireAuth>
            <Product/>
          </RequireAuth>
        }/>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
          <Route path='myOrder' element={<MyOrder/>}/>
          <Route path='review' element={<AddReview/>}/>
          <Route path='profile' element={<MyProfile/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
