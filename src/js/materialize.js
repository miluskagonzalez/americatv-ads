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