// Homework 1: JavaScript Fundamentals
// Name: Yassin
// Date: 1/28/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];


// returns sum of numbers in an array
// param: array of integers
function sum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}


// returns averge of values in an array
// param: array of integers
function average(arr) {
    return (sum(arr) / arr.length)
}

// returns the smallest value in an array
// param: array of integers
function min(arr) {
    return Math.min(...arr)
}

// returns the largest value in an array
// param: array of integers
function max(arr) {
  return Math.max(...arr)
}

// ============ PART 2: STRING FUNCTIONS ============

// returns string with first value capitalized
// param: non-empty string
function capitalize(str) {
    const firstLetter = str.charAt(0).toUpperCase()
    return firstLetter + str.slice(1)
}

// returns reverse of a string
// param: non-empty string
function reverse(str) {
  return (str.split("").reverse().join(""))
}

// returns vowel count of a string
// param: non-empty string
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0
  for(let i=0; i<str.length; i++){
    if (vowels.includes(str.charAt(i))) vowelCount++ 
  }

  return vowelCount
}

// ============ PART 3: OBJECT ============
const student = {
  name: "Yassin",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  
  // returns average of a student object's grades
  getAverage: function() {
    return average(this.grades)
  },
  // returns true if student object's grade average is above 85; false otherwise
  isHonorRoll: function() {
    return this.getAverage() > 85
  }
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());