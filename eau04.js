// 1 ARGUMENTS ET VARIABLES

args = process.argv.slice(2)
let tab = []

// 2 FONCTIONS

function nombrePremier(nombre){

    let nbN = false
        for(let i=2 ; i < nombre ; i++){
            if(nombre%i == 0){   
                nbN = true
            }
            
            } 
        
        if (nbN == true) return false
        else if (nbN == false) return true
}

// 3 GESTION D'ERREUR

if ((isNaN(args)) || (args < 0) ||  (args.length ==! 1)){
    
    console.log("-1");
    return false
}




// 4 RESOLUTION

else for(let i=args ; i>=args ; i++){
    if ((nombrePremier(i)) && (i !== args)){
        console.log(i)
        break
    }
}

//////////////////////////////////////////////////////////
//12/10/23/// AUTRE SOLUTION /////

// let array = []
//     for (let i=args; i<args*2 ; i++){
//         if(isPremier(i)){
//             array.push(i)
//         }}
//         if ((array[0])==(args)){
//             console.log(array[1])
//         }
//         else console.log(array[0]);
    