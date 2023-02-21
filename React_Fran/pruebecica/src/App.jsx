import './App.css';
import './components/Heroes.css';

import { persona } from './data/heroes';
import { HeroesList } from './components/HeroesList';
// import Header from './components/estructura/header/header';
// import Main from './components/estructura/main/Main';
// import Footer from './components/estructura/footer/Footer';
import {Header, Main, Footer} from './components/estructura/index';

function App() {
  return (
    <>
    <Header></Header>
    <Main>
    <div>
        <h1 className='titulo'>Listado de personas</h1>
        {/* <HeroesList name={persona}></HeroesList> */}
        <HeroesList></HeroesList>

      </div>
    </Main>
    <Footer></Footer>

   

    </>
  );
}

export default App;
