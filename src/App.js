
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import CoinDetails from './components/CoinDetails/CoinDetails';
import BdAddress from './components/Contact/BdAddress';
import UsAddress from './components/Contact/UsAddress';






function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} ></Route>
        <Route path='/coins' element={<Coins></Coins>} ></Route>
        <Route path='/coin/:id' element={<CoinDetails></CoinDetails>}> </Route>
        <Route path='/Contact' element={<Contact></Contact>} >
          <Route path='bd-address' element={<BdAddress></BdAddress>}   ></Route>
          <Route path='usa-address' element={<UsAddress></UsAddress>} ></Route>
        </Route>
        <Route path='/About' element={<About></About>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} >  </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
