import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero/hero';
import Cardbox01 from './components/cardbox-01/cardbox01';
import Cardbox02 from './components/Cardbox-02/Cardbox02';
import Airbnb from './components/airbnb/airbnb';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Cardbox01/>
    <Cardbox02/>
    <Slider/>
    <Airbnb/>
    <Footer/>

    </>
  );
}

export default App;
