const stringCalculatorTDD = (numbers) => {
    if(!numbers.trim()) return 0;
    try{
        const numberArray = numbers.split(",").map((number) => parseInt(number))
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
