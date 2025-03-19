const stringCalculatorTDD = (numbers) => {
    let actualString = numbers;
    if(!numbers.trim()) return 0;
    try{
        let defaultDRegex = /,|\n/;
        let customDRegex =  /^\/\/(.+)\n/

        
        let customDelimiterMatche = numbers.match(customDRegex);
        if(customDelimiter){
            delimiter = new RegExp(customDelimiterMatche[1])
            actualString = numbers.slice(customDelimiterMatch[0].length);
        }
        const numberArray = actualString.split(delimiter).map(num => parseInt(num, 10))
        const sum = numberArray.reduce((sum, number) => sum + number);
        return sum;
    }
    catch(e){
        return e;
    }
}

const sampleInput = ""
const sampleInput1 = "1"
const sampleInput2 = "1,5"

const result  = stringCalculatorTDD(sampleInput2)
console.log(result)
