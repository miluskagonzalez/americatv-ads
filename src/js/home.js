// Or with jQuery
$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
});

//Funcionalidad select
document.addEventListener('DOMContentLoaded', ()  => {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

//Funcionalidad modal
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

const ad = { // 
  product: null,
  priceProduct: 0,
  showName: null, //name
  showPrice: 0, //fee
  showDay: null,
  schedule: null,
  recargo: 0 // 
}

const schedule = document.getElementById('schedule');

schedule.addEventListener('click', (event) => {
  if (event.target.nodeName === 'I') {
    getShowInfo(event.target.dataset.name).then(o => {
      /* console.log(o.data()); */
      const { fee, name, schedule } = o.data(); // precio, nombre del programa, día 
      const intervals = schedule.find(({ day }) => day === event.target.dataset.date)

      ad.showName = name;
      ad.showDay = intervals.day;
      ad.schedule = intervals.intervals;
      ad.showPrice = fee;

      //Creando modal
      document.getElementById('modal1').innerHTML = 
      `
<div class="navbar-fixed">
   <nav class="orange">
       <div class="nav-wrapper container ">
           <h4 class="center-align modal-content">Datos de reserva</h4>
       </div>
   </nav>
</div>


<div class="modal-content">
   <p>Programa: ${ad.showName}</p>
   <p>Fecha: ${ad.showDay}</p>
<select>Hora: ${ad.schedule.reduce((interval) =>  `<option>${interval}</option>`, '')}</select>
</div>

<div class="modal-footer">
   <button class="btn waves-effect waves-light" type="submit" name="action">Agregar reserva
       <i class="material-icons right">send</i>
   </button>
</div>`
    })
    /* console.log(event.target.dataset.date); */

  }
});
