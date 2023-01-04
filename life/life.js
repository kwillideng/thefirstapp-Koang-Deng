// graps count value
const count = document.getElementById('count');

// define add function
const add = () => {
    const value = Number(count.innerText);
    const newValue = value + 1;
    count.innerText = newValue.toString();
}
//add function to button with Event listener 
document.getElementById('button').addEventListener('click', ()  => add());



// add Element

let root = document.getElementById('root').innerHTML = '<ul><H3>Programming<h3> <li>HTML</li><li>CSS</li><li>JavaScript</li>  </ul>'


// display the table 

const students = `[
    {name: "John", class: "High", grade: 90},
    {name: "Chuol", class: "senior", grade: 80},
    {name: "Deng", class: "senior", grade: 70},
    {name: "Hussen", class: "fresman", grade: 60},
    {name: "James", class: "Primary", grade: 56},
    {name: "Ahmed", class: "Primary", grade: 78},
]`

function buildTable(students) {
    let table = document.getElementById("table")
    for(let i = 0; i < students.length; i++){
        let row = `
        <tr> 
        <td>$(students[i].name)</td>
        <td>$(students[i].class)</td>
        <td>$(students[i].grade)</td>
        <tr>
        
        
      ` 
        
        
      table.innerHTML += row

    }
}
buildTable(students);


// submit Confirm button

let submit = document.getElementById("submit");
submit.onclick = confirm;

function confirm(){
    result = document.getElementById("result");
    this.innerText = "Confirmed"
    this.classList.add("confirmed");
    result.innerText = "THANK YOU!!"
}


const ready = document.getElementById("ready")
const counter = 1;
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    setInterval(() => {
        ready.innerText = counter;
        counter++
        if(counte > 4) location.replace("https://www.google.com")
    }, 100)
    })


let checkbox = document.getElementById('check')
checkbox.setAttribute('type', 'checked')

function changeText(id) {
    id.innerHTML = "Here you go!";
}