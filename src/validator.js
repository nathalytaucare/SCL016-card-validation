const validator = {
  isValid(code) {
    // console.log(Array.from(code).map(Number).reverse());
    let newCode = Array.from(code).reverse();           // Cambia el codigo ingresado a un array y da vuelta el codigo.
    let sumaTotal = 0;                                  // inicializacion de la variable sumaTotal

    for (let i = 0; i < newCode.length; i++) {          // Analiza cada posición del array
      newCode[i] = parseInt(newCode[i], 10);            // Convierte un argumento de tipo cadena y devuelve un entero de la base especificada, base 10  indica una conversión a número decimal
      if (i % 2 != 0) {                                 // Busca las posiciónes impares 
        newCode[i] = newCode[i] * 2;                    // multipica cada numero por dos 
        if (newCode[i] > 9) {                           // Si el resultado de la multiplicación es >9 se suma los digitos.
          let number = newCode[i];
          let newnumber = number.toString().split('');  // el numero de dos digitos se convierte en una cadena y luego en un array
          let suma = 0;
          for (let j = 0; j < newnumber.length; j++) {
            newnumber[j] = parseInt(newnumber[j], 10);  // Se vuelve a convertir en numero entero 
            suma += newnumber[j];                       // se suman los digitos 
          }
          newCode[i] = suma;                            // Esta suma se reposiciona en su lugar
        }
      }
      sumaTotal += newCode[i];                          // Finalmente Se suman todos los digitos del codigo ingresado.
    }
    //console.log(sumaTotal);

    if (sumaTotal % 10 == 0 && sumaTotal!=0) {                          // Se verifica si la suma total de sus digitos es multiplo de 10
      return true;
    } else {
      return false;
    }
  },

  maskify(code) {                                       // Enmascaramiento de los digitos de números de la tarjeta 

    if (code.length < 4) {
      return code;
    } else {
      
      const last4Characters = code.substr(-4);                                         // Nueva cadena que contiende la sección extraída del codigo, -4 extrae los ultimos cuatro dígitos  
      const maskingCharacters = code.substr(0, code.length - 4).replace(/\w/g, '#');   // nueva cadena que extrae todos los gigitos menos los ultimos 4 y los reemplaza por #
      //console.log(maskingCharacters + last4Characters);
      return maskingCharacters + last4Characters;                                      // Retorna toda la nueva cadena
    }

  }
};

export default validator;
