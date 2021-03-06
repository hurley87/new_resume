
     
     function Game() {
        this.score = 0;
        this.circles = [];
        var skills = ["Ruby", "JS", "AJAX", "jQuery", "Rails", "HTML5"];

        this.start = function() {
          for(var i=0; i < 6; i++) {
            //create some cirlces
            this.circles.push(new Circle());
            this.circles[i].render(skills[i]);
            this.circles[i].move();
            $('#'+skills[i]).hide();
          }

          $('#game').on('click', function(event) {
               if(event.target == $('#game')[0]) {
                  totalSeconds += 5;
                  $('#plus_five').fadeIn(500).fadeOut(500);
               }
          });
        }; 

     }
    

    function Circle() {
      this.x = Math.random()*300;
      this.y = Math.random()*50;
      this.diameter = 50;
      this.speed = 1000 + Math.random() * 1500;
   

      this.render = function(skill) {
        var self = this;
        this.$me = $('<div class="circle"><br>'+ skill +'</div>').css({
          left: this.x,
          top: this.y,
          height: this.diameter,
          width: this.diameter
        }).on('click', function() {
            self.kill();
        });
        $('#game').append(this.$me);
      };

      this.move = function() {
        var self = this;

        this.$me.animate({
          top: Math.random()*100,
          left: Math.random()*500
        }, {
            duration: this.speed,
            complete: function() {
              self.move();
            }
        });

      };

      this.kill = function() {
          var skill = this.$me.text();
          $('#'+skill).fadeIn(800).easyPieChart({
          size:140,
          animate: 2000,
          lineCap:'butt',
          scaleColor: false,
          barColor: "#EF4836",
          trackColor: 'transparent',
          lineWidth: 10
        });;
          this.$me.css('background-color', '#EF4836').fadeOut(500);
          this.$me.remove();
          if ($('#game').children().length == 0) {
              $('.second-game').fadeOut(1500);
              $('#new-user-form').slideDown(3000);
              $('#winTime').text(totalSeconds);
              $('#user_time').val(totalSeconds);
              $('.clock').hide();
              $('header').slideDown(3000);
          }

      };
      
    }
      