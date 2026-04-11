/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    for(let i = 0 ; i <= args.length ;  i ++){
        if(true){
            return args.length
        }
    }
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */