
var voices = ['about', 'works', 'contacts'];


//Event Listener click
document.querySelector('#search-value').addEventListener('search', function(){ 

    var input = document.getElementById("search-value").value;
    var inputUpper = input.toLowerCase();
        for (i=0; i<voices.length; i++){
            if (voices[i] == inputUpper) {
                //Mostro il risultato
                document.querySelector('.test-' + inputUpper).style.display='block';                
                return;
        }
    }
    
});