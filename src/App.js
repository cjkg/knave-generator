import './App.css';
import { Character } from './character/Character';

const character = new Character();

function Title(props) {
  return (
    <div class="container text-center">
      <h1>Build-a-Knave</h1>
    </div>
  )
}

function BasicStats(props) {
  return (
    <div class="container">
      <div class="row text-center">
        <div class="col"><h5>Name:</h5> {props.name}</div>
        <div class="col"><h5>Age:</h5> {props.age}</div>
        <div class="col"><h5>Alignment:</h5> {props.alignment}</div>
        <div class="w-100"></div>
        <div class="col"><h5>Lvl:</h5> {props.level}</div>
        <div class="col"><h5>HP:</h5> {props.hitPoints}/{props.hitPoints}</div>
        <div class="col"><h5>Dmg:</h5> {props.damage}</div>
        <div class="w-100"></div>
        <div class="col"><h5>Armor Def:</h5> {props.armorDefense}</div>
        <div class="col"><h5>Move Spd:</h5> {props.moveSpeed}'</div>
        <div class="col"><h5>Explore Spd:</h5> {props.explorationSpeed}'</div>
        <div class="w-100"></div>
        <div class="col"><h5>Max Slots:</h5> {props.maxSlots}</div>
        <div class="col"><h5>Max Henchmen:</h5> {props.maxHenchmen}</div>
      </div>
    </div>

  )
}

function Traits(props) {
  return (
    <div class="container">
      <div class="row text-center">
        <div>
          <h3>Traits</h3>
        </div>
        <div class="row text-center">
          <div class="col"><h5>Physique:</h5> {props.physique} </div>
          <div class="col"><h5>Face:</h5> {props.face}</div>
          <div class="col"><h5>Skin:</h5> {props.skin}</div>
          <div class="col"><h5>Hair:</h5> {props.hair}</div>
          <div class="col"><h5>Clothing:</h5> {props.clothing}</div>
          <div class="w-100"></div>
          <div class="col"><h5>Virtue:</h5> {props.virtue}</div>
          <div class="col"><h5>Vice:</h5> {props.vice}</div>
          <div class="col"><h5>Speech:</h5> {props.speech}</div>
          <div class="col"><h5>Background:</h5> {props.background}</div>
          <div class="col"><h5>Misfortune:</h5> {props.misfortune}</div>
        </div>
      </div>
    </div>
  )
}

function Abilities(props) {
  return (
    <div class="container">
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope='col'><h5>Ability</h5></th>
            <th scope='col'><h5>Bonus</h5></th>
            <th scope='col'><h5>Defense</h5></th>
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
  return (
    <div class="container">
      <div class="text-center">
        <h3>War Gear</h3>
      </div>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope='col'><h5>Type</h5></th>
            <th scope='col'><h5>Name</h5></th>
            <th scope='col'><h5>Dmg</h5></th>
            <th scope='col'><h5>Def</h5></th>
            <th scope='col'><h5>Quality</h5></th>
            <th scope='col'><h5>Hands</h5></th>
            <th scope='col'><h5>Slots</h5></th>
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
  return (
    <div class="container">
      <div class="text-center">
        <h3>Inventory</h3>
      </div>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope='col'><h5>Name</h5></th>
            <th scope='col'><h5>Slots</h5></th>
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

function Credits(props) {
  return (
    <div class="container">
      <div class="text-center">
        <h3>Credits</h3>
      </div>
      <p>
        <strong>Knave</strong> is by Ben Milton and can be bought <a href='https://www.drivethrurpg.com/product/250888/Knave'>here</a>.
      </p>
      <p>
        This page was built by Chris Gibilisco, and inspired by <a href='https://unwarysage.github.io/scurvy'>Scurvy</a> and John Riccardi's <a href='https://riccjohn.github.io/knave-character-generator/'>Knave Character Generator.</a>
      </p>
      <p>
        The wonderful list of random names is taken with thanks from a post by <a href='https://www.reddit.com/r/DnDBehindTheScreen/comments/50pcg1/a_post_about_names_names_for_speakers_of_the/'>OrkishBlade.</a>
      </p>
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
      <Credits />
    </div>
  );
}

export default App;
