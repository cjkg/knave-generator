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

  export default Abilities;