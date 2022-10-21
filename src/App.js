import './App.css';

import {Nav} from './components/Nav/nav'
import {Carousel} from './components/Carousel/carousel'
import {Benefits} from './components/benefits/benefits'
import {Creative} from './components/Creative/creative'
import {Cards} from './components/Creative-cards/cards'
import {Example} from './components/ExapmlesSection/example';

function App() {
  return (
   <div>
   
   <Nav/>
  <Carousel/>
  <Benefits/>
  <Creative/>
  <Cards/>
  <Example/>
   </div>
  );
}

export default App;
