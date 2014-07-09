$(document).ready(function() {

			$('.clock').hide();
			$('#new-user-form').hide();
			$('.first-game').hide();
			$('.second-game').hide();

			var hangman = new Hangman();
			hangman.render();
			
			$('#start').on('click', function() {
				setInterval(setTime, 1000);
				$(this).fadeOut();
				$(".message").fadeOut();
				$('.clock').fadeIn(1000);
				$('.first-game').fadeIn(1000);
				$('#quote').remove();
			});

			var game = new Game();
      game.start();

      

      setInterval(function () {
       var colors = ["#9A12B3", "#F62459", "#52B3D9", "#2ECC71", "#F89406", "#F7CA18", "#D35400"];
       var rand =  Math.floor((Math.random() * colors.length));
       var x = Math.floor((Math.random() * 1000));
       var y = Math.floor((Math.random() * 1000));
       $('.circle2').css({
          left: x,
          top: y,
          opacity: 0.3,
          backgroundColor: colors[rand]
        });
       $('.container').append("<div class='circle2'></div>");
       $('.circle2').show(2000).hide(2000);

    }, 4000);


      $('#quote').text("Creativity is intelligence having fun.").fadeIn().fadeOut(3500);
     setInterval(function () {
       var rand =  Math.floor((Math.random() * 10));
       var quotes = [
       "I don't believe in taking right decisions. I take decisions and then make them right.",
       "If I had asked people what they wanted, they would have said faster horses.",
       "Some people want it to happen, some wish it would happen, others make it happen.",
       "I want to build something I'd be happy to be employed by 10 years out.",
       "In the business world, the rear-view mirror is always clearer than the windshield.",
       "Everything you want is on the other side of fear.",
       "I find it fascinating that a lot of business books that do well are from people who've never made any money in business.",
       "I drink to make other people more interesting.",
       "Creativity is intelligence having fun.",
       "You miss 100% of the shots you don't take"];
       $('#quote').text(quotes[rand]).fadeIn(1000).fadeOut(2500);
    }, 4000);

	
		$('.chart').each(function(){
			$(this).easyPieChart({
					size:140,
					animate: 2000,
					lineCap:'butt',
					scaleColor: false,
					barColor: "#EF4836",
					trackColor: 'transparent',
					lineWidth: 10
				});
		});
	

});