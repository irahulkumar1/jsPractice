/* a word, phrase, number, or other sequence of characters that reads the same forward and backward example:- racecar
 ,A man, a plan, a canal, Panama     */


function palindrom(input) {
  if (typeof input !== "string") {
    input = String(input);
  }
input = input.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
// input
console.log(input.split('').reverse().join(''))
}
palindrom("990 099");
// palindrom("A man, a plan, a canal, Panama");