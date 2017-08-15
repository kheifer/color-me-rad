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

// function value() {
//   return (Math.floor(Math.random() * 207) + 48).toString(16);
// }
//
// function randomColor() {
//   return '#' + value() + value() + value();
// }

// var body = document.body;
//   var text = body.innerHTML;
//   var len = text.length;
//
//   var letters = new Array(len);
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < len; i ++) {
//     var element = document.createElement('span');
//     element.innerHTML = text[i];
//     letters[i] = element;
//     fragment.appendChild(element);
//   }
//
//   body.innerHTML = '';
//   body.appendChild(fragment);
//
//   function update() {
//     for (var i = 0; i < len; i ++) {
//       letters[i].style.color = randomColor();
//     }
//   }
//
//   update();
//   setInterval(update, 100);
//
// };
