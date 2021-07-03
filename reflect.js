 function removeVowel(input) {
  let value = [];
  for (let i = 0; i < input.length; i++) {
    if (!/[aeiou]/.test(input[i])) value.push(input[i]);
  }

  return value.join("");
};
 function addition(arg) {
   let value =[...arg]
     console.log("testReducde", arg.reduce(addReducer))
   return 8;
 }

const addReducer = (acc, curr)=>{acc + curr}

module.exports = { removeVowel, addition };

