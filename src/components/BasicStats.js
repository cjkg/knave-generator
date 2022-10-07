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

export default BasicStats;