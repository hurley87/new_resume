

function Hangman() {
		this.start_a = ["-", "-", "-", "-", "-", "-", "-"];
		this.end_a = ["b", "e", "r", "n", "a", "r", "d"];
		this.count = 0;

		this.render = function() {
			var str = "abcdefghijklmnopqrstuvwxyz";
			var alphaArray = str.split("");
			$('.name').text(this.start_a.join(""));
			var body = ["#head", "#body", "#leg1", "#leg2", "#arm1", "#arm2"];

			for(var i =0; i < body.length; i++) {
				$(body[i]).hide();
			}

			for(var i = 0; i < alphaArray.length/2; i++) {
				$('.row').eq(0).append("<span class='letter'>" + alphaArray[i] + "</span>");
			}
			for(var i = alphaArray.length/2; i < alphaArray.length; i++) {
					$('.row').eq(1).append("<span class='letter'>" + alphaArray[i] + "</span>");
			}

			this.pickLetter(body);

		};

		this.pickLetter = function(body) {
			var self = this;
			$('.row').on('click', ".letter", function() {
					var letter = $(this).text();
					var index = self.end_a.indexOf(letter);
					if (index === -1) {
						$(body[self.count]).show();
						self.count++;
					} else if(letter === "r") {
						self.start_a[2] = "r";
						self.start_a[5] = "r";
					} else {
						self.start_a[index] = letter;
						
					}
					$('.name').text(self.start_a.join(""));
					$(this).fadeOut(200);
					self.checkWin(self.start_a);
			});

		};

		this.checkWin = function(start_a) {
				if($('.name').text() == "bernard" || this.count == 6) {
						$('.second-game').show(1000);
						$('.first-game').slideUp(1000);
				}
			 
		}

		
}