

function pushObject(){

  console.log("estoy entrando en mi function pushObject");
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

    // const materiaInput2 =  document.getElementById("inputMat2").value;
    const noteInput2 =  document.getElementById("inputNot2").value;
    const porcentajeInput2 =  Number(document.getElementById("inputPorc2").value);
    
    const noteInput3 =  document.getElementById("inputNot3").value;
    const porcentajeInput3 =  Number(document.getElementById("inputPorc3").value);

    objectPush =  new materiasYNotas(materiaInputValue, noteInputValue, porcentajeInputValue);
    objectPush2 = new materiasYNotas(materiaInputValue, noteInput2, porcentajeInput2);
    objectPush3 = new materiasYNotas(materiaInputValue, noteInput3, porcentajeInput3);

    //   console.log(porcentajeInputValue + porcentajeInput2 );

    console.log(objectPush);

      arrayPush();

};


function arrayPush(){
    nomMat =[];
    nomMat.push(objectPush);
    nomMat.push(objectPush2);
    nomMat.push(objectPush3);
    console.log(nomMat);

    //inicio prueba grupos materias
    let grupoMaterias = {};

    nomMat.forEach(materia => {
        const nomGrupoMat = nomMat.materia;
        if (!grupoMaterias[nomGrupoMat]) grupoMaterias[nomGrupoMat] = [];
        grupoMaterias[nomGrupoMat].push(materia);
    });

    console.log(`Estos son los arrays formados por grupos de materias ${grupoMaterias}`, grupoMaterias);


//fin pruega grupo materias

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

function add() {
  var formfield = document.getElementById('notaPorc');
  var newField = document.createElement('input');
  newField.setAttribute('type', 'number')
  newField.setAttribute('name', 'text')
  newField.setAttribute('class', 'text')
  newField.setAttribute('id', 'inputNot3')
  newField.setAttribute('siz', '20')
  newField.setAttribute('placeholder', 'Ingrese Nota');
  formfield.appendChild(newField);

  var formfield = document.getElementById('notaPorc');
  var newField = document.createElement('input');
  newField.setAttribute('type', 'number')
  newField.setAttribute('name', 'text')
  newField.setAttribute('class', 'text')
  newField.setAttribute('id', 'inputPorc3') 
  newField.setAttribute('siz', '20')
  newField.setAttribute('placeholder', 'Ingrese Porcentaje');
  formfield.appendChild(newField);

}

function remove() {
  var formfield = document.getElementById('notaPorc');
  var input_tags = 
  formfield.getElementsByTagName('input');
  if (input_tags.length >2) {
    formfield.removeChild(input_tags[(input_tags.length) -1]);
    formfield.removeChild(input_tags[(input_tags.length) -1]);
  }
};


