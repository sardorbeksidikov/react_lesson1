import Clients from './components/clients/Clients';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/product/Main';
import Table from './components/table/Table';


function App(){
    return (
      <div className="app">
        <Header />
        <Hero />
        <Main />
        <Content />
        <Table />
        <Clients />
        <Footer />

      </div>
    );
}
export default App;