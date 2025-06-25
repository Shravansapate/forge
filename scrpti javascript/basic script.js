
        console.log("Hello, World!");
        console.log("This is my first JavaScript code.");

        console.log("code is running");
        let a=prompt("Enter your name");
        let b=prompt("Enter your age");
        console.log("Your name is " + a);
        console.log("Your age is " + b);


        alert("welcome to my first JavaScript code");
        
        var isTrue =confirm("Are you sure you want to leave this page and blast this computer ? ");
        if(isTrue) {
            alert("You have chosen to leave the page.");
        }
        else{
            alert("You have chosen to stay on the page.");
        }



        //loop
        
       let obj={
            name: "John",
            age: 30,
            city: "New York",
            comapny: "Tech Corp"
        }
        for (const key in obj)
            {
                const element= obj[key];
                console.log(key + ": " + element);

        }
    


        function greet(name) {
          
            console.log("Hello, " + name + "!");
            console.log( name +" is Welcome to the javascript world.");
            console.log(name +" is enjoying  coding!");
        }

        greet("Alice");

function add(a, b) {
    return a + b ;
}


let sum =add(10,12);
console.log("The sum is: " + sum);


const fun1 =(x) =>
 {    
    console.log("The value of x is: " + x);
}
fun1(5);
fun1(10);