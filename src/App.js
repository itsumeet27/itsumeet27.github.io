import HeaderSection from './shared/HeaderSection'
import FooterBar from './shared/FooterSection'
import './App.css';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Banner />
      <FooterBar />
    </div>
  );
}

export default App;
