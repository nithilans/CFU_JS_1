function makeid(length) {
  let characters = '';
      let uppcase = document.getElementById("uppercase");
      let lowcase = document.getElementById("lowercase");
      let num = document.getElementById("numbers");
      let symbols = document.getElementById("symbols");
      if (uppcase.checked===true){
          characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }if (lowcase.checked===true) {
          characters = characters + "abcdefghijklmnopqrstuvwxyz";
      }if (num.checked===true){
          characters = characters + "0123456789"
      }if (symbols.checked===true){
          characters = characters + "!@#$%^&*"
      }
  let result = '';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  console.log(characters);
  return result;
}
/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById('length').value;
  document.getElementById('result').innerHTML = charLength;
  let password__result = document.getElementById("password__result");
  password__result.setAttribute("maxlength", charLength )
return charLength;
}
function  nithilan() {
  let charLength = document.getElementById('length').value;
  let password__result = document.getElementById("password__result");
  password__result.value =makeid(charLength)
console.log("nithilan");
}
document.getElementById('length').addEventListener('change', charLength)
let genrate = document.getElementById('btn');
genrate.addEventListener("click", nithilan)