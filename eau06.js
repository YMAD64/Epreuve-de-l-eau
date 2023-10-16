// 1 ARGUMENTS ET VARIABLES


const args = process.argv.slice(2).join(' ')


// 2 FONCTIONS

function returnOneUppercaseOnetwo(string){

    let min = "abcdefghijklmnopqrstuvwxyz"

    let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let char = "!§:/;.,? "

    let newString = []

    let index = 0

    for(let i=0 ; i<string.length ; i++){
    
    
        for(let j=0 ; j<min.length ; j++){
        
      
        
            if((string[i]==min[j]) && (index%2==0)){
            newString.push(maj[j])
            index=index+1
            }

            else if ((string[i]==min[j]) && (index%2==1)){
            newString.push(min[j])
            index=index+1
            }

            else if ((string[i]==maj[j]) && (index%2==1)){
            newString.push(min[j])
            index=index+1
            }

            else if ((string[i]==maj[j]) && (index%2==0)){
            newString.push(maj[j])
            index=index+1
            }

            else if ((string[i]==char[j])){
            newString.push(char[j])
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


else returnOneUppercaseOnetwo(args)


////////////////////////////////////////////////////
//16/10/23/////////////////////


// function returnMajSurDeux(string){
     
//     let newString = []
//     let index = 0
//     for(let i=0 ; i<string.length ; i++){
        
        
//             if((string[i].match(/[a-zA-Z]/)) && (index%2==0)){
//                 newString.push(string[i].toUpperCase())
//                 index = index + 1
//             }
//             else if((string[i].match(/[a-zA-Z]/)) && (index%2==1)){
//                 newString.push(string[i].toLowerCase())
//                 index = index + 1
//             }
//             else if(string[i].match(/[^a-zA-Z]/)){
//                 newString.push(string[i])
//                 index = index
//             }

            
            
            
//         } 

//      console.log(newString.join(''));
// }



// returnMajSurDeux(stringArgs)