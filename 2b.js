var arr = [];
function sevenRandomNumbers(arr){
    
    while(arr.length < 9){
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(r) === -1) arr.push(r); 
    }
    console.log(arr);
}
console.log(sevenRandomNumbers(arr))