function solve() {
    document.querySelector('form button').addEventListener('click', (event)=> {
        event.preventDefault();
      });
      document.querySelector('form button').addEventListener('click', submit);
      document.querySelectorAll('#exercise button')[1].addEventListener('click', search);
}

function submit() {
    let inputs = document.querySelectorAll('.user-info input');
    let tableBody = document.querySelector('table tbody');
    let username = inputs[0].value;
    let email = inputs[2].value;
 
    let checkBoxes = Array.from(document.querySelectorAll('.topics input'))
        .filter(x => x.checked)
        .map(x => x.value)
        .join(' ');
    if(username !== '' && email !== '' && checkBoxes !== ''){
        let row = document.createElement('tr');
        let columnOne = document.createElement('td');
        columnOne.textContent = username;
        let columnTwo = document.createElement('td');
        columnTwo.textContent = email;
        let columnThree = document.createElement('td');
        columnThree.textContent = checkBoxes;
        
        row.appendChild(columnOne);
        row.appendChild(columnTwo);
        row.appendChild(columnThree);
        tableBody.appendChild(row);
    }
    inputs[0].value = '';
    inputs[2].value = '';
    Array.from( document.querySelectorAll('.topics input')).filter(x => x.checked = false);  //// uncheck the checkbox
}

function search() {
    let searchWord = document.querySelectorAll('input[type = "text"]')[2].value;
    Array.from(document.getElementsByTagName('tbody')[0].children)
        .forEach(x => x.style.visibility = "visible");
    
    Array.from(document.getElementsByTagName('tbody')[0].children)
        .filter(x => !x.innerText.includes(searchWord))
        .forEach(x => x.style.visibility = "hidden");
}
