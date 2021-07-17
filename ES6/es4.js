const s = [5, 7, 2];
function editInPlace() {
  s[0]=2;
  s[1]=5;
  s[2]=7;

}
editInPlace();


//to prevent object mutation

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  
  Object.freeze(freezeObj); 
    try {
      MATH_CONSTANTS.PI = 3.14;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();



  //arrow functions with parameters

  const myConcat = (arr1, arr2) =>
   arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));