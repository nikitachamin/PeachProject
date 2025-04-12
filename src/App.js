import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BusinessLines from './components/BusinessLines';
import DropdownMenu from './components/Dropdownmenu';
import Header from './components/Header';
import Mission from './components/Mission';
import Package from './components/Package';
import Top from './components/Top';
import ImageSlider from './components/Slider';

function App() {
  return (
    <>
  <Header/>
  <Top/>
  <DropdownMenu />
  <Mission />
  <BusinessLines />
  <Package />
  <ImageSlider />
  </>
  );
}

export default App;
