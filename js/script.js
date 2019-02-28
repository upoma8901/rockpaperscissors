// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$('#shoot').click(function(){
    
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    
    // $("#computerChoice").text(computerChoice);
    var randomNumber= Math.random();
    console.log(randomNumber)
     
        if(randomNumber>.80){
        var computerChoice = "rock";
       $("#computerChoice").text(computerChoice);
        if( computerChoice==="rock" && userChoice ==="rock"){
         $("#result").text("Tie");  
           
           
       }
        else if( computerChoice ==="rock" && userChoice === "paper"){
         $("#result").text("You Win!!");    
           
       }
        else if( computerChoice==="rock" && userChoice==="scissors"){
           $("#result").text("Computer Wins:Maybe Next Time!"); 
            
        }  }
        
        
      else if(randomNumber>.50){
        var computerChoice = "paper";
        
         $("#computerChoice").text(computerChoice);
            if( computerChoice==="paper" && userChoice==="paper"){
         $("#result").text("Tie");  
           
           
       }
        else if(computerChoice==="paper" && userChoice==="scissors"){
         $("#result").text("You Win!!");    
           
       }
        else if( computerChoice==="paper" && userChoice==="rock"){
           $("#result").text("Computer Wins:Maybe Next Time!"); 
           
       }
           
       }
    
        else if(randomNumber>.20){
          var computerChoice = "scissors";
        $("#computerChoice").text(computerChoice);
       if( computerChoice==="scissors"  &&  userChoice==="scissors"){
         $("#result").text("Tie");  
           
           
       }
        else if(computerChoice==="scissors"  && userChoice==="paper"){
         $("#result").text("You Win!!");    
           
       }
        else if(computerChoice==="scissors"  && userChoice==="rock"){
           $("#result").text("Computer Wins:Maybe Next Time!"); 
           
       }
       }
    }
    
    
    
);



// var userChoice ="#input".val();
// var computerChoice="";
// var winner="";
// var randomNumber= Math.random();