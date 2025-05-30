//count 10 to 1 using setITerval

let count=10
const countSet=setInterval(()=>{
    console.log(count)
    count--

    if(count===0){
        clearInterval(countSet)
        console.log('time out')
    }
})