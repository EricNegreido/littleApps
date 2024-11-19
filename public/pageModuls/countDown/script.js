const form = document.querySelector('.form');
const modalM = document.getElementById('modalMessage');
form.onsubmit = handleClick
modalM.style.display = "none";

function handleClick(e) {
  e.preventDefault(); // Previene el envío del formulario
  const modalM = document.getElementById('modalMessage');
  const eventName = e.target.elements["eventName"].value;
  if (!eventName) {
    modalM.innerText = "Error: ¡Evento sin Nombre!";
    modalM.style.display = "block";
  }
  const date = e.target.elements["date"].value;
  const isValidDate = validateDate(date);
  if (isValidDate != true) {
    modalM.innerText = "Error: " + isValidDate;
    modalM.style.display = "block";
  }
  const time = e.target.elements["time"].value || '12:00';
  console.log(time);
  const isValidTime = validateTime(time);
  if (isValidTime != true) {
    modalM.innerText = "Error: " + isValidTime;
    modalM.style.display = "block";
  }

  const event = {
    "name": eventName,
    "date": date,
    "time": time,
  }

  return event;
}

const DATE_REGEX = /^(\d{4})(\-)(0[1-9]|1[012])(\-)(0[1-9]|[1-2]\d|3[01])$/;
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth() + 1;
const CURRENT_DAY = new Date().getDay();
console.log(CURRENT_YEAR);

function validateDate(eventDate) {

  /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
  if (!eventDate.match(DATE_REGEX)) {
    const message = "Formato no valido, ingrese dd/mm/aaaa"
    return message
  }

  /* Comprobar los días del mes */
  const day = parseInt(eventDate.split('-')[2])
  const month = parseInt(eventDate.split('-')[1])
  const year = parseInt(eventDate.split('-')[0])
  const monthDays = new Date(year, month, 0).getDate()
  if (day > monthDays) {
    const message = "El día ingresado no existe"
    return message
  }

  /* Comprobar que el año no sea superior al actual*/
  if (year < CURRENT_YEAR) {
    const message = "El Año seleccionado ya paso, ingrese el año actual o proximo"
    return message
  } else if (year == CURRENT_YEAR) {
    if (month < CURRENT_MONTH) {
      const message = "El mes seleccionado ya paso, ingrese el mes actual o proximo"
      return message
    } else if (month == CURRENT_MONTH) {
      if (day < CURRENT_MONTH) {
        const message = "El día seleccionado ya paso, ingrese el día actual o proximo"
        return message
      }
    }
  }
  return true
}

const TIME_REGEX = /^(0\d|1\d|2[0-3])(\:)([0-5]\d)$/;

function validateTime(eventTime) {

  /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
  if (!eventTime.match(TIME_REGEX)) {
    const message = "Formato no valido, ingrese hora:minutos"
    return message
  }

  /* Comprobar los días del mes */
  const day = parseInt(eventTime.split('-')[2])
  const month = parseInt(eventTime.split('-')[1])
  const year = parseInt(eventTime.split('-')[0])
  const monthDays = new Date(year, month, 0).getDate()
  if (day > monthDays) {
    const message = "El día ingresado no existe"
    return message
  }

  /* Comprobar que el año no sea superior al actual*/
  if (year < CURRENT_YEAR) {
    const message = "El Año seleccionado ya paso, ingrese el año actual o proximo"
    return message
  } else if (year == CURRENT_YEAR) {
    if (month < CURRENT_MONTH) {
      const message = "El mes seleccionado ya paso, ingrese el mes actual o proximo"
      return message
    } else if (month == CURRENT_MONTH) {
      if (day < CURRENT_MONTH) {
        const message = "El día seleccionado ya paso, ingrese el día actual o proximo"
        return message
      }
    }
  }
  return true
}