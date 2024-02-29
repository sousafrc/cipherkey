import jsSHA from "jssha";
import bigInt from "big-integer";
import * as bigintConversion from "bigint-conversion";

const hashCharacters =
  "&E@U2VpRz=5CYeD38PIZLXAxTmJBifs*wr1.qkGovWF7ta6NShdbj#uOnQ%HKgMcyl90$4";
const hashLength = 20;

export const generateCipherKey = (toHash: string): string => {
  // Configurando a geração do SHA
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF16BE" });
  shaObj.update(toHash);

  // Gerar soma SHA3-512 para 'hashear' a string
  let hashBase64 = shaObj.getHash("B64");
  let hashBigInteger = bigInt(bigintConversion.base64ToBigint(hashBase64));

  console.log("🚀 => hashBigInteger", hashBigInteger.toString());

  let newHash = "";
  for (let i = 0; i < hashLength; i++) {
    let charSubstring = hashCharacters;
    while (charSubstring.length > 1) {
      if (hashBigInteger.isOdd()) {
        charSubstring = charSubstring.slice(0, charSubstring.length / 2);
      } else {
        charSubstring = charSubstring.slice(charSubstring.length / 2);
      }
      hashBigInteger = hashBigInteger.shiftRight(1);
    }
    newHash += charSubstring;
  }
  console.log("🚀 => newHash", newHash);

  return newHash;
};