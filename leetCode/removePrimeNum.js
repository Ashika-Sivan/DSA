// 3. Write a program in C to get an array from users and remove odd numbers from
//  the array and find the sum of the existing values in the array.


// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// function removePrimeAndSum(){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         let isPrime=true

//         if(arr[i]<=1){
//              isPrime=false
//         }else{
//             for(let j=2;j<=Math.sqrt(arr[i]);j++){
//                 if(arr[i]%j===0){
//                     isPrime=false
//                     break
//                 }
//             }
//         }
//         if(isPrime){
//             for(let k=i;k<arr.length-1;k++){
//                 arr[k]=arr[k+1]
//             }
//             i--
//             arr.length--
//         }else{
//             sum+=arr[i]
//         }
       
//     }
// console.log(arr)
// console.log(sum);

// }
// console.log(removePrimeAndSum())