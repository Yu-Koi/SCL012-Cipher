window.cipher = {
	encode: (offset, message) => {

  	// - Prepara una Cadena (string) para el message cifrado
    let result = '';
    
    // - Recorre el message letra a letra y lo va cifrando
    for (let i=0; i<message.length; i++){
      
      // - Extrae caracter del message según el índice (i)
      let letterPosition = message[i];
      
      // - Verifica si el caracter es una letra según el ASCII
      if (letterPosition.match(/[a-z]/i)) {

        // - Obtiene el Valor ASCII
        let asciiCodeLetter = message.charCodeAt(i);

        // - Caso para letras Mayúsculas según el ASCII
        if ((asciiCodeLetter >= 65) && (asciiCodeLetter <= 90)){
          // - Se Aplica el Método CESAR
          letterPosition = String.fromCharCode(((asciiCodeLetter - 65 + offset) % 26) + 65);
          result += letterPosition;
        }
      }
    }
  return result      
  },

  decode: (offset, message) => {
  
    // - Prepara una Cadena (string) para el message cifrado
    let result = '';
    
    // - Recorre el message letra a letra y lo va cifrando
    for (let i=0; i<message.length; i++){
  
      // - Extrae caracter del message según el índice (i)
      let letterPosition = message[i];
  
      // - Verifica si el caracter es una letra según el ASCII
      if (letterPosition.match(/[a-z]/i)) {
        
        // - Obtiene el Valor ASCII
        let asciiCodeLetter = message.charCodeAt(i);
  
        // - Caso para letras Mayúsculas según el ASCII
        if ((asciiCodeLetter >= 65) && (asciiCodeLetter <= 90)){
          // - Se Aplica el Método CESAR
          letterPosition = String.fromCharCode(((asciiCodeLetter - 90 - offset) % 26) + 90);
          result += letterPosition;
        }
      }
    }
    return result
  },
};