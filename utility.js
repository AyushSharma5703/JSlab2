// First Function
 function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}exports.printWelcomeMessage=printWelcomeMessage;

// Second Function
 function convertMeasurement(value, fromUnit, toUnit) {
    switch (fromUnit.toLowerCase()) {
        case 'celsius':
            return toUnit.toLowerCase() === 'fahrenheit' ? (value * 9/5) + 32 : value;
        // Add more cases for other conversion types
        default:
            return value;
    }
}exports.convertMeasurement=convertMeasurement;

// Third Function
 function mathOperation(value, operation) {
    switch (operation.toLowerCase()) {
        case 'factorial':
            return factorial(value);
        // Add more cases for other math operations
        default:
            return value;
    }
}exports.mathOperation=mathOperation;

// Fourth Function (Advanced Function)
 function advancedFunction() {
    // Add your advanced function logic here
    return 'Result from advanced function';
}exports.advancedFunction=advancedFunction;

// Helper function for factorial calculation
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}exports.factorial=factorial;
