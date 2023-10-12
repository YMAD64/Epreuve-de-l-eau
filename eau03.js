// 1 ARGUMENTS ET VARIABLES

    const args = process.argv.slice(2)


// 2 FONCTIONS

    function fibonacci(nbre){
        let fib = [0,1,1,2]


            for(let i=2 ; i<nbre ; i++){
            fib.push(fib[i]+fib[i+1])   
        } console.log(fib[nbre]);
    }

// 3 GESTION D'ERREURS

    if ((isNaN(args)) || (args < 0)){
    
        console.log("-1");
    }




// 4 RESOLUTION

    else fibonacci(args)


//////////////////////////////////////////////////////////////////
//12/10/23//

//const args = process.argv.slice(2)

function fibonacci(nbre){
    let array = [0,1,1,2]
    for (let i=2 ; i<nbre ; i++){
        array.push(array[i]+array[i+1])
    } console.log(array[nbre]);
}

if((isNaN(args))||(args < 0)||(args.length == 0)){
    console.log("erreur");
}

else fibonacci(args)