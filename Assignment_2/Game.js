function conditionals() // programing logic
{
    var num1 = Math.ceil(Math.random()*20); // this is a statement 
    var num2 = Math.ceil(Math.random()*20); // this is added when more than 1 number is needed to introduce more variables
    alert(num1 + "" + num2); // this is adding the numbers together in string 
   
    if (num1 == 1 || num2 == 1) // checking conditions 
    if (num1 == 1) // having the double = is making sure it is true
    {
        document.getElementById("updateloc").innerHTML = "1 = first"; // if this happens then that happens
    }
    else if (num1 == 2 &&   num2 % 2 == 0) // checking conditions
    {
        document.getElementById("updateloc").innerHTML = "2 = second"; // otherwise this happens 
    }
    else // the final statement 
    {
        document.getElementById("updateloc").innerHTML = "3 = 3rd"; // conditions have been met 
    }
}

function showalert() 
{
    alert("Have I won yet or do we go again?"); // displayes message
}

function simpleDo() // will happen once
{
    var i = 1; // stating the value of i
    var currTime = 180; // where the countdown is going to begin from
    do // always happens just once
    {
        setTimeout(function () {
            document.getElementById("CrapofCraps").innerHTML = "the time left is" + currTime; //connects to the main HTML file using the proided id
            currTime = currTime - 1; 
        }, 1000 * i); // tells function to wait for 1 second 
        i = i+1; 
    } while (i < 182); // makes sure the countdown goes down to 0
}