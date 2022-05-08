
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound'
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import MyItem from './Pages/MyItem/MyItem';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  let [color, setColor] = useState("#3BE90A");
  const override = css`
  display: block;
  margin: 350px auto;
  border-color: red;
`;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return (
    <div className="App Appbg">
      {
        loading ?
          <div className='App-header'>
            <DotLoader color={color} loading={loading}
              css={override}
              size={60} />
          </div>
          :
          <>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<SignUp></SignUp>}></Route>
              <Route path='/inventory/:id' element={<RequireAuth>
                <Inventory></Inventory>
              </RequireAuth>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
              <Route path='/manageInventory' element={<RequireAuth>
                <ManageInventory></ManageInventory>
              </RequireAuth>}>

              </Route>
              <Route path='/addNewItem' element={<RequireAuth>
                <AddNewItem></AddNewItem>
              </RequireAuth>}>

              </Route>
              <Route path='/myItem' element={<RequireAuth>
                <MyItem></MyItem>
              </RequireAuth>}>
              </Route>
              <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            </Routes>
            <Footer></Footer>
          </>

      }
    </div>
  );
}

export default App;
