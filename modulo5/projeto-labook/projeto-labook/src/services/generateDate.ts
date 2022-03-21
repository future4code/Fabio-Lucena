export default class generateDate{
    generateDate = () => {
        let dateTime = Date.now(); 
        let date = new Date(dateTime);
        let options: any = {
            year: 'numeric', month: 'numeric', day: 'numeric',
        };
    
        let newDate = date.toLocaleString('pt', options); 
    
        let year = newDate[6] + newDate[7] + newDate[8] + newDate[9]
        let month = newDate[3] + newDate[4]
        let day = newDate[0] + newDate[1]
    
        let result = `${year}-${month}-${day}`
        console.log(result)
        return result
    }
}