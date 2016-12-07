function menuFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var myVideo = document.getElementById("video1"); 
function playPause() { 

    if (myVideo.paused) 
        myVideo.play(); 
        
    else 
        myVideo.pause(); 
        
} 

var currentQuestion = 0;
var firstOne = 0;
function quizFunction(thiselement) {
	var button1 = document.getElementById("answer1");
	var button2 = document.getElementById("answer2");
	var questiontext = document.getElementById("questionlabel");


	if (currentQuestion == 0) {
		questiontext.textContent = "Question 1: How will you be using your drone?"
		button1.textContent = "For Fun";
		button2.textContent = "For Work";
		currentQuestion = 1;
	}
	else if (currentQuestion == 1)
	{
		if (thiselement == button1) {
			questiontext.textContent = "Question 2: Which is more important to you?";
			button1.textContent = "Long control range";
			button2.textContent = "A high quality camera";
			currentQuestion = 2;
	    }
	    else if (thiselement == button2)
	    {
	    	questiontext.textContent = "What type of work will you be doing?";
	    	button1.textContent = "Surveying land";
	    	button2.textContent = "Filming professional video / taking photos";
	    	currentQuestion = 2;
	    }
	}
	else if (currentQuestion == 2) {
		if (thiselement == button1) {
			firstOne = 1;

			questiontext.textContent = "Question 3: I would want a drone...";
			button1.textContent = "That is portable but can't fly in heavy wind.";
			button2.textContent = "That is hard to travel with but can fly in wind.";
			currentQuestion = 3;
		}
		else if (thiselement == button2)
		{
			firstOne = 2;

			questiontext.textContent = "Question 3: I would want a drone...";
			button1.textContent = "That is portable but can't fly in heavy wind.";
			button2.textContent = "That is hard to travel with but can fly in wind.";
			currentQuestion = 3;
		}
	}
	else if (currentQuestion == 3) {
		button1.textContent = "Restart";
		button2.textContent = "Restart";
		currentQuestion = 0;
		if (thiselement == button1) {
			if (firstOne == 1) {
				questiontext.textContent = "The DJI Mavic is the right drone for you at $999.00";
			}
			else (firstOne == 2)
			{
				questiontext.textContent = "The OnagoFly is the right drone for you at $399.00";
			}

		}
		else if (thiselement == button2)
		{
			if (firstOne == 1) {
				questiontext.textContent = "The Inspire 2 is the right drone for you at $2,999,00";
			}
			else (firstOne == 2)
			{
				questiontext.textContent = "The Phantom4 is the right drone for you at $1,199.00";
			}
		}
	}
}


