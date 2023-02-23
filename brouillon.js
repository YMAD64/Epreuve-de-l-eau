//eau03


// 1 ARGUMENTS ET VARIABLES

args = process.argv.slice(2)


// 2 FONCTIONS

function fibonacci(nbre){
    let fib = [0,1,1,2]


        for(let i=2 ; i<nbre ; i++){
        fib.push(fib[i]+fib[i+1])   
    } console.log(fib[nbre]);
}

// 3 GESTION D'ERREUR

if ((isNaN(args)) || (args < 0)){
    
    console.log("-1");
}




// 4 RESOLUTION
else fibonacci(args)