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

function Demo(props) {
  return (
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-md-4 "><strong>NAME:</strong> Svetlana </div>
        <div class="col-md-4"><strong>AGE:</strong> {props.age}</div>
        <div class="col-md-4"><strong>ALIGNMENT:</strong> {props.alignment}</div>
      </div>
    </div>
  )
}

function BasicStats(props) {
  return (

    <div class="container-fluid">
      <div class="text-center">
        <h3>Basic Stats</h3>
      </div>
      <div class="row text-center">
        <div class="col-md-3"><strong>LEVEL:</strong> {props.level} </div>
        <div class="col-md-3"><strong>HP:</strong> {props.hitPoints}/{props.hitPoints}</div>
        <div class="col-md-3"><strong>MOVE SPEED:</strong> {props.moveSpeed} feet</div>
        <div class="col-md-3"><strong>EXPLORE SPEED:</strong> {props.explorationSpeed} feet</div>
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
      <table class="table table-striped">
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



function App() {
  return (
    <div>
      <Title />
      <Demo {...character} />
      <BasicStats {...character} />
      <Abilities {...character.attributes} />
      <Traits {...character.traits} />
    </div>
  );
}

export default App;
