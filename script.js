function getRandomBackground() {
  var numBackgrounds = 7; // Jumlah total latar belakang yang Anda miliki
  var randomIndex = Math.floor(Math.random() * numBackgrounds) + 1;
  var imagePath = 'backgrounds/background' + randomIndex + '.png';

  return imagePath;
}

function setRandomBackground() {
  var randomBackground = getRandomBackground();
  var element = document.querySelector('.random-background');
  element.style.backgroundImage = 'url(' + randomBackground + ')';
}

setRandomBackground();
