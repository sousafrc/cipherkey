import jsSHA from "jssha";

export const generateCipherKey = (toHash: string): string => {
  const shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF8" });

  shaObj.update(toHash);
  const cipherkey = shaObj.getHash("HEX");
  console.log("🚀 => generateCipherKey => cipherkey", cipherkey);

  cipherkey.substring(0, 7) + cipherkey.substring(cipherkey.length - 8);
  console.log(
    "🚀 => ",
    cipherkey.substring(0, 8) + cipherkey.substring(cipherkey.length - 8)
  );

  return cipherkey;
};