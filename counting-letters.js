
// objective: return all the unique characters that exist in a string passed into the function.  The program should also report back how many instances of each letter were found in the string.

// a countLetters function that takes a string as a parameter that returns an object
function countLetters(string) {
    // make an empty object that we'll fill
    var result = {};
    // ignore spaces in the passed-in string
    var newString = string.split(' ').join(''); // lighthouseinthehouse
    // for each of the characters in the string
    var count = 0;
    for (var i = 0; i < newString.length; i++) {
      var letter = newString[i];
      // if the letter has already been seen
      if (result.hasOwnProperty(letter)) {
        // add one to the count for that letter in the object
        ++result[letter]; // problem line
      }
      else {
        // add that letter to the object and set its count to one
        var newChar = letter;
        result[newChar] = 1;
      }
    }
    // return the object
    return result;
  }

console.log(countLetters("lighthouse in the house"));
