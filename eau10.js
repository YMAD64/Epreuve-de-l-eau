// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)


// 2 FONCTIONS

function returnIndex(string){

    let array = []
    
    
        for (let i=0 ; i<string.length-1 ; i++){
        array.push(string[i]);
        }
     
    
    
    
        for(let y=0 ; y<array.length ; y++){
            for(let z=args.length-1 ; z<=args.length ; z++){
                if(array[y]==(args[z])){
                    return y
                
                }
            
            }
            
    
        }   return -1
}
    


// 3 GESTION D'ERREUR

if (args.length ==0) {
    console.log("error");
} 

// 4 RESOLUTION

else console.log(returnIndex(args));

////////////////////////////////////////////////////////
//17/10/23///////////////////

// let args = process.argv.slice(2)
// let arg2 = [args.pop()]
// let arg1 = args

// function indexWanted(string1,string2){
//     for (let i=0 ; i<string1.length ; i++){
//         for (let j=0 ; j<string2.length ; j++){
//             if (string1[i]==string2[j]){
//                 return(i);
//             } 
//         }
//     } return -1
// }

// console.log(indexWanted(arg1,arg2))


