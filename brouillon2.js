const args = process.argv.slice(2)
let argsNumber = []

function getNumber(array, newArray){


    for (let i=0 ; i<array.length ; i++){
        newArray.push(parseInt(array[i]))
    }

}

getNumber(args, argsNumber)



function my_bubble_sort(array){

   
    for(let i=0 ; i<array.length ; i++){
        for(let j=0 ; j<array.length ; j++){
        
            if(array[j]>array[j+1]){
                valMax = array[j]
                array[j] = array[j+1]
                array[j+1] = valMax

            }

        }
        
    } 
    return array
}        
console.log(my_bubble_sort(argsNumber).join(' '))



