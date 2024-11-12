// const form = document.querySelector('.form');
// form.addEventListener('submit', handleClick);
// form.onsubmit = handleClick

function handleClick(e) {
  e.preventDefault(); // Previene el envío del formulario
  const eventName = e.target.elements["eventName"].value;
  const date = e.target.elements["date"].value;
  const time = e.target.elements["time"].value;

  console.log(eventName, date, time);
}