import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/DashBoard/AddProduct';
import AddReview from './Pages/DashBoard/AddReview';
import Dashboard from './Pages/DashBoard/Dashboard';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
import ManageOrder from './Pages/DashBoard/ManageOrder';
import ManageProduct from './Pages/DashBoard/ManageProduct';
import MyOrder from './Pages/DashBoard/MyOrder';
import MyProfile from './Pages/DashBoard/MyProfile';
import Home from './Pages/Home/Home';
import Product from './Pages/Home/Product';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
          <Route path='manageOrder' element={<ManageOrder/>}/>
          <Route path='addProduct' element={<AddProduct/>}/>
          <Route path='admin' element={<MakeAdmin/>}/>
          <Route path='manageProduct' element={<ManageProduct/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
