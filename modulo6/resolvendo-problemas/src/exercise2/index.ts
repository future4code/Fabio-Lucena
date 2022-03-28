function compression(str: string): any{
    let char1 = []
    let count = 0
    let charInTime = str[0]

    for (let i = 0; i<= str.length; i++){
        if(str[i] !== charInTime){
            char1.push(charInTime+count)
            charInTime = str[i]
            count = 0
        } 
        count++
    }

    let finalChar = ""

    for(let i = 0; i<= char1.length - 1; i++){
        finalChar += char1[i]
    }

    if(finalChar.length < str.length){
        return finalChar
    }else{
        return str
    }

}

console.log(compression("aabbb"))
console.log(compression("accurate"))