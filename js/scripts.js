//uses a math.random to pick the color and .toString(16) to convert to a hexadecimal string
function randomColorNum(){
  return (Math.floor(Math.random() * 207) + 48).toString(16);
}
function colorGenerator(){
  return '#' + randomColorNum() + randomColorNum() + randomColorNum();
}
