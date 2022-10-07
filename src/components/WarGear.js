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

  export default WarGear;