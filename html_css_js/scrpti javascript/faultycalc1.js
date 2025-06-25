/*
create afaulty calculator using javascript
this faulty calculator does following:
1. It takes two numbers as input.
2. It performs wrong operations as follows:
+ --> -
* --> +
- --> /
/ --> **
3. It displays the result of the wrong operation.
4. It allows the user to perform multiple calculations until they choose to exit.
*/


function faultyCalculator() {

   
        let num1 =prompt("Enter first number");
        let num2=prompt("Enter second number");
        let operation =prompt("Enter operationn (+,-,*,/)");
        let result;
     
                if (isNaN(num1) || isNaN(num2)) {
            alert("Invalid input! Please enter numbers.");
    
        }
    while(true)
    {
   

        switch(operation)
        {
            case'+':
                result = num1 - num2; // Faulty operation
                break;
            case '*':
                result = num1 + num2; // Faulty operation
                break;      
            case '-':
                result = num1 / num2; // Faulty operation
                break;
            case '/':
                result = Math.pow(num1, num2); // Faulty operation
                break;
            default:    
                console.log("Invalid operation. Please try again.");
                continue;
            // Skip to the next iteration if operation is invalid
        }
        
        console.log("the result of "+num1+ " " + operation + " " + num2 + " is: " + result);
        
    }    
    
}


faultyCalculator()

