let person = {
    fullName : "Hitesh Dalsania",
}

function getDetails(){
    console.log("Hello " + this.fullName)  
}

getDetails() // Hello undefined

getDetails.call(person) // Hello Hitesh Dalsania

/*
Suppose there is some property define in a objet and we have
one function, we want to access these property in function at that
time we can use call, apply, bind to access it
*/

/* 
    In call we can give only object or object with comma seperated vales.
*/

function getNameAgeDetailsCall(age, city){
    console.log("Hello " + this.fullName + " " + age + " " + city)  
}

getNameAgeDetailsCall.call(person, 26, "Ahmedabad") // Hello Hitesh Dalsania 26 Ahmedabad

/*
    In apply we cab give only object or object with array

 */   

getDetails.apply(person) // Hello Hitesh Dalsania

function getNameAgeDetailsApply(age, city){
    console.log("Hello " + this.fullName + " " + age + " " + city)  
}

getNameAgeDetailsApply.apply(person, [26, "Ahmedabad"]) // Hello Hitesh Dalsania 26 Ahmedabad

/* 
    When we use bind function must be store in a variable for future use or multiple use.
    In bind function we can give only object or object with comma seperate value.

*/   

    let lessDetils = getDetails.bind(person);

    lessDetils(); // Hello Hitesh Dalsania

    function getNameAgeDetailsBind(age, city){
        console.log("Hello " + this.fullName + " " + age + " " + city)  
    }

    let fullDetails = getNameAgeDetailsBind.bind(person);
    fullDetails(36, "Rajkot")  // Hello Hitesh Dalsania 36 Rajkot
    fullDetails(40, "Surat")  // Hello Hitesh Dalsania 40 Surat

    getNameAgeDetailsBind.bind(person) // Nothing

    console.log(getNameAgeDetailsBind.bind(person))

    /*
        ƒ getNameAgeDetailsBind(age, city){
            console.log("Hello " + this.fullName + " " + age + " " + city)  
        }
    */


    let student = {
        branch : "computer",
        year : 4,
        getAge : function(){
            console.log(this.branch) ;
        }
    }

    let otherStudent = {
        branch : "Mechanical"
    }


    student.getAge.call(otherStudent)  // Mechanical