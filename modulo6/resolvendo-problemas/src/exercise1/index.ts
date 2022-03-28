function isOneEdit(str1: string, str2: string): boolean{
    if((str1.length - str2.length) > 1 || (str1.length - str2.length) < -1){
        return false
    }

    if(str1.length > str2.length){
        return str1.includes(str2)
    }

    if(str2.length > str1.length){
        return str2.includes(str1)
    }

    let charChange = 0

    for (let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            charChange++
        }
    }

    return charChange === 1
}

console.log(isOneEdit("banan", "banana"))
console.log(isOneEdit("bananak", "banana"))
console.log(isOneEdit("panana", "banana"))
console.log(isOneEdit("pananaaa", "banana"))

