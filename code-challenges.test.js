// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]


describe("fibonaccify",() =>{

    it("returns an array of appropriate length with fibonacci numbers",()=>{
        // Example input: 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        expect(fibonaccify(6)).toEqual([1, 1, 2, 3, 5, 8])

        // Example input: 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        expect(fibonaccify(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })


})



// b) Create the function that makes the test pass.


// function takes a number
// for loop using number as limit (minimum of 2)
// have array with starting values of 1 and 1 
// new value in array is sum of 2 previous values
// loop will start at index 2 (or ignore first 1)

// const fibonaccify = (limit) =>{
//  const result = []
//  for(let i = 0; i < limit; i++){
//      //first 2 elements are always 1
//      if(i == 0 || i == 1){
//          result.push(1)
//      }else{    
//          //index of last element
//          let lastElementIndex = result.length-1
//          //index of penultimate element
//          let penultimateElementIndex = result.length-2
//          //pushing sum of last to elements to array to give us a new last element.
//          result.push(result[lastElementIndex]+result[penultimateElementIndex])
//      }
//  }
//  //returning array of results
//  return result
// }


//actually, maybe I could keep going until the length of the array matches the number
//that might be more fun and maybe a bit clearer.
//while the length of the array is < the number given, add an element to the end of the array that is the sum of the 2 previous elements

const fibonaccify = (limit) =>{
    
    //placeholder array with first two elements assigned.
    const results = [1,1]
    
    //we're checking if the array length is less than the limit because if we check if the length is <= to the limit
    //the while loop will run when the array is the right length and add one more than we want.
    while (results.length < limit){
        
        //index of last element and penultimate element
        const lastElementIndex = results.length-1
        const penultimateElementIndex = results.length-2
        //this it's clearer actually to have a variable for the sum then push that in.
        const sum = results[lastElementIndex]+results[penultimateElementIndex]

        results.push(sum)
    }
    
    //giving the newly created array back
    return results

}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//functions takes an array
//we can filter the array to only give us odd numbers
//then use a sorting method to give us a sorted array

const sortedOdd = (array) =>{
    //check if value is a number
    // AND
    //check if number is even
    //use Math.abs just in case number is negative
        //I actually don't need to use Math.Abs and am silly. I could just check to see if the result is not 0. 
    // sort from least to greatest

    //store here for posterity and console.logging
    //shortening variable from "placeholderForWhateverElementWeAreCurrentlyLookingAt" to "ç". for readability. 
    const result = array.filter(ç => typeof ç === "number" && Math.abs(ç) % 2 === 1  ).sort((a,b) => a-b)
    
    // check what we're getting back when array doesn't give back negative numbers
    // console.log(result)
    //return result
    return result
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.


//function takes an array
//for each element
//replace it with the sum of itself and the previous element
//if summing with an undefined element gives us issues, just return first element as self

// const rollingSum = (array) =>{
//     const result =  array.map((val,i) => {
//         const a = val+(array[i-1] || 0)
//         // console.log(val,array[i-1],a)
//         return a
//     })
//     console.log(result)
//     return result
// }

//this one doesn't actually work because each element is the sum of the old array's values, not the newly summed ones.
//I think well need to have a new array that we add elements to. Most likely we can use a reduce function
//but I want to try the logic without a reduce function first.

//function takes an array
//placeholder array
//for each element in the original array,
//new element in new array is sum of element in original array 
//plus value of element of previous index at new array.

// const rollingSum = (array) =>{
//     const result = []

//     //for each element in old array
//     for (let i = 0; i < array.length; i++){
//         // sum element in old array plus element in new array (or 0 if there is no element)
//         const val = array[i]+(result[i-1] || 0)
//         //push to new array so we can add it to next element and return later
//         result.push(val)
//     }
//     return result

// }

//cool, that works. Now we can just use the place holder array as the accumulator

//create a function that takes an array
const rollingSum = (array) =>{
    //save result for logging and returning
    //reduce method takes parameter for accumulator(new aray for us), current value in old array, and the current index
    const result = array.reduce((newArray,valueFromOldArray,index) =>{
        // console.log()
        //get previous index we can get the previously summed value and add it to the current value
        const previousIndex = index-1
        //if we are at the first element there's no previous element. adding to undefined will give us NaN, so we instead
        //add 0.
        return [...newArray,valueFromOldArray + (newArray.length> 0 ? newArray[previousIndex] : 0)]
    },[])
    // console.log(result)
    return result
}

