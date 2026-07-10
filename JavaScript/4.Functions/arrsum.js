//defining an array and adding the all elements in the array

function sumArray(num){
    let total=0;
    for (let i=0;i<=num.length-1;i++){
       total+=num[i];
    }
    return total;
}
sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101