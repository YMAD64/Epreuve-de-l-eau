// 1 ARGUMENTS ET VARIABLES

const args = process.argv.slice(2)


// 2 FONCTIONS




function tirASCII(array){

    for(let i=0 ; i<array.length ; i++){
    
        for (let y=0 ; y<array.length ; y++){
    
       
            if(array[y].charCodeAt(0) > array[i].charCodeAt(0)){
                
                vmax = array[y]
                array[y] = array[i]
                array[i] = vmax
                }
        
            else if (array[y].charCodeAt(0) == array[i].charCodeAt(0)){
                for(let z=0 ; z<array[y].length ; z++){
                    if((array[y].charCodeAt(z) > array[i].charCodeAt(z)) && (array[y].charCodeAt(z-1) == array[i].charCodeAt(z-1))){
                    
                        vmax = array[y]
                        array[y] = array [i]
                        array[i] = vmax

                    }
                }
            }

        }
    } return array
}




function tabVide(tab){
    if (tab.length < 2){
        return true
    }
    return false 
}  
// 3 GESTION D'ERREUR

if(tabVide(args)){
    console.log("error");
}

// 4 RESOLUTION

else if (tabVide(args)==false){
    
    console.log(tirASCII(args).join(' '))
}


///////////////////////////////////////////////////////////
//23/10/23////////////

// const args = process.argv.slice(2)

// function tirASCII(array){

//     for (let i=0 ; i<array.length ; i++){
        
//         for (let j=0 ; j<array.length ; j++){
            
//             if((array[j].charCodeAt(0)) > (array[i].charCodeAt(0))){
                
//                 vmax = array[j]
//                 array[j] = array[i]
//                 array[i] = vmax
            
//             }
            
//             else if ((array[j].charCodeAt(0)) == (array[i].charCodeAt(0))){
                
//                 for(let k=0 ; k<array[j].length ; k++){
                    
//                     if(((array[j].charCodeAt(k)) > (array[i].charCodeAt(k))) && ((array[j].charCodeAt(k-1)) == (array[i].charCodeAt(k-1)))){
                        
//                         vmax = array[j]
//                         array[j] = array[i]
//                         array[i] = vmax
//                     }
//                 }
//             }
//         }
//     } return array
    
// } 
    


// console.log(tirASCII(args));
