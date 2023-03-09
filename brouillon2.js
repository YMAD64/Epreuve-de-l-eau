const args = process.argv.slice(2).join('')

console.log(args);


function isNotNumber(char){

    let number = [0,1,2,3,4,5,6,7,8,9]
    

    for(let i=0 ; i<number.length ; i++){
    
    
        if(char==number[i]){
                return false
        }
    }
    return true 
}
function argIsNumber(argument){
    
    for(let i=0 ; i<argument.length ; i++){
        
        if(isNotNumber(argument[i])){
            return false
        } 
           
    }return true

        


}
//console.log(isNotNumber(args));
console.log(argIsNumber(args));
 