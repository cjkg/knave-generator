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

  export default Inventory;