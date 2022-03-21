import 'bootstrap/dist/css/bootstrap.min.css';
import HeroHeader from './components/HeroHeader';
import AboutSection from './components/AboutSection';
import Experiences from './components/Experiences';
import ClosingSection from './components/ClosingSection';
import Footer from './components/footer';


function App() {

  return (
    <div className='App'>
      <HeroHeader></HeroHeader>
      <AboutSection></AboutSection>
      <Experiences></Experiences>
      <ClosingSection></ClosingSection>
      <Footer />
    </div>
  );
}

export default App;
