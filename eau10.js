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


