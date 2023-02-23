args = process.argv.slice(2)

function fibonacci(nbre){
    let fib = [0,1,1,2]


        for(let i=2 ; i<nbre ; i++){
        fib.push(fib[i]+fib[i+1])   
    } console.log(fib[nbre]);
}

fibonacci(args)




