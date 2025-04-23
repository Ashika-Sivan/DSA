
// Reverse an array without using built-in methods.


let arr=[19,21,32,14,95,6,57,8,9,20]
function reverseArr(){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
    }
    return arr
}
console.log(reverseArr())
