var anni = parseInt(prompt('quanti anni hai?') );
var km = parseInt(prompt('quanti km vuoi percorrere?') );

//prezzo totale non scontato
var totale = km * 0.21;

//sconto per erà
if (anni > 65){
  var sconto = totale * 40 / 100;
} else if (anni < 18) {
  var sconto = totale * 20 / 100;
} else {
  var sconto = 0;
}

//stampo totale con o senza sconto
document.getElementById('prezzo').innerHTML = 'ciao il costo del suo biglietto è di '+ (totale - sconto) + '€';
