const args = process.argv.slice(2)


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

valeursCroisantesComprisesEntre(args[0], args[1])