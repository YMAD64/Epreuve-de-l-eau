const args = process.argv.slice(2)


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



console.log(returnIndex(args));