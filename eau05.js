// 1 ARGUMENTS ET VARIABLES

args = process.argv.slice(2)
arg1 = args[0]
arg2 = args[1]


// 2 FONCTIONS

function getIndexesInWord (argument1,argument2){
    indexes = []
    for(let i=0 ; i < argument1.length ; i++){
    
        if(argument1[i]==argument2[0]){
            
            indexes.push(i)                    
        }           
    }
}



function includes (tableau, argument1, argument2){

    for(let index of tableau){
        let isGood = true
        
        for(let i=0  ; i<argument2.length; i++){
            if(argument1[index+i]!==argument2[i]){
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



/////////////////////////////////////////////////////
//15/10/23///////////////////

const args = process.argv.slice(2)

let arg1 = args[0]
let arg2 = args[1]


function include(string1,string2){
    let indexs = []
    for (let i=0 ; i<string1.length ; i++){
        if (string1[i]==string2[0]){
            indexs.push(i)
            }
        }
    if (indexs.length == 0 ){
        return false
        }         
    let isGood = true
    for (let i=0 ; i<indexs.length ; i++){
        for (let j=indexs[i] , k=0 ; j<string1.length , k<string2.length ; j++ , k++){
            if (string1[j]!=string2[k]){
            isGood = false
            }
        }return isGood
    } 
}

if(args.length !==2){
    console.log("erreur");
}
else console.log(include(arg1,arg2))