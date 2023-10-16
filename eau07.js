// 1 ARGUMENTS ET VARIABLES


const args = process.argv.slice(2).join(' ')


// 2 FONCTIONS

function returnUppercaseFisrt(string){

    let min = "abcdefghijklmnopqrstuvwxyz!-?"

    let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!-?"

    let char = " ,"

    let newString = []

    let index = 0

    for(let i=0 ; i<string.length ; i++){
    
    
        for(let j=0 ; j<min.length ; j++){
        
      
        
            if((string[i]==min[j]) && (index==0)){
            newString.push(maj[j])
            index=index+1
            }

            else if ((string[i]==min[j]) && (index!==0)){
            newString.push(min[j])
            index=index+1
            }

            else if ((string[i]==maj[j]) && (index!==0)){
            newString.push(min[j])
            index=index+1
            }

            else if ((string[i]==maj[j]) && (index==0)){
            newString.push(maj[j])
            index=index+1
            }

            else if ((string[i]==char[j])){
            newString.push(char[j])
            index=0
            }
        
        }
        
    }
    console.log(newString.join(''))
}


// 3 GESTION D'ERREUR

if(isNaN(args)==false){
    console.log("error");
}



// 4 RESOLUTION


else returnUppercaseFisrt(args)

////////////////////////////////////////////////////////
//16/10/23//
// function majuscule(string){
//     let array = []
//     let index = 0 
    
//     for (let i=0 ; i<string.length ; i++){
//         if((index<1) && (string[i].match(/[a-zA-Z]/))){
//             array.push(string[i].toUpperCase())
//             index = index + 1
//         }
//         else if ((index>=1) && (string[i].match(/[a-zA-Z]/))){
//             array.push(string[i].toLowerCase())
//             index = index + 1
//         }
//         else if ((index>=0) && (string[i].match(/[,;:!-?.]/))){
//             array.push(string[i])
//             index = index + 1
//         }
//         else if ((index>=1) && (string[i].match(/[\s]/))){
//             array.push(string[i])
//             index = 0
//         }     
//     } console.log(array.join('')); 
// }

// majuscule(stringArgs)
