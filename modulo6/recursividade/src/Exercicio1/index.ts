// a)
const allInt = (n: number): void=>{
    if(n >= 0){
        allInt(n - 1)
        console.log(n)
    }
}


allInt(5)

// b)
const allInt2 = (n: number): void=>{
    if(n >= 0){
        console.log(n)
        allInt2(n - 1)
    }
}


allInt2(5)