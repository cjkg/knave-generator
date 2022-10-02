import logo from './logo.svg';
import './App.css';
import { useTable } from 'react-table';
import { Character } from './character/Character';

const character = new Character();

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
      <div class ="text-center">
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
/*
function Traits(props) {
  return (
    true;
  )
}*/

function Title(props) {
  return (
    <div class="text-center">
      <h1>Knave</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Title />
      <Demo {...character} />
      
      <BasicStats {...character} />
    </div>
  );
}

export default App;
