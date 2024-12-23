
function addLesson() {
    const time = document.getElementById('time').value;
    const subject = document.getElementById('subject').value;
    const week =document.getElementById('week').value;
    const work =document.getElementById('work').value;
    const name =document.getElementById('name').value;


    if (time === "" || subject === "") {
        alert("Будь ласка, заповніть всі поля.");
        return;
    }

    const table = document.getElementById('schedule').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const timeCell = newRow.insertCell(0);
    timeCell.textContent = time;


    const subjectCell = newRow.insertCell(1);
    subjectCell.textContent = subject;


    const weekCell = newRow.insertCell(2);
    weekCell.textContent = week;


    const workCell = newRow.insertCell(3);
    workCell.textContent = work;


    const nameCell = newRow.insertCell(4);
    nameCell.textContent = name;


    const deleteCell = newRow.insertCell(5);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add('delete');
    deleteButton.onclick = function () {
        table.deleteRow(newRow.rowIndex - 1); 
    };
    deleteCell.appendChild(deleteButton);


    


    document.getElementById('time').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('week').value = "";
    document.getElementById('work').value = "";
    document.getElementById('name').value = "";
}

let h2=document.querySelector(".h2")
let contact=document.querySelector(".contact")
h2.addEventListener("click",function(){
    contact.style.display="block"
})