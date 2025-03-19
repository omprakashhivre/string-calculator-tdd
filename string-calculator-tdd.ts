const stringCalculatorTDD = (numbers) => {
  let actualString = numbers;
  if(!numbers.trim()) return 0;
  try{
      let defaultDRegex = /,|\n/;
      let customDRegex =  /^\/\/(.+)\n/

      
      let customDelimiterMatche = numbers.match(customDRegex);
      if(customDelimiterMatche){
        defaultDRegex = new RegExp(customDelimiterMatche[1])
          actualString = numbers.slice(customDelimiterMatch[0].length);
      }
      const numberArray = actualString.split(defaultDRegex).map(num => parseInt(num, 10))

      const negativeNumbers = numberArray.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }
      const sum = numberArray.reduce((sum, number) => sum + number);
      return sum;
  }
  catch(e){
      return e.message;
  }
}

const sampleInput = ""
const sampleInput1 = "1"
const sampleInput2 = "-1\n-5"

const result  = stringCalculatorTDD(sampleInput2)
console.log(result)
