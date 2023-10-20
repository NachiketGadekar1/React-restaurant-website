import Header from './Header'; 
import Nav from './Nav'; 
import Main from './Main'; 
import Footer from './Footer'; 
import About from './More Components/About';
import './styles.css';
import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
