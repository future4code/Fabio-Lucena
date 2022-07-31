const printArray = (array: any[], index: number = 0): void =>{ 
    if(index < array.length){
        console.log(array[index])
        printArray(array, index + 1)
    }
}

const array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

printArray(array)