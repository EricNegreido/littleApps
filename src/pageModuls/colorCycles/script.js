var active = false;
let timer;
const REGEX = /^[0-9A-F]{1,2}$/i;
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', (timer) => paint(timer));
toggle.addEventListener('click', (timer) => activeInput(timer));

const inputRed = document.getElementsByName('redBox')[0];
const inputBlue = document.getElementsByName('blueBox')[0];
const inputGreen = document.getElementsByName('greenBox')[0];
const backBox = document.getElementsByClassName('mainBox')[0];

inputRed.addEventListener('input', checkInput)
inputGreen.addEventListener('input', checkInput)
inputBlue.addEventListener('input', checkInput)
function getInput() {
  const inputRed = document.getElementsByName('redBox')[0];
  const inputBlue = document.getElementsByName('blueBox')[0];
  const inputGreen = document.getElementsByName('greenBox')[0];
  const incrementRed = document.getElementsByName('redIncresement')[0];
  const incrementBlue = document.getElementsByName('blueIncresement')[0];
  const incrementGreen = document.getElementsByName('greenIncresement')[0];

  return {
    redColor: inputRed.value || '11',
    blueColor: inputBlue.value || '22',
    greenColor: inputGreen.value || '33',
    incrementBlue: parseInt(incrementBlue.value) || 0,
    incrementRed: parseInt(incrementRed.value) || 0,
    incrementGreen: parseInt(incrementGreen.value) || 0,
  };

}

function checkInput(e) {
  const errorInputBox = document.getElementsByClassName('errorRebBox')[0];
  errorInputBox.innerHTML = ""
  const value = e.target.value
  if (value.length > 2) {
    errorInputBox.innerHTML = "Ingresa como maximo 2 digitos";
  } else if (!REGEX.test(value)) {
    errorInputBox.innerHTML = "Valores permitidos 0-9 / A-F";
  }
}
function paint() {
  const blueBox = document.getElementById('blueBox');
  const redBox = document.getElementById('redBox');
  const greenBox = document.getElementById('greenBox');
  const backBox = document.getElementsByClassName('mainBox')[0];

  if (!active) {
    active = true;
    let { blueColor, redColor, greenColor, incrementBlue, incrementRed, incrementGreen } = getInput()
    console.log('blue: ', blueColor, 'Incre: ', incrementBlue, 'red: ', redColor, 'incre: ', incrementRed, 'green: ', greenColor, 'incre: ', incrementGreen);
    var initialBlue = blueColor;
    var initialRed = redColor;
    var initialGreen = greenColor;

    blueBox.style.backgroundColor = '#' + '0000' + blueColor;
    redBox.style.backgroundColor = '#' + redColor + '0000';
    greenBox.style.backgroundColor = '#' + '00' + greenColor + '00';
    timer = setInterval(function () {
      blueColor = parseInt(blueColor, 16);
      redColor = parseInt(redColor, 16);
      greenColor = parseInt(greenColor, 16);
      if (blueColor > 255) {
        blueColor = initialBlue;
      } else {
        blueColor += incrementBlue;
        blueColor = blueColor.toString(16)
        blueBox.style.backgroundColor = '#' + '0000' + blueColor;
      }

      if (redColor > 255) {
        redColor = initialRed;
      } else {
        redColor += incrementRed;
        console.log(redColor)
        redColor = redColor.toString(16)
        redBox.style.backgroundColor = '#' + redColor + '0000';
      }

      if (greenColor > 255) {
        greenColor = initialGreen;
      } else {
        greenColor += incrementGreen;
        greenColor = greenColor.toString(16)
        greenBox.style.backgroundColor = '#' + '00' + greenColor + '00';
      }

      backBox.style.backgroundColor = '#' + redColor + greenColor + blueColor;
    }, 250);
  } else {
    clearInterval(timer);
    active = false;
    blueBox.style.backgroundColor = '#FFF';
    redBox.style.backgroundColor = '#FFF';
    greenBox.style.backgroundColor = '#FFF';
    backBox.style.backgroundColor = '#FFF';
  }

}

function activeInput() {
  const inputRed = document.getElementsByName('redBox')[0];
  const inputBlue = document.getElementsByName('blueBox')[0];
  const inputGreen = document.getElementsByName('greenBox')[0];
  const incrementRed = document.getElementsByName('redIncresement')[0];
  const incrementBlue = document.getElementsByName('blueIncresement')[0];
  const incrementGreen = document.getElementsByName('greenIncresement')[0];
  inputBlue.disabled = active;
  inputGreen.disabled = active;
  inputRed.disabled = active;
  incrementBlue.disabled = active;
  incrementRed.disabled = active;
  incrementGreen.disabled = active;
}

