import './App.css';
import Character from './character/Character';
import Abilities from './components/Abilities';
import BasicStats from './components/BasicStats';
import Credits from './components/Credits';
import Inventory from './components/Inventory';
import Title from './components/Title';
import Traits from './components/Traits';
import WarGear from './components/WarGear';

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
