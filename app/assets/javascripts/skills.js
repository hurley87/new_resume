
     
     function Game() {
        this.score = 0;
        this.circles = [];

        this.start = function() {
          for(var i=0; i < 3; i++) {
            //create some cirlces
            this.circles.push(new Circle());
            this.circles[i].render();
            this.circles[i].move();
          }
        };  
     }
    

    function Circle() {
      this.x = Math.random()*300;
      this.y = Math.random()*100;
      this.diameter = 30 + Math.random()*50;
      this.speed = 1000 + Math.random() * 1500;
   

      this.render = function() {
        var self = this;
        this.$me = $('<div class="circle"></div>').css({
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
          left: Math.random()*300
        }, {
            duration: this.speed,
            complete: function() {
              self.move();
            }
        });

      };

      this.kill = function() {
          this.$me.css('background-color', 'red').fadeOut(1000);

      };
      
    }
      