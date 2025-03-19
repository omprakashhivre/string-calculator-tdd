const add = (numbers) => {
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
      const sum = numberArray.reduce((sum, number) => sum + (isNaN(num) ? 0 : num), 0);
      return sum;
  }
  catch(e){
      return e.message;
  }
}

const sampleInput = ""
const sampleInput1 = "1"
const sampleInput2 = "-1\n-5"
const sampleInput3 = "1,-5"
const sampleInput4 =  "//;\n1;-2"
const sampleInput5 =  "//;\n1;2"

const result  = stringCalculatorTDD(sampleInput5)
console.log(result)
