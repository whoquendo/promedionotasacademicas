const nomMat = [
  {
    materia: "matematicas",
    note: 3.5,
    porcentaje: 30,
  },
  {
    materia: "matematicas",
    note: 2.5,
    porcentaje: 50,
  },
];

console.log(nomMat);

nomMat.push( {
    materia: "ciencias",
    note: 5,
    porcentaje: 15,
  },);

console.log(nomMat);

//Sumando solamente porcentajes

const porcentajes = nomMat.map(function (nomMatObject) {
  return nomMatObject.porcentaje;
});

const sumaDePorcentajes = porcentajes.reduce(function (sum = 0, newVal) {
  return sum + newVal;
});

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

switch (sumaDePorcentajes > 0) {
  case sumaDePorcentajes > 100:
    console.log(
      "revisa las notas que ingresaste porque sus porcentajes superan el 100%"
    );
    break;

  case sumaDePorcentajes == 100:
    notasielporcentajeesiguala100();
    break;

  default:
    //Nota si el porcentaje calificado es menor al 100%
    const porcentRestante = 100 - sumaDePorcentajes;

    const porcentPorNota = nomMat.map(function (nomMatObject) {
      return nomMatObject.note * (nomMatObject.porcentaje / 100);
    });

    const sumaDeNotasPorPorcent = porcentPorNota
      .reduce(function (sum = 0, newVal) {
        return sum + newVal;
      })
      .toFixed(2);

    const notaRestParaGanar = (
      (3.0 - sumaDeNotasPorPorcent) /
      (porcentRestante / 100)
    ).toFixed(2);

    switch (notaRestParaGanar > 0) {
      case notaRestParaGanar == 0:
        console.log(
          `Con las notas obtenidas gana la materia, independientemente de la nota que obtenga en el  ${porcentRestante}% que falta por calificar`
        );
        document.write("soy nota restante igual a cero");
        break;

      case notaRestParaGanar > 5:
        console.log(
          `La nota que debe obtener en el ${porcentRestante} % que falta por calificar es: ${notaRestParaGanar}, por lo tanto, ya no es posible que gane la materia`
        );
        document.write("Soy nota restante mayor a 5");
        break;

      default:
        document.write("Soy nota menor a 5");
        console.log(
          `El porcentaje restante por calificar es el ${porcentRestante}%`
        );
        console.log(`Su nota es ${sumaDeNotasPorPorcent}`);
        console.log(
          `La nota que debe obtener en el ${porcentRestante}% que falta por calificar es de ${notaRestParaGanar}`
        );
    }
}
