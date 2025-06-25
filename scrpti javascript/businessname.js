/* create a business name jgenerator by combining list of abjectives and shop name and another word
Adjective list:
crazy 
Amazing 
Fire

shop name:
Engine
Foods
Garments

Another word:
Bro
limited
Hub
*/

function generateBusinessName() {
    let random= Math.random();

    let random2 = Math.random();
    let random3 = Math.random();
     let first,second,third; 
     //the the word
    if (random < 0.33) {
        first = "engine";    

    } else if (random < 0.66) {
        first = "foods";    
    } else {
        first = "Garments";    
    }   
 // the second word

    if (random2 < 0.33) {
        second = "bro";    

    } else if (random2 < 0.66) {
        second = "limited";    
    } else {
        second = "hub";    
    }


// the thrid word

    if (random3 < 0.33) {
        third = "Crazy";    

    } else if (random3 < 0.66) {
        third = "Amazing";    
    } else {
        third = "Fire";    
    }



    let businessName = `${first} ${second} ${third}`;
    console.log("Generated Business Name: " + businessName);

}

generateBusinessName()