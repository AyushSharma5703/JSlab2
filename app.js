// Importing functions from the utilities file
let {
    printWelcomeMessage,
    convertMeasurement,
    mathOperation,
    advancedFunction
} =require('./utility' ) ;

// Calling/invoke functions from the utilities file
printWelcomeMessage('Ayush', 'Sharma');
console.log('Conversion Reult:', convertMeasurement(50, 'Celsius', 'Fahrenheit'));
console.log('Factorial Result:', mathOperation(5, 'factorial'));
console.log('Advanced Function Result:', advancedFunction());
