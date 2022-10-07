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

  export default Traits;