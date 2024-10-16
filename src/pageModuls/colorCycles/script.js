const REGEX = /^[0-9A-F]{1,2}$/i;
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => colored());
toggle.addEventListener('click', () => getInput());
const inputRed = document.getElementsByName('redBox')[0];
const inputBlue = document.getElementsByName('blueBox')[0];
const inputGreen = document.getElementsByName('greenBox')[0];
inputRed.addEventListener('input', checkInput)
inputGreen.addEventListener('input', checkInput)
inputBlue.addEventListener('input', checkInput)
function getInput(){
  const inputRed = document.getElementsByName('redBox')[0];
  const inputBlue = document.getElementsByName('blueBox')[0];
  const inputGreen = document.getElementsByName('greenBox')[0];
  const val = "red: " + inputRed.value + "blue: " + inputBlue.value + "green: " + inputGreen.value;
  console.log(val)
  return {redColor: inputRed.value || 'AA', blueColor: inputBlue.value || 'AA', greenColor: inputGreen.value || 'AA'};

}

function checkInput(e){
  const errorInputBox = document.getElementsByClassName('errorRebBox')[0];
      errorInputBox.innerHTML = ""
  const value = e.target.value
    if(value.length > 2 ){
      errorInputBox.innerHTML = "Ingresa como maximo 2 digitos";
    }else if(!REGEX.test(value)){
      errorInputBox.innerHTML = "Valores permitidos 0-9 / A-F";
    }
}
function colored() {
  const blueBox = document.getElementById('blueBox');
  const redBox = document.getElementById('redBox');
  const greenBox = document.getElementById('greenBox');
  const backBox = document.getElementsByClassName('mainBox')[0];
  const {blueColor, redColor, greenColor} = getInput()
  blueBox.style.backgroundColor = '#' + '0000' + blueColor;
  redBox.style.backgroundColor = '#' + redColor + '0000';
  greenBox.style.backgroundColor = '#' + '00' + greenColor + '00';
  backBox.style.backgroundColor = '#' + redColor + greenColor + blueColor;

}


// const blueBox = document.getElementById('blueBox');
// const redBox = document.getElementById('redBox');
// const greenBox = document.getElementById('greenBox');
// const backBox = document.getElementsByClassName('mainBox')[0];

// const defaultColor = 'ff';
// const blueColor = '11';
// const redColor = '91';
// const greenColor = '51';
// blueBox.style.backgroundColor = '#' + '0000' + defaultColor;
// redBox.style.backgroundColor = '#' + defaultColor + '0000';
// greenBox.style.backgroundColor = '#' + '00' + defaultColor + '00';
// backBox.style.backgroundColor = '#' + redColor + greenColor + blueColor;
