;(function() {

  $(document).ready(function() {

    var slider = function() {
      
      var backImg = [];
      backImg[0] = "images/1.jpg";
      backImg[1] = "images/2.jpg";
      backImg[2] = "images/3.jpg";
      
      var i = 0;
      var x = (backImg.length) - 1;
      var int = 3500;
      
      var initialize = function() {
        attachEvents();
      };
      
      var attachEvents = function() {
        $('.btnLeft').click(function() {
          left();
        });

        $('.btnRight').click(function() {
          right();
        });
      };

      var changeImg = function() {
        $('.slider').css('background-image', 'url(' + backImg[i] + ')');
      }

      var left = function() {
        (i <= 0) ? i = 3 : i--;
        changeImg(i);
      };

      var right = function() {
        (i >= x) ? i = 0 : i++;
        changeImg(i);
      };

      window.setInterval(right, int);

      changeImg(i);
      return initialize();
    }

    slider();

  });
  
})();