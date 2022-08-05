function hasTargetSum(array, target) {
  // Write your algorithm here
  let sorted = array.sort(function(a, b){return a-b});
  for(let i = 0; i < sorted.length; i++) {
    let num1 = sorted[i];
    console.log(num1);
    let num2 = sorted[i+1];
    console.log(num2)
    if (i == sorted.length - 1) {
      if(num1 + num2 == target) {
        return true;
      }
      else {
        return false;
      }
    }
    else{
      if(num1 + num2 == target) {
        return true;
      }
      else if(num1 + num2 < target) {
        for(let j = i+2; j < sorted.length; j++) {
          console.log(num1)
          num2 = sorted[j]
          if(num1 + num2 == target) {
            console.log(num2)
            return true;
          }
          else if(num1 + num2 < target) {
            console.log(num2);
          }
          else if(num1 + num2 > target) {
            console.log(num2);
            j = sorted.length;
          }
        }
      }
      else if(num1 + num2 > target) {
        return false
      }  
    }
  }
}

/* 
  Write the Big O time complexity of your function here

  0(n) to sort
  0(log n) to iterate
*/

/* 
  Add your pseudocode here
  

*/

/*
  Add written explanation of your solution here

  First order the array , then starting from the beggining of the array take the first number
  and add it to the second. If this number is equal to 10 return true, if less than 10 add the first 
  number to the next number in the array. If this number is greater than 10 move forward in the array
  and start adding the second number to the third number. If you hit the end of the array return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
