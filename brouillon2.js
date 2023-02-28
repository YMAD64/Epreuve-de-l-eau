const args = process.argv.slice(2)
arg1 = args[0]
arg2 = args[1]


function includes (argument1 , argument2){

    let indexstart = -1
    for(let i=0 ; i < arg1.length ; i++){
        for(let y=0 ; y < arg2.length ; y++){
            if(arg1[i]==arg2[y]){
                
                indexstart = i
            }
            break
        }
    } console.log(indexstart);
    retour = true
        
        if (indexstart<0){
            retour = false
        }
        else for(let i=indexstart , j=0 ; i<arg1.length , j<arg2.length ; i++ , j++){
            if(arg1[i]!==arg2[j]){
                retour =  false
            }
        }
    
    if(retour==true){
        return true
    }
    else if(retour==false){
        return false
    }
}

if(includes(arg1 ,arg2)){
    console.log(true);
}
else console.log(false);






// for (let i=0 ; i<arg1.length ; i++){
//   for (let j=0 ; j<arg2.length ; j++){
//     if ((arg1[i])==(arg2[j])){
//         console.log("cool");
//     }
//   }
// }







// console.log(arg1);
// console.log(arg2);








// if(args[0].includes(args[1])){
// console.log(true);
// }
// else console.log(false);

