
function compute()
{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    
    
    if (principal == "" || principal <= 0){

        alert("Enter a positive number");
    } else{
        result.innerHTML = "If you deposit  " +principal+ " <br> at an interest rate of "+rate+" <br>You will receive an amount of  "+interest+"<br> in the year "+year
    }
  
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


// function valid(){
//     let a = document.getElementById("principal").value;
//     if (a === "" || a <= 0){

//         alert("Enter a positive number");
//     }
// }
