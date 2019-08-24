window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(number, text) {
  let messageEncoded="";
  for (let actualLetter = 0; actualLetter < text.length; actualLetter++) {
    const characterCode = text.charCodeAt(actualLetter);
       
    if ( characterCode >= 97 && characterCode <= 122) {
      const calc =((characterCode - 97 + number)%26) + 97;
      const encodedCharacter = String.fromCharCode(calc);
      messageEncoded += encodedCharacter;
    }
       
    else if (characterCode >= 60 && characterCode <= 90) {
      const calc = ((characterCode - 65 + number)%26) + 65;
      const encodedCharacter = String.fromCharCode(calc);
      messageEncoded += encodedCharacter;
    }

    else { messageEncoded += text[actualLetter]; }
        
  }
  return messageEncoded;
}

function decode (number, text) {
  let messageDecoded="";
  for (let actualLetter = 0; actualLetter < text.length; actualLetter++) {
    const characterCode = text.charCodeAt(actualLetter);

    if ( characterCode >= 97 && characterCode <= 122) {
      const calc =((((characterCode - 97 - number)%26)+26)%26) + 97;
      const decodedCharacter = String.fromCharCode(calc);
      messageDecoded += decodedCharacter;
    }
        
    else if (characterCode >= 60 && characterCode <= 90) {
      const calc = ((((characterCode - 65 - number) %26)+26)%26) + 65;
      const decodedCharacter = String.fromCharCode(calc);
      messageDecoded += decodedCharacter;
    }
            
    else { messageDecoded += text[actualLetter]; } 
               
  }
    
  return messageDecoded;
}