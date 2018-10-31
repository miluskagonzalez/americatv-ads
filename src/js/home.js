// Or with jQuery
$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
});

const ad = {
product: null,
nameProduct: null,
priceProduct: 0,
price: 0,
recargo: 0,
}

const schedule = document.getElementById('schedule');

schedule.addEventListener('click', (event) => {
  if (event.target.nodeName === 'I') {
    console.log(event.target.dataset.name);
    console.log(event.target.dataset.date);
  }
});


{/* <button class="waves-effect waves-light btn modal-trigger" data-target="modal1">Modal</button> */}

//Creando modal
`<div id="modal1" class="modal">
<div class="navbar-fixed">
    <nav class="orange">
        <div class="nav-wrapper container">
            <h4 class="center-align modal-content">Datos de reserva</h4>
        </div>
    </nav>
</div>


<div class="modal-content">
    <p>Cliente: ${Cliente}</p>
    <p>Marca: ${Marca}</p>
    <p>Program: ${Programa}</p>
    <p>Fecha: ${Día}</p>
    <select>Hora: ${Hora}</select>
</div>

<div class="modal-footer">
    <button class="btn waves-effect waves-light" type="submit" name="action">Agregar reserva
        <i class="material-icons right">send</i>
    </button>
</div>

</div>`
