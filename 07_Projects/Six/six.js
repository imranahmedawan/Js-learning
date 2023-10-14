let intervalID;

document.getElementById('start').addEventListener('click', function () {
  const bgColorUpdate = function () {
    document.body.style.backgroundColor = randomCOlor();
  };
  intervalID = setInterval(bgColorUpdate, 500);
});
document.getElementById('stop').addEventListener('click', function () {
  clearInterval(intervalID);
  intervalID = null;
});
function randomCOlor() {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let hexIndex = Math.floor(Math.random() * 16);
    color += hex[hexIndex];
  }
  return color;
}