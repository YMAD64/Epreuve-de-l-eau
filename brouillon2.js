const args = process.argv.slice(2)
arg1 = args[0]
arg2 = args[1]



function getIndexesInWord (arg1,arg2){
    indexes = []
    for(let i=0 ; i < arg1.length ; i++){
    
        if(arg1[i]==arg2[0]){
            
            indexes.push(i)                    
            }
                
        }

}        
        

getIndexesInWord(arg1,arg2)

function includes (tableau, argument1, argument2){

for(let index of indexes){
    let isGood = true
    for(let i=0  ; i<argument2.length; i++){
        if(arg1[index+i]!==argument2[i]){
        isGood = false    
        }
    }if(isGood==true){
        return true
    }
        
    }
            
              
}  

if(includes(indexes, arg1, arg2)){
    console.log(true);
}
else console.log(false);    

    

// function includes (argument1, argument2, tableau){

//     retour = true
//     let index = getIndexesInWord(argument1 , argument2)

        
//     for(let i=0 ; i<tableau.length; i++){
//         for(let y=tab[i] , z=0 ; y<argument1.length , z<argument2.length ; y++ , z++){
//             if (y==z){
//                 console.log("cool");
//             }
//         }
        
//         if(argument1[tab[i]]!==arg2[j]){
//                 retour =  false
//             }
//         }
    
//     if(retour==true){
//         return true
//     }
//     else if(retour==false){
//         return false
//     }
// }

// if(includes(arg1 ,arg2)){
//     console.log(true);
// }
// else console.log(false);






// // for (let i=0 ; i<arg1.length ; i++){
// //   for (let j=0 ; j<arg2.length ; j++){
// //     if ((arg1[i])==(arg2[j])){
// //         console.log("cool");
// //     }
// //   }
// // }







// // console.log(arg1);
// // console.log(arg2);








// // if(args[0].includes(args[1])){
// // console.log(true);
// // }
// // else console.log(false);

