const closeModal = document.getElementsByClassName('closeModalButton')[0];
closeModal.addEventListener('click', (event) => {closeDetails(event)})



function getPersonList(){
  try {
    fetch('./moch.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.people[0].name);
      const elem = document.getElementsByClassName('personList')[0]
      data.people.forEach(person => {
        const row = document.createElement('div');
        row.tabIndex = "0";
        row.className='rowList';
        row.addEventListener('click', () => {modalDetails(person)})
        row.addEventListener('focus', () => {modalDetails(person)})
        const namePerson = document.createElement('p');
        namePerson.className='namePerson';
      namePerson.textContent=`${person.name}`;
      row.appendChild(namePerson);
      elem.appendChild(row);
      });
      
    });
  } catch (error) {
    return error
  }
}

function closeDetails(event){
  event.preventDefault()
  const modal = document.getElementsByClassName('modalDetails')[0];
  modal.style.display = 'none';
}
function modalDetails(person){
  const modal = document.getElementsByClassName('modalDetails')[0];
  modal.style.display = 'block';
  const form = document.getElementById('modalForm');
      form.name.value=`${person.name}`;
      form.address.value=`${person.street}`;
      form.number.value=`${person.telephone}`;
      form.date.value=`${person.birthday}`;
  return;
}

getPersonList()