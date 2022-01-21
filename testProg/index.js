var a = document.getElementById('buttonId');

  a.addEventListener('click', function(e) {
    e.preventDefault();
    modal.innerHTML = "this.href";
    overlay.style.display = 'block';
  }, false);

 
 
overlay.addEventListener('click', function(e){
    if( e.target === this ) {
        this.style.display = 'none';
  }
}, false);