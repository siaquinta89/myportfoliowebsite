
// var voices = ['about', 'works', 'contacts'];


// //Event Listener click
// document.querySelector('#search-value').addEventListener('search', function(){ 

//     var input = document.getElementById("search-value").value;
//     var inputUpper = input.toLowerCase();
//         for (i=0; i<voices.length; i++){
//             if (voices[i] == inputUpper) {
//                 //Mostro il risultato
//                 document.querySelector('.test-' + inputUpper).style.display='block';                
//                 return;
//         }
//     }
    
// });

//DROPDOWN MENU
function myBirthday() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myCourses() {
  document.getElementById("myDropdown-2").classList.toggle("show");
}

function myJobs() {
  document.getElementById("myDropdown-3").classList.toggle("show");
}

function myBachelor() {
  document.getElementById("myDropdown-4").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
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
  }

 
  
