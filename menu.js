function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  function showLetters() {
    const letters = document.getElementById('aToZ');
    const numbers = document.getElementById('oneThruTen');

    letters.style.display = 'block';
    numbers.style.display = 'none';

  };

  function showNumbers() {
    const numbers = document.getElementById('oneThruTen');
    const letters = document.getElementById('aToZ');

    numbers.style.display = 'block';
    letters.style.display = 'none';
  }






