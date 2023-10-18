// 1 ARGUMENTS ET VARIABLES


const args = process.argv.slice(2).join(' ')


// 2 FONCTIONS

function isNotNumber(char){

    let number = [0,1,2,3,4,5,6,7,8,9]
    

    for(let i=0 ; i<number.length ; i++){
    
    
        if(char==number[i]){
                return false
        }
    }
    return true 
}



function argIsNumber(argument){
    
    // for(const char of argument){   --> autre solution avec une forof à la place de for
    //     if(isNotNumber(char)){
    //         return false
    //     }
    // } return true
    
    
    
    for(let i=0 ; i<argument.length ; i++){
        
        if(isNotNumber(argument[i])){
            return false
        } 
           
    }return true

}
// 3 GESTION D'ERREUR

if(args.length==0){
    console.log("error");
}

// 4 RESOLUTION

else console.log(argIsNumber(args))

//////////////////////////////////////////
//17/10/23//////////////////

// const args = process.argv.slice(2)

// function onlyNumber(string){
//     for(let i=0 ; i<string.length ; i++){
//         if(string[i].match(/[^0-9]/)){
//             return false
//         }
//     } return true
// }

// console.log(onlyNumber(args))









