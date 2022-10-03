import logo from './logo.svg';
import './App.css';
import { useTable } from 'react-table';
import { Character } from './character/Character';

const character = new Character();

function Title(props) {
  return (
    <div class="text-center">
      <h1>Knave</h1>
    </div>
  )
}

function BasicStats(props) {
  return (
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-md-3"><strong>NAME:</strong> {props.name} </div>
        <div class="col-md-3"><strong>AGE:</strong> {props.age}</div>
        <div class="col-md-3"><strong>ALIGNMENT:</strong> {props.alignment}</div>
        <div class="col-md-3"><strong>LEVEL:</strong> {props.level} </div>
        <div class="col-md-3"><strong>HP:</strong> {props.hitPoints}/{props.hitPoints}</div>
        <div class="col-md-3"><strong>DAMAGE:</strong> {props.damage}</div>
        <div class="col-md-3"><strong>ARMOR DEFENSE:</strong> {props.armorDefense}</div>
        <div class="col-md-3"><strong>ITEM SLOTS:</strong> {props.usedSlots}/{props.maxSlots}</div>
        <div class="col-md-4"><strong>MOVE SPEED:</strong> {props.moveSpeed} feet</div>
        <div class="col-md-4"><strong>EXPLORE SPEED:</strong> {props.explorationSpeed} feet</div>
        <div class="col-md-4"><strong>MAX HENCHMEN:</strong> {props.maxHenchmen}</div>
      </div>
    </div>
  )
}

function Traits(props) {
  return (
    <div class="container-fluid">
      <div class="text-center">
        <h3>Traits</h3>
      </div>
      <div class="row text-center">
        <div class="col-md-2"><strong>PHYSIQUE:</strong> {props.physique} </div>
        <div class="col-md-2"><strong>FACE:</strong> {props.face}</div>
        <div class="col-md-2"><strong>SKIN:</strong> {props.skin}</div>
        <div class="col-md-2"><strong>HAIR:</strong> {props.hair}</div>
        <div class="col-md-2"><strong>CLOTHING:</strong> {props.clothing}</div>
        <div class="col-md-2"><strong>VIRTUE:</strong> {props.virtue}</div>
        <div class="col-md-2"><strong>VICE:</strong> {props.vice}</div>
        <div class="col-md-2"><strong>SPEECH:</strong> {props.speech}</div>
        <div class="col-md-2"><strong>BACKGROUND:</strong> {props.background}</div>
        <div class="col-md-2"><strong>MISFORTUNE:</strong> {props.misfortune}</div>
      </div>
    </div>
  )
}

function Abilities(props) {
  return (
    <div class="container-fluid">
      <div class="text-center">
        <h3>Abilities</h3>
      </div>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope='col'>Ability</th>
            <th scope='col'>Bonus</th>
            <th scope='col'>Defense</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Constitution</td>
            <td>{props.con.bonus}</td>
            <td>{props.con.defense}</td>
          </tr>
          <tr>
            <td>Strength</td>
            <td>{props.str.bonus}</td>
            <td>{props.str.defense}</td>
          </tr>
          <tr>
            <td>Dexterity</td>
            <td>{props.dex.bonus}</td>
            <td>{props.dex.defense}</td>
          </tr>
          <tr>
            <td>Wisdom</td>
            <td>{props.wis.bonus}</td>
            <td>{props.wis.defense}</td>
          </tr>
          <tr>
            <td>Intelligence</td>
            <td>{props.int.bonus}</td>
            <td>{props.int.defense}</td>
          </tr>
          <tr>
            <td>Charisma</td>
            <td>{props.cha.bonus}</td>
            <td>{props.cha.defense}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function WarGear(props) {
  return(
    <div class="container-fluid">
      <div class="text-center">
        <h3>War Gear</h3>
      </div>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope='col'>Type</th>
            <th scope='col'>Name</th>
            <th scope='col'>Damage</th>
            <th scope='col'>Defense</th>
            <th scope='col'>Quality</th>
            <th scope='col'>Hands</th>
            <th scope='col'>Slots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.weapon.type}</td>
            <td>{props.weapon.name}</td>
            <td>{props.weapon.damage}</td>
            <td>{props.weapon.defense}</td>
            <td>{props.weapon.quality}</td>
            <td>{props.weapon.hand}</td>
            <td>{props.weapon.slot}</td>
          </tr>
          <tr>
            <td>{props.armor.type}</td>
            <td>{props.armor.name}</td>
            <td>{props.armor.damage}</td>
            <td>{props.armor.defense}</td>
            <td>{props.armor.quality}</td>
            <td>{props.armor.hand}</td>
            <td>{props.weapon.slot}</td>
          </tr>
          <tr>
            <td>{props.helmet.type}</td>
            <td>{props.helmet.name}</td>
            <td>{props.helmet.damage}</td>
            <td>{props.helmet.defense}</td>
            <td>{props.helmet.quality}</td>
            <td>{props.helmet.hand}</td>
            <td>{props.helmet.slot}</td>
          </tr>
          <tr>
            <td>{props.shield.type}</td>
            <td>{props.shield.name}</td>
            <td>{props.shield.damage}</td>
            <td>{props.shield.defense}</td>
            <td>{props.shield.quality}</td>
            <td>{props.shield.hand}</td>
            <td>{props.shield.slot}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Inventory(props) {
  return(
    <div class="container-fluid">
      <div class="text-center">
        <h3>Inventory</h3>
      </div>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Slots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.item1.name}</td>
            <td>{props.item1.slot}</td>
          </tr>
          <tr>
            <td>{props.item2.name}</td>
            <td>{props.item2.slot}</td>
          </tr><tr>
            <td>{props.item3.name}</td>
            <td>{props.item3.slot}</td>
          </tr><tr>
            <td>{props.item4.name}</td>
            <td>{props.item4.slot}</td>
          </tr>
          <tr>
            <td>{props.ration1.name}</td>
            <td>{props.ration1.slot}</td>
          </tr>
          <tr>
            <td>{props.ration2.name}</td>
            <td>{props.ration2.slot}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  }

function App() {
  return (
    <div>
      <Title />
      <BasicStats {...character} />
      <Abilities {...character.attributes} />
      <Traits {...character.traits} />
      <WarGear {...character.inventory} />
      <Inventory {...character.inventory} />
    </div>
  );
}

export default App;
