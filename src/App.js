import './App.css';
import { Character } from './character/Character';
import Title from './components/Title';
import BasicStats from './components/BasicStats';
import Traits from './components/Traits';
import Abilities from './components/Abilities';
import WarGear from './components/WarGear';
import Inventory from './components/Inventory';
import Credits from './components/Credits';

const character = new Character();

function App() {
  return (
    <div>
      <Title />
      <BasicStats {...character} />
      <Abilities {...character.attributes} />
      <Traits {...character.traits} />
      <WarGear {...character.inventory} />
      <Inventory {...character.inventory} />
      <Credits />
    </div>
  );
}

export default App;
