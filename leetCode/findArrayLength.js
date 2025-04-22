// Find the length of an array without using .length.
let arr=[1,2,3,4,5,6,6,9]
let count=0
function findLength(){
    for(let item of arr){
        count++

    }
    return count
}
console.log(findLength())