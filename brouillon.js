//eau03


// 1 ARGUMENTS ET VARIABLES

args = process.argv.slice(2)
arg1 = args[0]
arg2 = args[1]


// 2 FONCTIONS


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
}


// 3 GESTION D'ERREUR

if(args.length !=2){
    console.log("error");
}



// 4 RESOLUTION

else if(includes(arg1 ,arg2)){
    console.log(true);
}
else console.log(false);