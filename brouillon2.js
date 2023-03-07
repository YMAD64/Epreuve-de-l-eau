const args = process.argv.slice(2).join(' ')

function returnUppercaseFisrt(string){

    let min = "abcdefghijklmnopqrstuvwxyz!?"

    let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?"

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
returnUppercaseFisrt(args)


// function getMaj(char){

//     let min = "abcdefghijklmnopqrstuvwxyz"

//     let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    
//         for(let i=0 ; i<maj.length ; i++){
//             if(char==min[i]){
//                 return (maj[i])
//             }
            
//         } 
//         return char
        
//     }
    

// function isAlphaChar(char){
//     let Aplha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for(let i=0 ; i<Aplha.length ; i++){
//         if(char == Aplha[i]){
//             return true
//         }
        
//     } 
//     return false
// }

// function returnOneUppercaseOnetwo(string){


//     let min = "abcdefghijklmnopqrstuvwxyz"

//     let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
//     let newString = []
    
//     //let index = 0

//     for(let i=0 ; i<string.length ; i++){
        
//         const caracter = string[i]
    
//         if(isAlphaChar(caracter) && i%2 === 0){
//             newString.push(getMaj(caracter))
            
//         }
//         else newString.push(caracter)
        
    
//     }
//     return newString.join('')
// }

// console.log(returnOneUppercaseOnetwo(args));

