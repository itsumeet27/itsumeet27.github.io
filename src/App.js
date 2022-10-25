import banner from './assets/img/banner.JPG';
import HeaderSection from './shared/HeaderSection'
import FooterBar from './shared/FooterSection'
import './App.css';

function App() {
  return (
    <div className="App">
    <HeaderSection />
      <div style={{ width: '100%', height: '680px'}}>
        <img src={banner} className="" alt="Sunset" style={{ width: '100%', height: '100%'}}/>
      </div>
      <FooterBar />
    </div>
  );
}

export default App;
