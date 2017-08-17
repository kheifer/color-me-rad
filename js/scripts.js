//uses a math.random to pick the color and .toString(16) to convert to a hexadecimal string
function randomColorNum(){
  return (Math.floor(Math.random() * 207) + 48).toString(16);
}
function colorGenerator(){
  return '#' + randomColorNum() + randomColorNum() + randomColorNum();
}
$(document).ready(function(){
  $("#color").submit(function(event) {
      event.preventDefault();
      var text = $('#userInput').val();
      var length = text.length;
      //using new Array(arrayLength) to create an empty array
      var colorLetters = new Array(length);
      for (var i = 0; i < length; i ++) {
          colorLetters[i]= $('<span class="some'+[i]+'"></span>').html(text[i]);
        }
        $('.result').append(colorLetters);
        function update() {
            for (var i = 0; i < length; i ++) {
              $('.some'+[i]+'').css('color', colorGenerator);
            }
          }
          update();
          setInterval(update, 50);
      });
  });
