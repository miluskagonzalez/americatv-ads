// Or with jQuery
$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
});

//Funcionalidad select
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

//Funcionalidad modal
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

const ad = { // 
  product: '',
  priceProduct: 0,
  showName: null, //name
  showPrice: 0, //fee
  showDay: null,
  schedule: null,
  recargo: 0 // 
}

const schedule = document.getElementById('schedule');
const brands = document.getElementById('brands');

//Creando elementos del DOM para mostrar las marcas
getBrands().then(brand => {
  const arr = brand;
  //console.log(arr);
  arr.forEach((e, i) => {
    const optionBrand = document.createElement('option');
    optionBrand.textContent = arr[i].product;
    optionBrand.value = arr[i].product;
    brands.appendChild(optionBrand);
  });
});

brands.addEventListener('click', (event) => {
  console.log(event.target.value);
  const brand = event.target.value;
  ad.product = brand;
});




schedule.addEventListener('click', (event) => {
  if (event.target.nodeName === 'I') {
    getShowInfo(event.target.dataset.name).then(o => {
      /* console.log(o.data()); */
     
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
   
   <p>Marca: ${ad.product}</p>
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


