console.log("Hello world");

// variabila declarata si apoi atribuita valoare
let userName;
userName = "Monica";
console.log(userName);
userName = "_monica_";
console.log(userName);

// variabila declarata si initiata cu o valoare intr-o linie
let email = "user@test.com";
console.log(email);

// constanta declarata cu valoare
const pi = 3.14;
// pi = 3.12; - interzisa atribuirea de valori unei constante
console.log(pi);

// Operatii aritmetice
// suma
const sumResult = 12 + 32;
console.log("sumResult: ", sumResult);

// scadere
const differenceResult = 33 - 71;
console.log("difference: ", differenceResult);

// inmultire
const a = 7;
const b = 44;
const multiplyResult = a * b;
console.log(`rezultat inmultire dintre ${a} si ${b} este ${multiplyResult}`);

// impartire
const divisionResult = 12 / 5;
console.log("division result: ", divisionResult);

// rest impartire (modulo)
const rest = 12 % 5;
console.log("rest impartire: ", rest);

// TIPURI DE DATE
// Number
let myNumber = 123;
myNumber = myNumber + 1;
console.log("number: ", myNumber);
console.log("Max safe integer is: ", Number.MAX_SAFE_INTEGER);
console.log("Max number: ", Number.MAX_VALUE);

// BigInt
let bigNumber = 159305763947583754857834n;
console.log("big number: ", bigNumber);

// String
let password = "secret";
console.log("password: ", password);

// accesarea unui caracter dintr-un string
let secondLetterOfPassword = password[1];
console.log("a doua litera: ",secondLetterOfPassword);

// concatenare stringuri:
let firstName = "Ion";
let lastName = "Ionescu";
let fullName = firstName + " " + lastName;
console.log("full name: ", fullName);

// Lungimea string-ului 
let myString = "hello people";
let myStringLength = myString.length;
console.log(`myString: `, myString);
console.log(`length: `, myStringLength);

// metode string
let baseString = "Base";
let upper = baseString.toUpperCase();
let lower = baseString.toLowerCase();
console.log("base: ", baseString);
console.log("uppercase: ", upper);
console.log("lowercase: ", lower);

let substringOfBase = baseString.substring(0, 2);
console.log("substringOfBase: ", substringOfBase);
console.log("substringOfBase.charAt(0): ",substringOfBase.charAt(0));

