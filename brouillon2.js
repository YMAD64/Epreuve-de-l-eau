args = process.argv.slice(2)

function nombrePremier(nombre){

nbPrem = true
    for(let i=0 ; i < args ; i++){
        if(args%i == 0){
        nbPrem = false
        }  
    }

    console.log(nbPrem);
}

nombrePremier(args)