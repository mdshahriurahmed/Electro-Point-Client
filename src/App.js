
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";


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
    <div className="App">
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
            </Routes>
            <Footer></Footer>
          </>

      }
    </div>
  );
}

export default App;
