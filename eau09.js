// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)
let newArgs = []

// 2 FONCTIONS

function getNumber(array, newArray){


    for (let i=0 ; i<array.length ; i++){
        newArray.push(parseInt(array[i]))
    }

}


function valeursCroisantesComprisesEntre(arg1, arg2){


    retour = []

    if(arg1<arg2){
        
        for(let i=arg1 ; i<arg2 ; i++){
            retour.push(i);
            }
        }

    else if(arg1>arg2){
    
        for(let i=arg2 ; i<arg1 ; i++){
        retour.push(i);
        }
    }

    retourString = retour.join(' ')
    console.log(retourString);
}


// 3 GESTION D'ERREUR

if ((args.length !=2) || (isNaN(args[0])) || (isNaN(args[1]))){
    console.log("error");
} 

// 4 RESOLUTION

else if((args.length == 2 ) && isNaN(args[0])==false && isNaN(args[1])==false){
getNumber(args, newArgs)
valeursCroisantesComprisesEntre(newArgs[0], newArgs[1])
}





