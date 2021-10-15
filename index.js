// Your code here

// ***NOTE: learn more about default parameters and arrow functions***

    // defines mondayWork function expression as specified
    //   1) function exists
    //   2) uses the default activity 'go to the office' when no arguments are passed
    //   3) permits the default activity to be overriden

    saturdayFun = (fParameter = "roller-skate") => {
        return `This Saturday, I want to ${fParameter}!`;
    }

    function mondayWork (fParameter = 'go to the office') {
    return `This Monday, I will ${fParameter}.`;
}

    
    //      defines wrapAdjective function according to the specification
    //   4) function exists
    //   5) when initialized with '*' creates a function that, when called, wraps 
    //      an adjective in a highlight
    //   6) when initialized with '||' creates a function that, when called, wraps an 
    //     adjective in a highlight

    function wrapAdjective (fParameter = '*') {
        let result = (adjective) => `You are ${fParameter}${adjective}${fParameter}!`
        return result;
    }






    














