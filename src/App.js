
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import Slider from './Pages/Slider/Slider'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/test' element={<Slider></Slider>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
