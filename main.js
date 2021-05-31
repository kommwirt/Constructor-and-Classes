// String for the result

let allPersons = []

// Get the inputs done

let nameInput = document.getElementById('name')
let ageInput = document.getElementById('age')
let examInput = document.getElementById('exam')
let addInput = document.getElementById('add')

// Get the output done

let errorOutput = document.getElementById('error')
let listOutput = document.getElementById('output')


class Person {

    constructor(nameData, ageData, examData){
        this.name = nameData
        this.age = ageData
        this.exam = examData
    }

    // info(){
    //     return `${this.name} is ${this.age} years old`
    // }
    
}

// let person1 = new Person("Emanuela", 18)

addInput.addEventListener('click', function () {

    if (nameInput.value.length === 0 || ageInput.value.length === 0) {
        errorOutput.style.display = "block"
    } else {
        allPersons.push(new Person(
            nameInput.value,
            ageInput.value * 1,
            examInput.checked
        ))
        newListOutput()
    }

})

function newListOutput() {
    //reset
    errorOutput.style.display = "none"
    listOutput.innerHTML = ''
    nameInput.value = ""
    ageInput.value = ""
    examInput.checked = false

    //update
    allPersons.forEach(person => {
        if (person.exam) {
            listOutput.innerHTML += `<li>${person.name}, ${person.age} years old.</li>`
        } else {
            listOutput.innerHTML += `<li class="red">${person.name}, ${person.age} years old.</li>`
        }
    })
}


// console.log(person1.info())