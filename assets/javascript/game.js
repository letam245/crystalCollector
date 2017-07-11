  $(document).ready(function(){
  // create variable to hold random target number
  var targetNumber;


  //variable to add the sore whenever user clicked on each crystals
  var totalScore;

  //variable to to hold 4 different cyrstal values
  var blueCrystal;
  var redCrystal;
  var greenCrystal;
  var yellowCrystal;

  //variable to keep track of win and loss
  var wins = 0;
  var losses = 0;

  //function to reset and start a new round
  function reset(){
  	//give targetNumber a new random number from 19-120
  	targetNumber = 19 + Math.floor(Math.random()*102);

  	//give each crystal new random value/score from 1-12
  	blueCrystal = 1 + Math.floor(Math.random()*12);
  	redCrystal = 1 + Math.floor(Math.random()*12);
  	greenCrystal = 1 + Math.floor(Math.random()*12);
  	yellowCrystal = 1 + Math.floor(Math.random()*12);

  	//set the user totalScore back to 0
  	totalScore = 0;

  	//update the html with the value in javascript
  	$('#target-number').html(targetNumber);
  	$('#wins').html(wins);
  	$('#losses').html(losses);
  	$('#total-score').html(totalScore);

  }

  ///Start the game
  
  reset();
  
  

  //create on click event for each time the crystals are clicked
  $('.crystal').on('click', function(){
  	//each crystal has its own value attribute: blue, red, green, yellow
  	//so use this attr to vertify which crystal is being click
  	var crystalValue = $(this).attr('value');

    
    
  	//convert the attribute into interger before adding to the totalScore
  	// crystalValue = parseInt(crystalValue);
  	//then add the crystalValue to the totalScore
  if (crystalValue === 'blue'){
  		totalScore += blueCrystal; //same as totalScore = totalScore + blueCrystal
      console.log(blueCrystal);
	}
	else if (crystalValue === 'red'){
		totalScore += redCrystal;
    console.log(redCrystal);
    
	}
	else if (crystalValue ==='green'){
		totalScore += greenCrystal;
    console.log(greenCrystal);
	}
	else if (crystalValue === 'yellow'){
		totalScore += yellowCrystal;
    console.log(yellowCrystal);
	}
  
  

  
	//then update the totalScore in the html page
    $('#total-score').html(totalScore);
  


  //function to check if the user win or lose
  //increment wins/losses
  //then reset the game to defualt values
  //check if user lost
  console.log("total score: " + totalScore);
  console.log("target number: " + targetNumber);

  if (totalScore > targetNumber){
      losses++;
     //// (#update).html("you lost" )
      console.log('You Lost');
      reset();
  }
  //check if user won{
  if (totalScore === targetNumber){
    wins++;
    console.log('You Won');
    reset();
  }

  // $('.reset').on('click', function(){
  //   reset();

    
});

});




