/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let rs = [];


      for(let i= 1; i<=n; i++){
        if(i%3===0 && i%5===0){
            rs.push("FizzBuzz")
        }else if(i%3===0){
            rs.push("Fizz")
        }else if(i%5===0){
            rs.push("Buzz")
        }else {
            rs.push(String(i))    
        }
      }
      return rs;
};

