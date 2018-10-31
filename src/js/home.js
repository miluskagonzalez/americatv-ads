
/* var article = document.getElementById('electriccars'); */
const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    console.log(event.target.dataset.indexNumber);
});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

/*   $(document).ready(function(){
    $('.modal-trigger').leanModal();
  }); */
