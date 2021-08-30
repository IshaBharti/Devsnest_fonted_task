c
var input="w3resource"
console.log(Array.isArray(input));
var input2=[1,2,3,4]
console.log(Array.isArray(input2));
console.log("-------------------------------------------------")
// 2.Write a JavaScript function to clone an array
// Test Data :
var ar=[1,2,4,4,5,6]
console.log([...ar])
// ... called spread array
console.log("-------------------------------------------------")

// 3.Write a JavaScript function to get the first element of an array.
//  Passing a parameter 'n' will return the first 'n' elements of the array.
var first=function(array,n){
    if (array == null) 
    return void 0;
    // The void operator evaluates the given expression and then returns undefined.


  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
//   The arr.slice() method returns
//  a new array containing a portion of the array on which it is implemented. The original remains unchanged.
};
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

console.log("-------------------------------------------------")

// 4.Write a simple JavaScript program to join all elements of the following array into a string.
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","))

console.log("-------------------------------------------------")

// 5. Write a JavaScript program to find the most frequent item of an array
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3,3,3,3,3,3,3,3];
di={}
for (var i=0;i< arr1.length;i++){
  if (arr1[i] in di){
    di[arr1[i]]+=1
  }else{
    di[arr1[i]] = 1
  }
}
console.log(di)
max=0
key=0
for (i in di){
  if(max<di[i]){
    max = di[i]
    key=i
  }
}
console.log("The most frequent item of an array is",key)


