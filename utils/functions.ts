import jsSHA from "jssha";
import bigInt from "big-integer";
import * as bigintConversion from "bigint-conversion";

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const symbols = ".$#@";
const passwordCharacters = alphabets + digits + symbols;
console.log("🚀 => passwordCharacters.length", passwordCharacters.length);
const length = 20;

export const generateCipherKey = (toHash: string): string => {
  // Configurando a geração do SHA
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF16BE" });
  shaObj.update(toHash);

  // Gerar soma SHA3-512 para 'hashear' a string
  let hashBase64 = shaObj.getHash("B64");
  let hashBigInteger = bigInt(bigintConversion.base64ToBigint(hashBase64));

  let cipherkey = "";
  for (let i = 0; i < length; i++) {
    let charSubstring = passwordCharacters;
    while (charSubstring.length > 1) {
      if (hashBigInteger.isOdd()) {
        charSubstring = charSubstring.slice(0, charSubstring.length / 2);
      } else {
        charSubstring = charSubstring.slice(charSubstring.length / 2);
      }
      hashBigInteger = hashBigInteger.shiftRight(1);
    }
    cipherkey += charSubstring;
  }
  console.log("🚀 => generateCipherKey => cipherkey", cipherkey);

  return cipherkey;
};