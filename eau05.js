// 1 ARGUMENTS ET VARIABLES

args = process.argv.slice(2)
arg1 = args[0]
arg2 = args[1]


// 2 FONCTIONS

function getIndexesInWord (arg1,arg2){
    indexes = []
    for(let i=0 ; i < arg1.length ; i++){
    
        if(arg1[i]==arg2[0]){
            
            indexes.push(i)                    
        }           
    }
}



function includes (tableau, argument1, argument2){

    for(let index of indexes){
        let isGood = true
        
        for(let i=0  ; i<argument2.length; i++){
            if(arg1[index+i]!==argument2[i]){
                    isGood = false    
                }
            }   if(isGood==true){
                return true
        }
            
    }
                
                  
}  

// 3 GESTION D'ERREUR

if(args.length !=2){
    console.log("error");
}



// 4 RESOLUTION

else if (args.length ==2){
    getIndexesInWord(arg1,arg2)


    if(includes(indexes, arg1, arg2)){
    console.log(true);
    }

    else console.log(false);    
}   
