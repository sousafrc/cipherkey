import base85 from "base85";
import jsSHA from "jssha";

const allowedCharacters =
  "DZ@8cKYle*tGmsVv%Tg3nU4fyS5N.uwLRC&kFbrB2o#I1QzjP$diMhWqA906JpaXxEHO7";
const validSymbols = "@#$%&*.";

function replaceAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

export const generateCipherKey = (
  toHash: string,
  cipherkeyLength: number
): string => {
  // Configura a geração do SHA config
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF16BE" });
  shaObj.update(toHash);

  // Gera a soma SHA3-512 em HEX para a string 'toHash'
  let hashHex = shaObj.getHash("HEX");

  // Codifique o hexadecimal em base85
  let encodedHash = base85.encode(hashHex);

  let cipherkey = "";
  for (let i = 0; i < cipherkeyLength; i++) {
    // Se a string codificada conter um caractere inválido
    if (!allowedCharacters.includes(encodedHash[i])) {
      // Substitui o caractere inválido pelo caractere da string 'symbols' no índice i
      encodedHash = replaceAt(
        encodedHash,
        i,
        validSymbols[i % validSymbols.length]
      );
    }

    // Anexa o caractere da string codificada no CipherKey
    cipherkey += encodedHash[i];
  }

  return cipherkey;
};