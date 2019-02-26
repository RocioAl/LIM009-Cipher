window.cipher = {
    encode: (string) => {
      let salida = '';
      for (let i = 0; i < string.length;i++) {
        let code = string.charCodeAt(i);
        let code2 = string[i];
        if ((code >= 65) && (code <= 90)) {
          code2 = String.fromCharCode(((code - 65 + 33) % 26) + 65);
        } else if ((code >= 97) && (code <= 122)) {
          code2 = String.fromCharCode(((code - 97 + 33) % 26) + 97);
        }
        salida += code2;
        }
        return salida;
    },

    decode: (string) => {



    }
  }
