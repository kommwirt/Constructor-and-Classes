class Person {

    constructor(nameData, ageData){
        this.name = nameData
        this.age = ageData
    }

    info(){
        return `${this.name} is ${this.age} years old`
    }
    
}

let person1 = new Person("Emanuela", 18)


console.log(person1.info())