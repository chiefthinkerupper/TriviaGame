var panel = $("#play-area");

$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

var questions = [{
	question: "Who was the lead singer for Mother Love Bone?",
	choices: ["Bruce Fairweather", "Stone Gossard", "Jeff Ament", "Greg Gilmore", "Andrew Wood"],
	correctAnswer: "Andrew Wood"

}, {	

	question: "Who was the guitarist for Soungarden?",
	choices: ["Kim Thayil", "Ben Shepherd", "Matt Cameron", "Chris Cornell"],
	correctAnswer: "Kim Thayil"

}, {

	question: "Who was the original drummer for Pearl Jam?",
	choices: ["Dave Krusen", "Matt Chamberlain", "Dave Abbruzzese", "Jack Irons", "Matt Cameron"],
	correctAnswer: "Matt Chamberlain"

}, {

	question: "Who was the original bass player for Alice in Chains?",
	choices: ["Jerry Cantrell", "William DuVall", "Sean Kinney", "Mike Inez", "Layne Staley", "Mike Starr"],
	correctAnswer: "Mike Starr"

}, {

	question: "Who was NOT in Nirvana?",
	choices: ["Aaron Burckhard", "Chad Channing", "Kurt Cobain", "Dale Crover", "Jason Everman", "Dave Foster", "David Gilmour", "Dave Grohl", "Krist Novoselic", "Dan Peters", "Pat Smear"],
	correctAnswer: "David Gilmour"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='done'>DONE</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   panel.html("<h2>You're Done!</h2>");
  	   panel.append("<h3>You got this many right: " + this.correct + "</h3>");
  	   panel.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
  	   panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };
