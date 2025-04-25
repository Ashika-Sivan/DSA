// Merge two arrays manually.
let arr1=[1,2,3,4,5,6,7,8]
let arr2=[9,10,11,12,13,14]
function mergeArr(){
    for(let i=0;i<arr2.length;i++){
        arr1[arr1.length]=arr2[i]
    }
    console.log(arr1)
}
mergeArr()