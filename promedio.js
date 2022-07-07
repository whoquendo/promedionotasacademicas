

function pushObject(){

    //funcion constructura del array de objetos
function materiasYNotas(materia, note, porcentaje) {
    this.materia = materia;
    this.note = note;
    this.porcentaje = porcentaje;
};
    const materiaInput =  document.getElementById("inputMat");
    const noteInput =  document.getElementById("inputNot");
    const porcentajeInput =  document.getElementById("inputPorc");

    const materiaInputValue = materiaInput.value;
    const noteInputValue = noteInput.value;
    const porcentajeInputValue = Number(porcentajeInput.value);

    const materiaInput2 =  document.getElementById("inputMat2").value;
    const noteInput2 =  document.getElementById("inputNot2").value;
    const porcentajeInput2 =  Number(document.getElementById("inputPorc2").value);

    objectPush =  new materiasYNotas(materiaInputValue, noteInputValue, porcentajeInputValue);
    objectPush2 = new materiasYNotas(materiaInput2, noteInput2, porcentajeInput2);

    //   console.log(porcentajeInputValue + porcentajeInput2 );

    console.log(objectPush);

      arrayPush();

};




function arrayPush(){
    nomMat =[];
    nomMat.push(objectPush);
    nomMat.push(objectPush2);
    console.log(nomMat);

     //Sumando solamente porcentajes
     const porcentajes = nomMat.map(function (nomMatObject) {
        return nomMatObject.porcentaje;
        console.log(porcentajes);
      });
      
      sumaDePorcentajes = porcentajes.reduce(function (sum = 0, newVal) {
        return sum + newVal;
      });  

      console.log(sumaDePorcentajes);

                 //Swcase para definir calculos segun porcentaje
                 switch (sumaDePorcentajes > 0) {
                    case sumaDePorcentajes > 100:
                      console.log(
                        `Revisa las notas que ingresaste, porque sus porcentajes superan el 100%, Ingresaste una suma de porcentajes de ${sumaDePorcentajes}%`
                      );
                      break;
                  
                    case sumaDePorcentajes == 100:
                      notasielporcentajeesiguala100();
                      break;
                  
                   case sumaDePorcentajes < 100:
                      //Nota si el porcentaje calificado es menor al 100%
                      notasielporcentajeesmenora100();
                      break;
                      
                      default:
                        alert(`intente de nuevo por favor, en caso de que vuelva a salir este mensaje, por favor comunicarse con el administrador para revisar sus notas`)
                    }
}

 //Nota si el porcentaje calificado es el 100%
 function notasielporcentajeesiguala100() {
    var porcentPorNota = nomMat.map(function (nomMatObject) {
      return nomMatObject.note * (nomMatObject.porcentaje / 100);
    });
  
    var sumaDeNotasPorPorcent = porcentPorNota.reduce(function (sum = 0, newVal) {
      return sum + newVal;
    });
    console.log(
      `Su nota Final es  ${sumaDeNotasPorPorcent} con el ${sumaDePorcentajes}% calificado.`
    );
  } 

// Cálculo si el porcentaje calificado es menor a 100%
  function notasielporcentajeesmenora100() {

    porcentRestante = 100 - sumaDePorcentajes;

    const porcentPorNota = nomMat.map(function (nomMatObject) {
      return nomMatObject.note * (nomMatObject.porcentaje / 100);
    });

    sumaDeNotasPorPorcent = porcentPorNota
      .reduce(function (sum = 0, newVal) {
        return sum + newVal;
      })
      .toFixed(2);

    notaRestParaGanar = (
      (3.0 - sumaDeNotasPorPorcent) /
      (porcentRestante / 100)
    ).toFixed(2);



  switch (notaRestParaGanar >= 0) {
    case notaRestParaGanar == 0:
      console.log(
        `Con las notas obtenidas gana la materia, independientemente de la nota que obtenga en el  ${porcentRestante}% que falta por calificar, su nota actual es ${sumaDeNotasPorPorcent}`
      );
      break;

    case notaRestParaGanar > 5:
      console.log(
        `La nota que debe obtener en el ${porcentRestante} % que falta por calificar es: ${notaRestParaGanar}, por lo tanto, ya no es posible que gane la materia`
      );
      break;
    default:
      console.log(
        `El porcentaje restante por calificar es el ${porcentRestante}%`
      );
      console.log(`Su nota es ${sumaDeNotasPorPorcent}`);
      console.log(
        `La nota que debe obtener en el ${porcentRestante}% que falta por calificar es de ${notaRestParaGanar}`
      );
  }
}

// js para formulario con diferentes campos

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}