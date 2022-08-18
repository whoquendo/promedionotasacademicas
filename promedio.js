//interactuar con btn para modificar html desde js

const formNotas = document.querySelector('#formCalculoNotas');
const labelNotas = document.querySelector('#labelParaNotas');
const inputNotas = document.querySelector('#inputcalNumMaterias');
const btnNotas = document.querySelector('#mostrarCamposNotas');
const btnCalcular = document.querySelector('#div-btn-calcular');

btnNotas.addEventListener('click', crearInputs);

//funcion que se ejecuta con la propiedad onchange del input del form o con btn
//depende de  donde configuremos la propiedad en el html

function crearInput(nota,porcentaje) {

  // event.preventDefault();
  
  const inputNota = document.createElement('input');
  const inputPorc = document.createElement('input');
  
  inputNota.setAttribute('id', 'nota');
  inputNota.required = true;
  inputPorc.setAttribute('id', 'porcent');

  formNotas.appendChild(inputNota);
  formNotas.appendChild(inputPorc);
     
}

//condicion del input para ejecutar la funcion

function crearInputs (){ 
document.getElementById("mostrarCamposNotas").style.display = "none";
document.getElementById("inputcalNumMaterias").style.display = "none";

  let i = 1;
  let inputNotasValue = inputNotas.value;
while ( i <= inputNotasValue) {
  crearInput(i,i);
     i++;
}

// crea el boton para calcular notas 

const btnCalcularNotas = document.createElement('button');

btnCalcularNotas.innerHTML = "CALCULAR NOTAS";
btnCalcularNotas.type = "button";
btnCalcularNotas.setAttribute('id', 'btnCalcularDisplay');

btnCalcular.appendChild(btnCalcularNotas);

// se configura el evento click para ejecutar función cuando den click
btnCalcularDisp = document.querySelector('#btnCalcularDisplay');
btnCalcularDisp.addEventListener("click", calculoFinalNotas);

};

//funcion para abrir modal

function modalResultado() {

// Get the modal
var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btn = document.getElementById("btnCalcularDisplay");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
 
  modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}


function calculoFinalNotas() {

  let notas  = document.querySelectorAll('#nota');
  let botonCompra = document.getElementById('btnCalcular');
  const arrayNotas = [];

  let porcentajes  = document.querySelectorAll('#porcent');
  var arrayPorcentajes = [];
  
  notas.forEach((nota) => {
      arrayNotas.push(Number(nota.value));
    });

    porcentajes.forEach((porcent) => {
      arrayPorcentajes.push(Number(porcent.value));
    });
    
    //condicion para suma de porcentajes
    sumaDePorcentajes = arrayPorcentajes.reduce(function (sum = 0, newVal) {
      return sum + newVal;
    });  

    //Agrupar los porcentajes multiplicados por su correspondiente nota
    let longitudArrayNotas = arrayNotas.length;
    multNotaPorc = [];
    let j = 0;
    while (j < longitudArrayNotas) {
      multNotaPorc.push(arrayNotas[j] * (arrayPorcentajes[j] / 100));
      j++;
    };

    //If-else para definir calculos segun porcentaje

    if (sumaDePorcentajes > 0) {

         //Swcase para definir calculos segun porcentaje
     switch (sumaDePorcentajes > 0) {

      case sumaDePorcentajes > 100:
        
      modalResultado();
      document.getElementById("h1Text").innerText = `Revisa las notas que ingresaste, porque sus porcentajes superan el 100%, Ingresaste una suma de porcentajes de ${sumaDePorcentajes}%`;
        break;
    
        case sumaDePorcentajes == 100:
          notasielporcentajeesiguala100();
          break;
      
       case sumaDePorcentajes < 100:
          //Nota si el porcentaje calificado es menor al 100%
          notasielporcentajeesmenora100();
          break;

    }} else {
      modalResultado();

  document.getElementById("h1Text").innerText =`intente de nuevo por favor, en caso de que vuelva a salir este mensaje, por favor comunicarse con el administrador para revisar sus notas, empiece revisando los porcentajes ingresados`;
    };
    };


//Nota si el porcentaje calificado es el 100%
function notasielporcentajeesiguala100() {
sumaCienPorc = multNotaPorc.reduce(function (sum = 0, newVal) {
  return (sum + newVal);
}).toFixed(2);  

modalResultado();
document.getElementById("h1Text").innerText =   `Su nota Final es:  ${sumaCienPorc} con el ${sumaDePorcentajes}% calificado.`;
};

//Nota si el porcentaje es menor al 100%
function notasielporcentajeesmenora100() {

porcentRestante = 100 - sumaDePorcentajes;

sumaCienPorc = multNotaPorc.reduce(function (sum = 0, newVal) {
  return (sum + newVal);
}).toFixed(2);



notaRestParaGanar = (
  (3.0 - sumaCienPorc) /
  (porcentRestante / 100)
).toFixed(2);

  switch (notaRestParaGanar > 0) {
    case notaRestParaGanar == 0:
      modalResultado();
      document.getElementById("h1Text").innerText = `Con las notas obtenidas gana la materia, independientemente de la nota que obtenga en el  ${porcentRestante}% que falta por calificar, su nota actual es ${sumaCienPorc}`;
      break;
  
    case notaRestParaGanar > 5:
      modalResultado();
      document.getElementById("h1Text").innerText = `La nota que debe obtener en el ${porcentRestante} % que falta por calificar es: ${notaRestParaGanar}, por lo tanto, ya no es posible que gane la materia Su nota es: ${sumaCienPorc}`;
      break;

      case notaRestParaGanar < 5:
        modalResultado();

        document.getElementById("h1Text").innerText = `Su nota es ${sumaCienPorc}, El porcentaje restante por calificar es el ${porcentRestante}%; La nota que debe obtener en el ${porcentRestante}% que falta por calificar es de ${notaRestParaGanar}`;
          break;

      default:
        modalResultado();
        document.getElementById("h1Text").innerText = `ya no puede ganar la materia, debería sacar un ${notaRestParaGanar}`; 
}

};


