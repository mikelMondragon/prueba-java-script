// --------------------EJERCICIO 01--------------------
//Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y 
// separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

// Give a word and return a string with all the characters in upper case and separated by white spaces.
// @param word : String = The word tha should be modified.
//@return modifiedWord : String =  the original word in upper case and with blank spaces.
const ejercicio01 = word =>{
    const upperCaseWord = word.toUpperCase(); //Create another string with all the chars in upper case.
    let modifiedWord = ""; //Declare a empty string that will storage the final string.
    for(let i = 0; i < upperCaseWord.length; i++){ // Iterate the string with upper case chars.
        modifiedWord += `${upperCaseWord.charAt(i)} `; // Add the iterated character with a white space.
    }
    return modifiedWord;// Return the modified string.
}

const modifiedWord = ejercicio01("ana");
console.log(modifiedWord);


// --------------------EJERCICIO 02--------------------
//Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. 
//Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.


// Given a string count the number of words inside.
// @param string : String = the string that will be evaluated.
// @return Number = the number of words inside the string.
const ejercicio02 = string => string.split(" ").length; // Split the given string with white spaces and
//  return the length of the splited array.

console.log(ejercicio02("Antonio Alberto Jesús"))


// --------------------EJERCICIO 03--------------------
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.


// Count the occurrences of a char inside a string.
// @param string : String = The string that will be evaluated.
// @oaram charToCount: String = The char that will be searched in the string.
// @retun charCount : Number = The total occurrences of a char inside the string.
const ejercicio03 = (string, charToCount) =>{
    let charCount = 0; // Declare the number that will represent the occurrences.
    for(let i = 0; i < string.length; i++){ // Iterate thougth the given string.
        if (string.charAt(i) === charToCount) // Check if the iterated character is equal to the giver character.
            charCount++;    //If is the case increase the counter.
    }
    return charCount; // Return the counter.
}

console.log(ejercicio03("fwnfai lfnawf yb", "f"));