let args = process.argv.slice(2)

console.log(args);



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
    }
}









// function my_select_sort(array){

   
//     for(let i=0 ; i<array.length ; i++){
//         for(let j=0 ; j<array.length ; j++){
        
//             if(array[j].charCodeAt(0)<array[j+1].charCodeAt(0)){
//                 valMin = array[j+1].charCodeAt(0)
//                 array[j+1].charCodeAt(0) = array[j].charCodeAt(0)
//                 array[j].charCodeAt(0) = valMin

//             }

//         }
        
//     } 
//     return array
// }  

// console.log(my_select_sort(array));




